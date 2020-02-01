webpackHotUpdate("styles",{

/***/ "./pages/index.module.scss":
/*!*********************************!*\
  !*** ./pages/index.module.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"Layout":"Layout___6G3ix","MainWrapper":"MainWrapper___3aD2G","Resume":"Resume___8AR-q","Header":"Header___1dv_e","Main":"Main___3yLoF","Bold":"Bold___1M7Vb","MobileContact":"MobileContact___1BSxw","DesktopContact":"DesktopContact___me_UM","Pink":"Pink___3v7_h","Sidebar":"Sidebar___zMA2p"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1580535440233");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.1e725b8eaa4cd5589269.hot-update.js.map