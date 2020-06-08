webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/prices-container/prices-container.component.jsx":
/*!************************************************************************!*\
  !*** ./src/components/prices-container/prices-container.component.jsx ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _prices_container_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prices-container.styles */ \"./src/components/prices-container/prices-container.styles.js\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar PricesContainer = function PricesContainer(_ref) {\n  var cartItems = _ref.cartItems;\n  var productsCost = cartItems.reduce(function (acum, currentItem) {\n    return acum + currentItem.price * currentItem.quantity;\n  }, 0);\n  var shippingCost = 10 * productsCost / 100;\n  var taxCost = 18 * productsCost / 100;\n  return __jsx(_prices_container_styles__WEBPACK_IMPORTED_MODULE_1__[\"Pricing\"], null, __jsx(_prices_container_styles__WEBPACK_IMPORTED_MODULE_1__[\"DetailedPrice\"], null, __jsx(\"span\", null, \"Products\"), __jsx(\"span\", null, \"$\".concat(parseFloat(productsCost).toFixed(2)))), __jsx(_prices_container_styles__WEBPACK_IMPORTED_MODULE_1__[\"DetailedPrice\"], {\n    shipping: true\n  }, __jsx(\"span\", {\n    style: {\n      fontWeight: '600'\n    }\n  }, \"Shipping Cost\"), __jsx(\"span\", null, \"$\".concat(parseFloat(shippingCost).toFixed(2)))), __jsx(_prices_container_styles__WEBPACK_IMPORTED_MODULE_1__[\"DetailedPrice\"], null, __jsx(\"span\", null, \"Taxes\"), __jsx(\"span\", null, \"$\".concat(parseFloat(taxCost).toFixed(2)))), __jsx(_prices_container_styles__WEBPACK_IMPORTED_MODULE_1__[\"DetailedPrice\"], {\n    total: true\n  }, __jsx(\"span\", {\n    style: {\n      fontWeight: '600'\n    }\n  }, \"Total\"), __jsx(\"span\", {\n    style: {\n      color: 'red',\n      fontWeight: '600'\n    }\n  }, \"$\".concat(parseFloat(productsCost + shippingCost + taxCost).toFixed(2)))));\n};\n\n_c = PricesContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PricesContainer);\n\nvar _c;\n\n$RefreshReg$(_c, \"PricesContainer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wcmljZXMtY29udGFpbmVyL3ByaWNlcy1jb250YWluZXIuY29tcG9uZW50LmpzeD9kOTY5Il0sIm5hbWVzIjpbIlByaWNlc0NvbnRhaW5lciIsImNhcnRJdGVtcyIsInByb2R1Y3RzQ29zdCIsInJlZHVjZSIsImFjdW0iLCJjdXJyZW50SXRlbSIsInByaWNlIiwicXVhbnRpdHkiLCJzaGlwcGluZ0Nvc3QiLCJ0YXhDb3N0IiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJmb250V2VpZ2h0IiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLE9BQW1CO0FBQUEsTUFBaEJDLFNBQWdCLFFBQWhCQSxTQUFnQjtBQUN6QyxNQUFNQyxZQUFZLEdBQUdELFNBQVMsQ0FBQ0UsTUFBVixDQUFpQixVQUFDQyxJQUFELEVBQU9DLFdBQVA7QUFBQSxXQUNwQ0QsSUFBSSxHQUFJQyxXQUFXLENBQUNDLEtBQVosR0FBb0JELFdBQVcsQ0FBQ0UsUUFESjtBQUFBLEdBQWpCLEVBRW5CLENBRm1CLENBQXJCO0FBSUEsTUFBTUMsWUFBWSxHQUFJLEtBQUtOLFlBQU4sR0FBc0IsR0FBM0M7QUFFQSxNQUFNTyxPQUFPLEdBQUksS0FBS1AsWUFBTixHQUFzQixHQUF0QztBQUVBLFNBQ0UsTUFBQyxnRUFBRCxRQUNFLE1BQUMsc0VBQUQsUUFDRSwrQkFERixFQUlFLCtCQUNPUSxVQUFVLENBQUNSLFlBQUQsQ0FBVixDQUF5QlMsT0FBekIsQ0FBaUMsQ0FBakMsQ0FEUCxFQUpGLENBREYsRUFTRSxNQUFDLHNFQUFEO0FBQWUsWUFBUTtBQUF2QixLQUNFO0FBQU0sU0FBSyxFQUFFO0FBQUNDLGdCQUFVLEVBQUM7QUFBWjtBQUFiLHFCQURGLEVBSUUsK0JBQ09GLFVBQVUsQ0FBQ0YsWUFBRCxDQUFWLENBQXlCRyxPQUF6QixDQUFpQyxDQUFqQyxDQURQLEVBSkYsQ0FURixFQWlCRSxNQUFDLHNFQUFELFFBQ0UsNEJBREYsRUFJRSwrQkFDT0QsVUFBVSxDQUFDRCxPQUFELENBQVYsQ0FBb0JFLE9BQXBCLENBQTRCLENBQTVCLENBRFAsRUFKRixDQWpCRixFQXlCRSxNQUFDLHNFQUFEO0FBQWUsU0FBSztBQUFwQixLQUNFO0FBQU0sU0FBSyxFQUFFO0FBQUNDLGdCQUFVLEVBQUM7QUFBWjtBQUFiLGFBREYsRUFJRTtBQUFNLFNBQUssRUFBRTtBQUFDQyxXQUFLLEVBQUMsS0FBUDtBQUFjRCxnQkFBVSxFQUFDO0FBQXpCO0FBQWIsZ0JBQ09GLFVBQVUsQ0FBQ1IsWUFBWSxHQUFHTSxZQUFmLEdBQThCQyxPQUEvQixDQUFWLENBQWtERSxPQUFsRCxDQUEwRCxDQUExRCxDQURQLEVBSkYsQ0F6QkYsQ0FERjtBQW9DRCxDQTdDRDs7S0FBTVgsZTtBQStDU0EsOEVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9wcmljZXMtY29udGFpbmVyL3ByaWNlcy1jb250YWluZXIuY29tcG9uZW50LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQcmljaW5nLCBEZXRhaWxlZFByaWNlIH0gZnJvbSAnLi9wcmljZXMtY29udGFpbmVyLnN0eWxlcyc7XG5cbmNvbnN0IFByaWNlc0NvbnRhaW5lciA9ICh7IGNhcnRJdGVtcyB9KSA9PiB7XG4gIGNvbnN0IHByb2R1Y3RzQ29zdCA9IGNhcnRJdGVtcy5yZWR1Y2UoKGFjdW0sIGN1cnJlbnRJdGVtKSA9PlxuICAgIGFjdW0gKyAoY3VycmVudEl0ZW0ucHJpY2UgKiBjdXJyZW50SXRlbS5xdWFudGl0eSlcbiAgLCAwKVxuXG4gIGNvbnN0IHNoaXBwaW5nQ29zdCA9ICgxMCAqIHByb2R1Y3RzQ29zdCkgLyAxMDBcblxuICBjb25zdCB0YXhDb3N0ID0gKDE4ICogcHJvZHVjdHNDb3N0KSAvIDEwMFxuXG4gIHJldHVybiAoXG4gICAgPFByaWNpbmc+XG4gICAgICA8RGV0YWlsZWRQcmljZT5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgUHJvZHVjdHNcbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICB7YCQke3BhcnNlRmxvYXQocHJvZHVjdHNDb3N0KS50b0ZpeGVkKDIpfWB9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvRGV0YWlsZWRQcmljZT5cbiAgICAgIDxEZXRhaWxlZFByaWNlIHNoaXBwaW5nPlxuICAgICAgICA8c3BhbiBzdHlsZT17e2ZvbnRXZWlnaHQ6JzYwMCd9fT5cbiAgICAgICAgICBTaGlwcGluZyBDb3N0XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAge2AkJHtwYXJzZUZsb2F0KHNoaXBwaW5nQ29zdCkudG9GaXhlZCgyKX1gfVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L0RldGFpbGVkUHJpY2U+XG4gICAgICA8RGV0YWlsZWRQcmljZT5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgVGF4ZXNcbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICB7YCQke3BhcnNlRmxvYXQodGF4Q29zdCkudG9GaXhlZCgyKX1gfVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L0RldGFpbGVkUHJpY2U+XG4gICAgICA8RGV0YWlsZWRQcmljZSB0b3RhbD5cbiAgICAgICAgPHNwYW4gc3R5bGU9e3tmb250V2VpZ2h0Oic2MDAnfX0+XG4gICAgICAgICAgVG90YWxcbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiBzdHlsZT17e2NvbG9yOidyZWQnLCBmb250V2VpZ2h0Oic2MDAnfX0+XG4gICAgICAgICAge2AkJHtwYXJzZUZsb2F0KHByb2R1Y3RzQ29zdCArIHNoaXBwaW5nQ29zdCArIHRheENvc3QpLnRvRml4ZWQoMil9YH1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9EZXRhaWxlZFByaWNlPlxuICAgIDwvUHJpY2luZz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcmljZXNDb250YWluZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/prices-container/prices-container.component.jsx\n");

/***/ })

})