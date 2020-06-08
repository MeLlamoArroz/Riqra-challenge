webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/prices-container/prices-container.component.jsx":
/*!************************************************************************!*\
  !*** ./src/components/prices-container/prices-container.component.jsx ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _prices_container_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prices-container.styles */ \"./src/components/prices-container/prices-container.styles.js\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar PricesContainer = function PricesContainer(_ref) {\n  var cartItems = _ref.cartItems;\n  var productsCost = cartItems.reduce(function (acum, currentItem) {\n    return acum + currentItem.price * currentItem.quantity;\n  }, 0);\n  var shippingCost = 18 * productsCost / 100;\n  return __jsx(_prices_container_styles__WEBPACK_IMPORTED_MODULE_1__[\"Pricing\"], null, __jsx(_prices_container_styles__WEBPACK_IMPORTED_MODULE_1__[\"DetailedPrice\"], null, __jsx(\"span\", null, \"Products\"), __jsx(\"span\", null, \"$\".concat(parseFloat(productsCost).toFixed(2)))), __jsx(_prices_container_styles__WEBPACK_IMPORTED_MODULE_1__[\"DetailedPrice\"], {\n    shipping: true\n  }, __jsx(\"span\", {\n    style: {\n      fontWeight: '600'\n    }\n  }, \"Shipping Cost\"), __jsx(\"span\", null, \"$\".concat(parseFloat(shippingCost).toFixed(2)))), __jsx(_prices_container_styles__WEBPACK_IMPORTED_MODULE_1__[\"DetailedPrice\"], null, __jsx(\"span\", null, \"Taxes\"), __jsx(\"span\", null, \"$0.00\")), __jsx(_prices_container_styles__WEBPACK_IMPORTED_MODULE_1__[\"DetailedPrice\"], {\n    total: true\n  }, __jsx(\"span\", {\n    style: {\n      fontWeight: '600'\n    }\n  }, \"Total\"), __jsx(\"span\", {\n    style: {\n      color: 'red',\n      fontWeight: '600'\n    }\n  }, \"$0.00\")));\n};\n\n_c = PricesContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PricesContainer);\n\nvar _c;\n\n$RefreshReg$(_c, \"PricesContainer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wcmljZXMtY29udGFpbmVyL3ByaWNlcy1jb250YWluZXIuY29tcG9uZW50LmpzeD9kOTY5Il0sIm5hbWVzIjpbIlByaWNlc0NvbnRhaW5lciIsImNhcnRJdGVtcyIsInByb2R1Y3RzQ29zdCIsInJlZHVjZSIsImFjdW0iLCJjdXJyZW50SXRlbSIsInByaWNlIiwicXVhbnRpdHkiLCJzaGlwcGluZ0Nvc3QiLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsImZvbnRXZWlnaHQiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsT0FBbUI7QUFBQSxNQUFoQkMsU0FBZ0IsUUFBaEJBLFNBQWdCO0FBQ3pDLE1BQU1DLFlBQVksR0FBR0QsU0FBUyxDQUFDRSxNQUFWLENBQWlCLFVBQUNDLElBQUQsRUFBT0MsV0FBUDtBQUFBLFdBQ3BDRCxJQUFJLEdBQUlDLFdBQVcsQ0FBQ0MsS0FBWixHQUFvQkQsV0FBVyxDQUFDRSxRQURKO0FBQUEsR0FBakIsRUFFbkIsQ0FGbUIsQ0FBckI7QUFJQSxNQUFNQyxZQUFZLEdBQUksS0FBS04sWUFBTixHQUFzQixHQUEzQztBQUVBLFNBQ0UsTUFBQyxnRUFBRCxRQUNFLE1BQUMsc0VBQUQsUUFDRSwrQkFERixFQUVFLCtCQUFXTyxVQUFVLENBQUNQLFlBQUQsQ0FBVixDQUF5QlEsT0FBekIsQ0FBaUMsQ0FBakMsQ0FBWCxFQUZGLENBREYsRUFLRSxNQUFDLHNFQUFEO0FBQWUsWUFBUTtBQUF2QixLQUNFO0FBQU0sU0FBSyxFQUFFO0FBQUNDLGdCQUFVLEVBQUM7QUFBWjtBQUFiLHFCQURGLEVBRUUsK0JBQVdGLFVBQVUsQ0FBQ0QsWUFBRCxDQUFWLENBQXlCRSxPQUF6QixDQUFpQyxDQUFqQyxDQUFYLEVBRkYsQ0FMRixFQVNFLE1BQUMsc0VBQUQsUUFDRSw0QkFERixFQUVFLDRCQUZGLENBVEYsRUFhRSxNQUFDLHNFQUFEO0FBQWUsU0FBSztBQUFwQixLQUNFO0FBQU0sU0FBSyxFQUFFO0FBQUNDLGdCQUFVLEVBQUM7QUFBWjtBQUFiLGFBREYsRUFFRTtBQUFNLFNBQUssRUFBRTtBQUFDQyxXQUFLLEVBQUMsS0FBUDtBQUFjRCxnQkFBVSxFQUFDO0FBQXpCO0FBQWIsYUFGRixDQWJGLENBREY7QUFvQkQsQ0EzQkQ7O0tBQU1YLGU7QUE2QlNBLDhFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvcHJpY2VzLWNvbnRhaW5lci9wcmljZXMtY29udGFpbmVyLmNvbXBvbmVudC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJpY2luZywgRGV0YWlsZWRQcmljZSB9IGZyb20gJy4vcHJpY2VzLWNvbnRhaW5lci5zdHlsZXMnO1xuXG5jb25zdCBQcmljZXNDb250YWluZXIgPSAoeyBjYXJ0SXRlbXMgfSkgPT4ge1xuICBjb25zdCBwcm9kdWN0c0Nvc3QgPSBjYXJ0SXRlbXMucmVkdWNlKChhY3VtLCBjdXJyZW50SXRlbSkgPT5cbiAgICBhY3VtICsgKGN1cnJlbnRJdGVtLnByaWNlICogY3VycmVudEl0ZW0ucXVhbnRpdHkpXG4gICwgMClcblxuICBjb25zdCBzaGlwcGluZ0Nvc3QgPSAoMTggKiBwcm9kdWN0c0Nvc3QpIC8gMTAwXG5cbiAgcmV0dXJuIChcbiAgICA8UHJpY2luZz5cbiAgICAgIDxEZXRhaWxlZFByaWNlPlxuICAgICAgICA8c3Bhbj5Qcm9kdWN0czwvc3Bhbj5cbiAgICAgICAgPHNwYW4+e2AkJHtwYXJzZUZsb2F0KHByb2R1Y3RzQ29zdCkudG9GaXhlZCgyKX1gfTwvc3Bhbj5cbiAgICAgIDwvRGV0YWlsZWRQcmljZT5cbiAgICAgIDxEZXRhaWxlZFByaWNlIHNoaXBwaW5nPlxuICAgICAgICA8c3BhbiBzdHlsZT17e2ZvbnRXZWlnaHQ6JzYwMCd9fT5TaGlwcGluZyBDb3N0PC9zcGFuPlxuICAgICAgICA8c3Bhbj57YCQke3BhcnNlRmxvYXQoc2hpcHBpbmdDb3N0KS50b0ZpeGVkKDIpfWB9PC9zcGFuPlxuICAgICAgPC9EZXRhaWxlZFByaWNlPlxuICAgICAgPERldGFpbGVkUHJpY2U+XG4gICAgICAgIDxzcGFuPlRheGVzPC9zcGFuPlxuICAgICAgICA8c3Bhbj4kMC4wMDwvc3Bhbj5cbiAgICAgIDwvRGV0YWlsZWRQcmljZT5cbiAgICAgIDxEZXRhaWxlZFByaWNlIHRvdGFsPlxuICAgICAgICA8c3BhbiBzdHlsZT17e2ZvbnRXZWlnaHQ6JzYwMCd9fT5Ub3RhbDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gc3R5bGU9e3tjb2xvcjoncmVkJywgZm9udFdlaWdodDonNjAwJ319PiQwLjAwPC9zcGFuPlxuICAgICAgPC9EZXRhaWxlZFByaWNlPlxuICAgIDwvUHJpY2luZz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcmljZXNDb250YWluZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/prices-container/prices-container.component.jsx\n");

/***/ })

})