webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/search-bar/search-bar.component.jsx":
/*!************************************************************!*\
  !*** ./src/components/search-bar/search-bar.component.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _search_bar_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-bar.styles */ \"./src/components/search-bar/search-bar.styles.js\");\n/* harmony import */ var _src_public_items_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src-public/items-data */ \"./src-public/items-data.js\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar handleChange = function handleChange(e, setSearchBar) {\n  setSearchBar(e.target.value.length !== 0 ? false : true);\n  console.log(_src_public_items_data__WEBPACK_IMPORTED_MODULE_2__[\"default\"].items.filter(function (item) {\n    return item.name.toLowerCase().includes(e.target.value);\n  }));\n};\n\nvar SearchBar = function SearchBar(_ref) {\n  var setSearchBar = _ref.setSearchBar;\n  return __jsx(_search_bar_styles__WEBPACK_IMPORTED_MODULE_1__[\"SearchBarInput\"], {\n    onChange: function onChange() {\n      return handleChange(event, setSearchBar);\n    }\n  });\n};\n\n_c = SearchBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchBar);\n\nvar _c;\n\n$RefreshReg$(_c, \"SearchBar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZWFyY2gtYmFyL3NlYXJjaC1iYXIuY29tcG9uZW50LmpzeD82Mjk1Il0sIm5hbWVzIjpbImhhbmRsZUNoYW5nZSIsImUiLCJzZXRTZWFyY2hCYXIiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJJVEVNU19EQVRBIiwiaXRlbXMiLCJmaWx0ZXIiLCJpdGVtIiwibmFtZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJTZWFyY2hCYXIiLCJldmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQsRUFBSUMsWUFBSixFQUFxQjtBQUN4Q0EsY0FBWSxDQUFDRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBVCxDQUFlQyxNQUFmLEtBQTBCLENBQTFCLEdBQThCLEtBQTlCLEdBQXNDLElBQXZDLENBQVo7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlDLDhEQUFVLENBQUNDLEtBQVgsQ0FBaUJDLE1BQWpCLENBQXdCLFVBQUFDLElBQUk7QUFBQSxXQUFJQSxJQUFJLENBQUNDLElBQUwsQ0FBVUMsV0FBVixHQUF3QkMsUUFBeEIsQ0FBaUNiLENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUExQyxDQUFKO0FBQUEsR0FBNUIsQ0FBWjtBQUNELENBSEQ7O0FBS0EsSUFBTVcsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBc0I7QUFBQSxNQUFuQmIsWUFBbUIsUUFBbkJBLFlBQW1CO0FBQ3RDLFNBQ0UsTUFBQyxpRUFBRDtBQUNFLFlBQVEsRUFBRTtBQUFBLGFBQU1GLFlBQVksQ0FBQ2dCLEtBQUQsRUFBUWQsWUFBUixDQUFsQjtBQUFBO0FBRFosSUFERjtBQUtELENBTkQ7O0tBQU1hLFM7QUFRU0Esd0VBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zZWFyY2gtYmFyL3NlYXJjaC1iYXIuY29tcG9uZW50LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBTZWFyY2hCYXJJbnB1dCB9IGZyb20gJy4vc2VhcmNoLWJhci5zdHlsZXMnO1xuaW1wb3J0IElURU1TX0RBVEEgZnJvbSAnLi4vLi4vLi4vc3JjLXB1YmxpYy9pdGVtcy1kYXRhJztcblxuY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUsIHNldFNlYXJjaEJhcikgPT4ge1xuICBzZXRTZWFyY2hCYXIoZS50YXJnZXQudmFsdWUubGVuZ3RoICE9PSAwID8gZmFsc2UgOiB0cnVlIClcbiAgY29uc29sZS5sb2coSVRFTVNfREFUQS5pdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhlLnRhcmdldC52YWx1ZSkpKVxufVxuXG5jb25zdCBTZWFyY2hCYXIgPSAoeyBzZXRTZWFyY2hCYXIgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxTZWFyY2hCYXJJbnB1dFxuICAgICAgb25DaGFuZ2U9eygpID0+IGhhbmRsZUNoYW5nZShldmVudCwgc2V0U2VhcmNoQmFyKX1cbiAgICAvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEJhcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/search-bar/search-bar.component.jsx\n");

/***/ })

})