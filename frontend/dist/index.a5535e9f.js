// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"6xvnb":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "9559a66ea5535e9f";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"1E7ZB":[function(require,module,exports,__globalThis) {
var _header = require("./components/header");
var _sidebar = require("./components/sidebar");
var _clearbody = require("./functions/clearbody");
var _about = require("./pages/about");
var _administracao = require("./pages/administracao");
var _brinquedo = require("./pages/Brinquedo");
var _catalogo = require("./pages/catalogo");
var _home = require("./pages/home");
var _novoBrinquedo = require("./pages/novoBrinquedo");
function renderByHashChange() {
    (0, _clearbody.ClearBody)();
    (0, _sidebar.SideBar)();
    switch(location.hash){
        case '':
        case undefined:
        case '#home':
            (0, _home.homePage)();
            break;
        case '#catalogo':
            (0, _catalogo.criarCatalogo)();
            break;
        case '#admin':
            (0, _administracao.administracao)();
            break;
        case '#about':
            (0, _about.aboutUs)();
            break;
        case '#brinquedo':
            (0, _brinquedo.criarBrinquedo)();
            break;
        case '#toymaker':
            (0, _novoBrinquedo.NewToyForm)();
            break;
    }
}
(0, _header.createHeader)();
renderByHashChange();
window.addEventListener('hashchange', renderByHashChange);
window.addEventListener("load", renderByHashChange);

},{"./components/header":"i9Hva","./components/sidebar":"2O7Kx","./functions/clearbody":"e1A7F","./pages/about":"8zoV7","./pages/Brinquedo":"4PeLC","./pages/catalogo":"3q6Yq","./pages/home":"1VBCE","./pages/novoBrinquedo":"iIXVk","./pages/administracao":"bIm5Q"}],"i9Hva":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createHeader", ()=>createHeader);
const createHeader = ()=>{
    const $header = `
    <img src="https://placehold.co/175x100" alt="logo">
        <div class="container d-flex justify-content-center align-items-center">
            <div class="d-flex flex-column align-items-center">
                <h1 class="text-center">100Esperan\xe7a</h1>
            </div>
        </div>
    `;
    const header = document.createElement('header');
    header.classList = 'bg-warning';
    header.insertAdjacentHTML('afterbegin', $header);
    document.body.insertAdjacentElement('afterbegin', header);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"2O7Kx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SideBar", ()=>SideBar);
