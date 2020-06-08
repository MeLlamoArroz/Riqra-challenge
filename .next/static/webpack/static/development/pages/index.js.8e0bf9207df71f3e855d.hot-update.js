webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/prices-container/prices-container.styles.js":
/*!********************************************************************!*\
  !*** ./src/components/prices-container/prices-container.styles.js ***!
  \********************************************************************/
/*! exports provided: Pricing, DetailedPrice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Pricing\", function() { return Pricing; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DetailedPrice\", function() { return DetailedPrice; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar Pricing = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"prices-containerstyles__Pricing\",\n  componentId: \"sc-1rsr1j3-0\"\n})([\"position:absolute;width:360px;height:160px;margin-left:544px;margin-top:168px;background:#FFFFFF;border-radius:4px;\"]);\nvar DetailedPrice = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"prices-containerstyles__DetailedPrice\",\n  componentId: \"sc-1rsr1j3-1\"\n})([\"width:90%;height:5%;display:flex;justify-content:space-between;font-size:18px;margin-top:16px;margin-left:16px;padding:\", \";&:before{width:16px;content:\\\"\\\";background-color:\", \";}\"], function (props) {\n  return props.total ? '15px 0' : '3px 0';\n}, function (props) {\n  return props.shipping ? 'yellow' : 'white';\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wcmljZXMtY29udGFpbmVyL3ByaWNlcy1jb250YWluZXIuc3R5bGVzLmpzPzJiNTkiXSwibmFtZXMiOlsiUHJpY2luZyIsInN0eWxlZCIsImRpdiIsIkRldGFpbGVkUHJpY2UiLCJwcm9wcyIsInRvdGFsIiwic2hpcHBpbmciXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxJQUFNQSxPQUFPLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsMkhBQWI7QUFVQSxJQUFNQyxhQUFhLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsNkxBUWIsVUFBQUUsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixHQUFjLFFBQWQsR0FBeUIsT0FBN0I7QUFBQSxDQVJRLEVBWUYsVUFBQUQsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0UsUUFBTixHQUFpQixRQUFqQixHQUE0QixPQUFoQztBQUFBLENBWkgsQ0FBbkIiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9wcmljZXMtY29udGFpbmVyL3ByaWNlcy1jb250YWluZXIuc3R5bGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBQcmljaW5nID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzYwcHg7XG4gIGhlaWdodDogMTYwcHg7XG4gIG1hcmdpbi1sZWZ0OiA1NDRweDtcbiAgbWFyZ2luLXRvcDogMTY4cHg7XG5cbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuYFxuZXhwb3J0IGNvbnN0IERldGFpbGVkUHJpY2UgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmc6ICR7cHJvcHMgPT4gcHJvcHMudG90YWwgPyAnMTVweCAwJyA6ICczcHggMCd9O1xuICAmOmJlZm9yZSB7XG4gICAgd2lkdGg6IDE2cHg7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnNoaXBwaW5nID8gJ3llbGxvdycgOiAnd2hpdGUnfTtcbiAgfVxuICAvKiBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnNoaXBwaW5nID8gJ3llbGxvdycgOiAnd2hpdGUnfTsgKi9cbmAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/prices-container/prices-container.styles.js\n");

/***/ })

})