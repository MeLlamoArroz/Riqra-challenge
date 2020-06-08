webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/search-bar/search-bar.component.jsx":
/*!************************************************************!*\
  !*** ./src/components/search-bar/search-bar.component.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _search_bar_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-bar.styles */ \"./src/components/search-bar/search-bar.styles.js\");\nvar _this = undefined;\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar SearchBar = function SearchBar(_ref) {\n  var setEmptyInput = _ref.setEmptyInput;\n  return __jsx(_search_bar_styles__WEBPACK_IMPORTED_MODULE_1__[\"SearchBarInput\"], {\n    onChange: function onChange() {\n      console.log(_this);\n    }\n  });\n};\n\n_c = SearchBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchBar);\n\nvar _c;\n\n$RefreshReg$(_c, \"SearchBar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZWFyY2gtYmFyL3NlYXJjaC1iYXIuY29tcG9uZW50LmpzeD82Mjk1Il0sIm5hbWVzIjpbIlNlYXJjaEJhciIsInNldEVtcHR5SW5wdXQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFFQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUF1QjtBQUFBLE1BQXBCQyxhQUFvQixRQUFwQkEsYUFBb0I7QUFDdkMsU0FDRSxNQUFDLGlFQUFEO0FBQ0UsWUFBUSxFQUFFLG9CQUFNO0FBQUNDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVo7QUFBa0I7QUFEckMsSUFERjtBQUtELENBTkQ7O0tBQU1ILFM7QUFRU0Esd0VBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zZWFyY2gtYmFyL3NlYXJjaC1iYXIuY29tcG9uZW50LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFNlYXJjaEJhcklucHV0IH0gZnJvbSAnLi9zZWFyY2gtYmFyLnN0eWxlcyc7XG5cbmNvbnN0IFNlYXJjaEJhciA9ICh7IHNldEVtcHR5SW5wdXQgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxTZWFyY2hCYXJJbnB1dFxuICAgICAgb25DaGFuZ2U9eygpID0+IHtjb25zb2xlLmxvZyh0aGlzKX19XG4gICAgLz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hCYXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/search-bar/search-bar.component.jsx\n");

/***/ })

})