var _main = require("./main");
const SideBar = ()=>{
    const $sidebar = `
        <section class="sidebar d-none d-sm-block bg-warning vh-100" id="sidebar" style="width: 175px; position: fixed; left: 0;"> 
            <nav>
                <h1>Menu</h1>
                    <div class="list-group">
                        <a href="#home" class="nav-link list-group-item list-group-item-warning list-group-item-action"  >
                            Home
                        </a>
                        <a href="#catalogo" class="nav-link list-group-item list-group-item-warning list-group-item-action"  >
                            Cat\xe1logo de Brinquedos
                        </a>
                        <a href="#admin" class="nav-link list-group-item list-group-item-warning list-group-item-action"  >
                            Administra\xe7\xe3o
                        </a>    
                        <a href="#about" class="nav-link list-group-item list-group-item-warning list-group-item-action"  >
                            Sobre a Equipe
                        </a>
                    </div>
            </nav>
        </section>
    `;
    const main = (0, _main.CreateMain)();
    main.insertAdjacentHTML('afterbegin', $sidebar);
    // Aqui é o js pra fazer o select funcionar ao clicar no menu da sidebar
    if (typeof window !== 'undefined') {
        const navLinks = document.querySelectorAll('.nav-link');
        const activeClass = 'active';
        navLinks.forEach((link)=>{
            link.addEventListener('click', function() {
                // Remove a classe 'active' de todos os links
                document.querySelectorAll('.nav-link.active').forEach((activeLink)=>{
                    activeLink.classList.remove(activeClass);
                });
                // Adiciona a classe 'active' ao link clicado
                this.classList.add(activeClass);
                // Salva o ID do link no localStorage
                localStorage.setItem('activeNavLinkId', this.getAttribute('href'));
            });
        });
        // Define o link ativo na inicialização
        const savedNavLinkId = localStorage.getItem('activeNavLinkId');
        if (savedNavLinkId) {
            const activeLink = document.querySelector(`[href="${savedNavLinkId}"]`);
            if (activeLink) activeLink.classList.add(activeClass);
            else if (navLinks.length > 0) {
                navLinks[0].classList.add(activeClass);
                localStorage.setItem('activeNavLinkId', navLinks[0].getAttribute('href'));
            }
        } else if (navLinks.length > 0) {
            navLinks[0].classList.add(activeClass);
            localStorage.setItem('activeNavLinkId', navLinks[0].getAttribute('href'));
        }
    }
};

},{"./main":"gfq3l","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gfq3l":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CreateMain", ()=>CreateMain);
const CreateMain = ()=>{
    let main = document.getElementById('main');
    if (!main) {
        main = document.createElement('main');
        main.id = 'main';
        main.style.marginLeft = "175px"; // Coloquei uma margin do tamanho da sidebar pra main começar a partir dela e o conteúdo ficar alinhado, gambiarra (Y)
        const header = document.getElementsByTagName('header')[0];
        if (header) header.insertAdjacentElement('afterend', main);
        const footer = document.getElementsByTagName('footer')[0];
        if (footer) footer.insertAdjacentElement('beforebegin', main);
        else document.body.appendChild(main);
    }
    return main;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e1A7F":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ClearBody", ()=>ClearBody);
function ClearBody() {
    const $main = document.querySelector('main');
    if ($main) {
        $main.innerHTML = '';
        $main.classList = '';
        const body = document.querySelector('body');
    // body[0].classList= null;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8zoV7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "aboutUs", ()=>aboutUs);
var _main = require("../components/main");
const aboutUs = ()=>{
    const $about = `
    <section class="d-inline p-2">
            <h2> Sobre a Equipe </h2>

          <ul class="d-inline-flex row p-0 m-0">
          
                <li class="list-group-item col m-3">
                    <img src="" alt="brinquedo1">
                    <label for="brinquedo1">luketa</label>
                    <p>RGM</p>
                </li>
                <li class="list-group-item col m-3">
                    <img src="" alt="brinquedo1">
                    <label for="brinquedo1">felpopinho</label>
                    <p>RGM</p>
                </li>
                <li class="list-group-item col m-3">
                    <img src="" alt="brinquedo1">
                    <label for="brinquedo1">ygona</label>
                    <p>RGM</p>
                </li>
                <li class="list-group-item col m-3">
                    <img src="" alt="brinquedo1">
                    <label for="brinquedo1">jabriel</label>
                    <p>RGM</p>
                </li>
                <li class="list-group-item col m-3">
                    <img src="" alt="brinquedo1">
                    <label for="brinquedo1">phafael o mais bixa de bh</label>
                    <p>RGM</p>
                </li>
                 <li class="list-group-item col m-3">
                    <img src="" alt="brinquedo1">
                    <label for="brinquedo1">alan</label>
                    <p>RGM</p>
                </li>
            </ul>
    <section>
    `;
    const main = (0, _main.CreateMain)();
    main.classList = "d-flex flex-col";
    main.insertAdjacentHTML("beforeend", $about);
} // amanha eu termina essa pika
 // NAO TENHO O GIT Q DELICIA
 // VOU FICAR MAIS MEIA HORA OLLHANDO PRA ESSA TELA PRETA FEIA E .. ja baixo
 // instalando se vc ta lendo isso vc ta muito desocupado
;

},{"../components/main":"gfq3l","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4PeLC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "criarBrinquedo", ()=>criarBrinquedo);
var _main = require("../components/main");
var _pistatubaraoJpg = require("../../media/pistatubarao.jpg");
var _pistatubaraoJpgDefault = parcelHelpers.interopDefault(_pistatubaraoJpg);
const img1 = (0, _pistatubaraoJpgDefault.default);
const criarBrinquedo = ()=>{
    const $brinquedo = `
    <section class="container p-2">
   
        <section class="row">
          <h2>Nome do Brinquedo</h2>
                <img class="col-sm-3 ms-3 img-thumbnail bg-dark" src="${img1}"></img>
                <section class="col align-items-center">
                    <p class="col fs-4"> C\xf3digo do Brinquedo</p> 
                    <p class="col fs-1">Descri\xe7\xe3o do Brinquedo</p>
                    <p class="col fs-3">R$</p>
                </section>

                <h2 class="pt-1 fs-1">Detalhes do Produto</h2>
                    <p> 
                        Esse brinquedo blabla \xe9 legal e tal, brinca ai e p\xe1
        </section>
    </section>
    `;
    const main = (0, _main.CreateMain)();
    main.classList = "d-flex";
    main.insertAdjacentHTML('beforeend', $brinquedo);
};

},{"../components/main":"gfq3l","../../media/pistatubarao.jpg":"eyp5S","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eyp5S":[function(require,module,exports,__globalThis) {
module.exports = require("f896fc228d1f03ef").getBundleURL('cOZeh') + "pistatubarao.a1425f1f.jpg" + "?" + Date.now();

},{"f896fc228d1f03ef":"lgJ39"}],"lgJ39":[function(require,module,exports,__globalThis) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"3q6Yq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// quando uma categoria é selecionada leva para uma vitrine so com brinquedos daquela categoria
// eu ate podia fazer isso agr, mas slc 1:18 da am, ja to chamando jessus de jenesio, peguiça
// vou fazer os html funcionar vcs q se virem depois
parcelHelpers.export(exports, "criarCatalogo", ()=>criarCatalogo);
var _main = require("../components/main");
function criarCatalogo() {
    const $catalogo = `
        <section class="p-2">
            <h2>
                Brinquedos em Destaque
            </h2>
             <ul class="d-flex p-0 m-0">
                <li class="list-group-item col m-3">
                    <img src="" alt="brinquedo1">
                    <label for="brinquedo1">descri\xe7ao</label>
                    <p>pre\xe7o</p>
                </li>
                <li class="list-group-item col m-3">
                    <img src="" alt="brinquedo1">
                    <label for="brinquedo1">descri\xe7ao</label>
                    <p>pre\xe7o</p>
                </li>
                <li class="list-group-item col m-3">
                    <img src="" alt="brinquedo1">
                    <label for="brinquedo1">descri\xe7ao</label>
                    <p>pre\xe7o</p>
                </li>
            </ul>
        </section>
    `;
    const main = (0, _main.CreateMain)();
    main.classList = "d-flex flex-col";
    main.insertAdjacentHTML("beforeend", $catalogo);
}

},{"../components/main":"gfq3l","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1VBCE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "homePage", ()=>homePage);
var _main = require("../components/main");
var _pistatubaraoJpg = require("../../media/pistatubarao.jpg");
var _pistatubaraoJpgDefault = parcelHelpers.interopDefault(_pistatubaraoJpg);
var _ben10PikaJpg = require("../../media/ben10pika.jpg");
var _ben10PikaJpgDefault = parcelHelpers.interopDefault(_ben10PikaJpg);
var _jaboloJpg = require("../../media/jabolo.jpg");
var _jaboloJpgDefault = parcelHelpers.interopDefault(_jaboloJpg);
const img3 = (0, _jaboloJpgDefault.default);
const img2 = (0, _ben10PikaJpgDefault.default);
const img1 = (0, _pistatubaraoJpgDefault.default);
const homePage = ()=>{
    const $homeHTML = `
    
    
        <section class="p-2 d-grid">
            <h2>Brinquedos em destaque</h2>
            <ul class="row p-0 m-0 text-center">
                <li class="list-group-item col m-3">
                    <a href="#brinquedo">
                        <img src="${img1}" alt="brinquedo1" >
                        <p" class="d-block ">dedscri\xe7ao</p>
                        <p>pre\xe7o</p>
                    </a>
                </li>
                <li class="list-group-item col m-3">
                    <img src="${img2}" alt="brinquedo1">
                    <p" class="d-block ">descri\xe7ao</p>
                    <p>pre\xe7o</p>
                </li>
                <li class="list-group-item col m-3">
                    <img src="${img3}" alt="brinquedo1">
                    <p" class="d-block ">descri\xe7ao</p>
                    <p>pre\xe7o</p>
                </li>
            </ul>
        </section>
    `;
    const main = (0, _main.CreateMain)();
    main.classList = "d-flex flex-col";
    main.insertAdjacentHTML('beforeend', $homeHTML);
};

},{"../components/main":"gfq3l","../../media/pistatubarao.jpg":"eyp5S","../../media/ben10pika.jpg":"agZqH","../../media/jabolo.jpg":"3Vtic","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"agZqH":[function(require,module,exports,__globalThis) {
module.exports = require("f06e5b22190ecc45").getBundleURL('cOZeh') + "ben10pika.8685591c.jpg" + "?" + Date.now();

},{"f06e5b22190ecc45":"lgJ39"}],"3Vtic":[function(require,module,exports,__globalThis) {
module.exports = require("9630b1f20b46c6d0").getBundleURL('cOZeh') + "jabolo.2d65496e.jpg" + "?" + Date.now();

},{"9630b1f20b46c6d0":"lgJ39"}],"iIXVk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NewToyForm", ()=>NewToyForm);
var _main = require("../components/main");
const NewToyForm = ()=>{
    const $toyform = `
    
    <h1 class="ms-2">Cadastro de Produto</h1>
    
    <form class="d-grid w-100 gap-1 p-5">
        <div class="form-group d-flex justify-content-between">
            <label class="text-start w-50 w-sm-25" for="exampleInputEmail1">Codigo:</label>
            <input type="email" class="form-control w-100" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="form-group d-inline-flex">
            <label class="text-start w-50 w-sm-25" for="exampleInputPassword1">Descri\xe7\xe3o:</label>
            <input type="text" class="form-control" id="exampleInputPassword1">
        </div>
        <div class="form-group d-inline-flex">
            <label class="text-start w-50 w-sm-25" for="exampleInputEmail1">Categoria:</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="form-group d-inline-flex">
            <label class="text-start w-50 w-sm-25" for="exampleInputEmail1">Marca:</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>

        <div class="form-group d-flex align-items-center">
            <label for="formFileSm" class="form-label w-50 w-sm-25">Imagem:</label>
            <input class="form-control" type="file" id="formFileSm">
        </div>

        <div class="form-group d-inline-flex">
            <label class="text-start w-50 w-sm-25" for="exampleInputEmail1">Valor:</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="form-group d-inline-flex">
            <label class="text-start w-50 w-sm-25" for="exampleInputEmail1">Detalhes:</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>

        <div class="d-flex justify-content-center mt-3 gap-2" role="group">
            <a class="btn" href="" role="button">
                <button type="submit" class="btn btn-success">
                    Salvar Dados
                </button>
            </a>

            <a class="btn" href="#admin" role="button">
                <button type="button" class="btn btn-danger">
                    Voltar
                </button>
            </a>
        </div>
    </form>
    `;
    const main = (0, _main.CreateMain)();
    main.classList = "d-flex flex-col";
    main.insertAdjacentHTML("beforeend", $toyform);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../components/main":"gfq3l"}],"bIm5Q":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "administracao", ()=>administracao);
var _main = require("../components/main");
const administracao = ()=>{
    const $adm = `
        <section class="w-100"> 
            <div class="d-flex justify-content-center">
                <table class="table table-striped table-bordered table-hover w-100 m-3">
                    <thead class="table-warning">
                        <tr>
                        <th scope="col" class="text-center">Descri\xe7\xe3o</th>
                        <th scope="col" class="text-center">Categoria</th>
                        <th scope="col" class="text-center">Valor</th>
                        <th scope="col" class="text-center">Quantidade</th>
                        <th scope="col" class="text-center">A\xe7\xe3o</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        <tr>
                            <td class="text-center">Descri\xe7\xe3o de Brinquedo</td>
                            <td class="text-center">Categoria 1</td>
                            <td class="text-center">72,90</td>
                            <td class="text-center">10</td>
                            <td class="text-center">
                                <button class="btn btn-sm btn-outline-warning">
                                    Editar
                                </button>
                                <button class="btn btn-sm btn-outline-danger">
                                    Excluir
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td class="text-center">Minha Pomba</td>
                            <td class="text-center">Categoria 8cm</td>
                            <td class="text-center">3,80</td>
                            <td class="text-center">8cm</td>
                            <td class="text-center">
                                <a class="btn" href="#edit" role="button">
                                <button class="btn btn-sm btn-outline-warning">
                                    Editar
                                </button>
                                </a>
                                <button class="btn btn-sm btn-outline-danger">
                                    Excluir
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="p-5 d-flex justify-content-center">
                <a class="btn" href="#toymaker" role="button"> 
                    <button type="button" class="btn btn-outline-success" id="MakeNewToy">
                        Novo Brinquedo
                    </button>
                </a>
            </div>
        </section>
    `;
    const main = (0, _main.CreateMain)();
    // main.classList = "d-flex flex-column align-items-center"; 
    main.insertAdjacentHTML("beforeend", $adm);
};

},{"../components/main":"gfq3l","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["6xvnb","1E7ZB"], "1E7ZB", "parcelRequire94c2")

//# sourceMappingURL=index.a5535e9f.js.map
