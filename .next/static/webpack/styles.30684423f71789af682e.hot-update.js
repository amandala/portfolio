webpackHotUpdate("styles",{

/***/ "./components/Typography/index.module.scss":
/*!*************************************************!*\
  !*** ./components/Typography/index.module.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"H1":"H1___2b9EO","H2":"H2___JQmpb","H3":"H3___1C4Rt","H4":"H4___30Hq9","H5":"H5___1BJO7","P":"P___1plUR","PSmall":"PSmall___3wIzh"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1580534473869");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.30684423f71789af682e.hot-update.js.map