webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/pages/index.jsx":
/*!*****************************!*\
  !*** ./src/pages/index.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.styles */ \"./src/pages/index.styles.js\");\n/* harmony import */ var _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/search-bar/search-bar.component */ \"./src/components/search-bar/search-bar.component.jsx\");\n/* harmony import */ var _components_cart_container_cart_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/cart-container/cart-container.component */ \"./src/components/cart-container/cart-container.component.jsx\");\n/* harmony import */ var _components_delivery_date_delivery_date_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/delivery-date/delivery-date.component */ \"./src/components/delivery-date/delivery-date.component.jsx\");\n/* harmony import */ var _components_prices_container_prices_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/prices-container/prices-container.component */ \"./src/components/prices-container/prices-container.component.jsx\");\n/* harmony import */ var _components_complete_order_complete_order_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/complete-order/complete.order.component */ \"./src/components/complete-order/complete.order.component.jsx\");\n\n\nvar _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\nvar Index = function Index() {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(''),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      searchBarInput = _React$useState2[0],\n      setSearchBarInput = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]),\n      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState3, 2),\n      cartItems = _React$useState4[0],\n      setCartItems = _React$useState4[1];\n\n  return __jsx(\"div\", {\n    className: \"homepage\"\n  }, __jsx(_index_styles__WEBPACK_IMPORTED_MODULE_2__[\"GlobalStyle\"], null), __jsx(_components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    setSearchBar: setSearchBarInput\n  }), __jsx(_components_cart_container_cart_container_component__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    searchBarInput: searchBarInput,\n    setCartItems: setCartItems\n  }), __jsx(_components_delivery_date_delivery_date_component__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null), __jsx(_components_prices_container_prices_container_component__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null), __jsx(_components_complete_order_complete_order_component__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null));\n};\n\n_s(Index, \"q3V16nxyPfr1FuRMiw/s3JqB8hE=\");\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXguanN4PzBlZDciXSwibmFtZXMiOlsiSW5kZXgiLCJSZWFjdCIsInVzZVN0YXRlIiwic2VhcmNoQmFySW5wdXQiLCJzZXRTZWFyY2hCYXJJbnB1dCIsImNhcnRJdGVtcyIsInNldENhcnRJdGVtcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUFBLHdCQUMwQkMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FEMUI7QUFBQTtBQUFBLE1BQ1hDLGNBRFc7QUFBQSxNQUNLQyxpQkFETDs7QUFBQSx5QkFFZ0JILDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBRmhCO0FBQUE7QUFBQSxNQUVYRyxTQUZXO0FBQUEsTUFFQUMsWUFGQTs7QUFJbEIsU0FDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0UsTUFBQyx5REFBRCxPQURGLEVBRUUsTUFBQyxtRkFBRDtBQUFXLGdCQUFZLEVBQUVGO0FBQXpCLElBRkYsRUFHRSxNQUFDLDJGQUFEO0FBQWUsa0JBQWMsRUFBRUQsY0FBL0I7QUFBK0MsZ0JBQVksRUFBRUc7QUFBN0QsSUFIRixFQUlFLE1BQUMseUZBQUQsT0FKRixFQUtFLE1BQUMsK0ZBQUQsT0FMRixFQU1FLE1BQUMsMkZBQUQsT0FORixDQURGO0FBVUQsQ0FkRDs7R0FBTU4sSzs7S0FBQUEsSztBQWVTQSxvRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgR2xvYmFsU3R5bGUgfSBmcm9tICcuL2luZGV4LnN0eWxlcyc7XG5cbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9zZWFyY2gtYmFyL3NlYXJjaC1iYXIuY29tcG9uZW50JztcbmltcG9ydCBDYXJ0Q29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvY2FydC1jb250YWluZXIvY2FydC1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCBEZWxpdmVyeURhdGUgZnJvbSAnLi4vY29tcG9uZW50cy9kZWxpdmVyeS1kYXRlL2RlbGl2ZXJ5LWRhdGUuY29tcG9uZW50JztcbmltcG9ydCBQcmljZXNDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9wcmljZXMtY29udGFpbmVyL3ByaWNlcy1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCBDb21wbGV0ZUJ1dHRvbkNvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL2NvbXBsZXRlLW9yZGVyL2NvbXBsZXRlLm9yZGVyLmNvbXBvbmVudCc7XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICBjb25zdCBbc2VhcmNoQmFySW5wdXQsIHNldFNlYXJjaEJhcklucHV0XSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxuICBjb25zdCBbY2FydEl0ZW1zLCBzZXRDYXJ0SXRlbXNdID0gUmVhY3QudXNlU3RhdGUoW10pXG4gIFxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdob21lcGFnZSc+XG4gICAgICA8R2xvYmFsU3R5bGUvPlxuICAgICAgPFNlYXJjaEJhciBzZXRTZWFyY2hCYXI9e3NldFNlYXJjaEJhcklucHV0fS8+XG4gICAgICA8Q2FydENvbnRhaW5lciBzZWFyY2hCYXJJbnB1dD17c2VhcmNoQmFySW5wdXR9IHNldENhcnRJdGVtcz17c2V0Q2FydEl0ZW1zfS8+XG4gICAgICA8RGVsaXZlcnlEYXRlLz5cbiAgICAgIDxQcmljZXNDb250YWluZXIvPlxuICAgICAgPENvbXBsZXRlQnV0dG9uQ29tcG9uZW50Lz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgSW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.jsx\n");

/***/ })

})