webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/prices-container/prices-container.component.jsx":
/*!************************************************************************!*\
  !*** ./src/components/prices-container/prices-container.component.jsx ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _prices_container_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prices-container.styles */ \"./src/components/prices-container/prices-container.styles.js\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar PricesContainer = function PricesContainer(_ref) {\n  var cartItems = _ref.cartItems;\n  console.log(\"MIRA PA! : \", cartItems.reduce(function (acum, currentItem) {\n    return acum + currentItem.price * currentItem.quantity;\n  }), 0);\n  return __jsx(_prices_container_styles__WEBPACK_IMPORTED_MODULE_1__[\"Pricing\"], null, __jsx(_prices_container_styles__WEBPACK_IMPORTED_MODULE_1__[\"DetailedPrice\"], null, __jsx(\"span\", null, \"Products\"), __jsx(\"span\", null, \"$0.00\")), __jsx(_prices_container_styles__WEBPACK_IMPORTED_MODULE_1__[\"DetailedPrice\"], {\n    shipping: true\n  }, __jsx(\"span\", {\n    style: {\n      fontWeight: '600'\n    }\n  }, \"Shipping Cost\"), __jsx(\"span\", null, \"$0.00\")), __jsx(_prices_container_styles__WEBPACK_IMPORTED_MODULE_1__[\"DetailedPrice\"], null, __jsx(\"span\", null, \"Taxes\"), __jsx(\"span\", null, \"$0.00\")), __jsx(_prices_container_styles__WEBPACK_IMPORTED_MODULE_1__[\"DetailedPrice\"], {\n    total: true\n  }, __jsx(\"span\", {\n    style: {\n      fontWeight: '600'\n    }\n  }, \"Total\"), __jsx(\"span\", {\n    style: {\n      color: 'red',\n      fontWeight: '600'\n    }\n  }, \"$0.00\")));\n};\n\n_c = PricesContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PricesContainer);\n\nvar _c;\n\n$RefreshReg$(_c, \"PricesContainer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wcmljZXMtY29udGFpbmVyL3ByaWNlcy1jb250YWluZXIuY29tcG9uZW50LmpzeD9kOTY5Il0sIm5hbWVzIjpbIlByaWNlc0NvbnRhaW5lciIsImNhcnRJdGVtcyIsImNvbnNvbGUiLCJsb2ciLCJyZWR1Y2UiLCJhY3VtIiwiY3VycmVudEl0ZW0iLCJwcmljZSIsInF1YW50aXR5IiwiZm9udFdlaWdodCIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixPQUFtQjtBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7QUFDekNDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVosRUFBMkJGLFNBQVMsQ0FBQ0csTUFBVixDQUFpQixVQUFDQyxJQUFELEVBQU9DLFdBQVAsRUFBdUI7QUFDakUsV0FBT0QsSUFBSSxHQUFJQyxXQUFXLENBQUNDLEtBQVosR0FBb0JELFdBQVcsQ0FBQ0UsUUFBL0M7QUFDRCxHQUYwQixDQUEzQixFQUVJLENBRko7QUFHQSxTQUNFLE1BQUMsZ0VBQUQsUUFDRSxNQUFDLHNFQUFELFFBQ0UsK0JBREYsRUFFRSw0QkFGRixDQURGLEVBS0UsTUFBQyxzRUFBRDtBQUFlLFlBQVE7QUFBdkIsS0FDRTtBQUFNLFNBQUssRUFBRTtBQUFDQyxnQkFBVSxFQUFDO0FBQVo7QUFBYixxQkFERixFQUVFLDRCQUZGLENBTEYsRUFTRSxNQUFDLHNFQUFELFFBQ0UsNEJBREYsRUFFRSw0QkFGRixDQVRGLEVBYUUsTUFBQyxzRUFBRDtBQUFlLFNBQUs7QUFBcEIsS0FDRTtBQUFNLFNBQUssRUFBRTtBQUFDQSxnQkFBVSxFQUFDO0FBQVo7QUFBYixhQURGLEVBRUU7QUFBTSxTQUFLLEVBQUU7QUFBQ0MsV0FBSyxFQUFDLEtBQVA7QUFBY0QsZ0JBQVUsRUFBQztBQUF6QjtBQUFiLGFBRkYsQ0FiRixDQURGO0FBb0JELENBeEJEOztLQUFNVCxlO0FBMEJTQSw4RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL3ByaWNlcy1jb250YWluZXIvcHJpY2VzLWNvbnRhaW5lci5jb21wb25lbnQuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByaWNpbmcsIERldGFpbGVkUHJpY2UgfSBmcm9tICcuL3ByaWNlcy1jb250YWluZXIuc3R5bGVzJztcblxuY29uc3QgUHJpY2VzQ29udGFpbmVyID0gKHsgY2FydEl0ZW1zIH0pID0+IHtcbiAgY29uc29sZS5sb2coXCJNSVJBIFBBISA6IFwiLCBjYXJ0SXRlbXMucmVkdWNlKChhY3VtLCBjdXJyZW50SXRlbSkgPT4ge1xuICAgIHJldHVybiBhY3VtICsgKGN1cnJlbnRJdGVtLnByaWNlICogY3VycmVudEl0ZW0ucXVhbnRpdHkpXG4gIH0pLCAwKVxuICByZXR1cm4gKFxuICAgIDxQcmljaW5nPlxuICAgICAgPERldGFpbGVkUHJpY2U+XG4gICAgICAgIDxzcGFuPlByb2R1Y3RzPC9zcGFuPlxuICAgICAgICA8c3Bhbj4kMC4wMDwvc3Bhbj5cbiAgICAgIDwvRGV0YWlsZWRQcmljZT5cbiAgICAgIDxEZXRhaWxlZFByaWNlIHNoaXBwaW5nPlxuICAgICAgICA8c3BhbiBzdHlsZT17e2ZvbnRXZWlnaHQ6JzYwMCd9fT5TaGlwcGluZyBDb3N0PC9zcGFuPlxuICAgICAgICA8c3Bhbj4kMC4wMDwvc3Bhbj5cbiAgICAgIDwvRGV0YWlsZWRQcmljZT5cbiAgICAgIDxEZXRhaWxlZFByaWNlPlxuICAgICAgICA8c3Bhbj5UYXhlczwvc3Bhbj5cbiAgICAgICAgPHNwYW4+JDAuMDA8L3NwYW4+XG4gICAgICA8L0RldGFpbGVkUHJpY2U+XG4gICAgICA8RGV0YWlsZWRQcmljZSB0b3RhbD5cbiAgICAgICAgPHNwYW4gc3R5bGU9e3tmb250V2VpZ2h0Oic2MDAnfX0+VG90YWw8L3NwYW4+XG4gICAgICAgIDxzcGFuIHN0eWxlPXt7Y29sb3I6J3JlZCcsIGZvbnRXZWlnaHQ6JzYwMCd9fT4kMC4wMDwvc3Bhbj5cbiAgICAgIDwvRGV0YWlsZWRQcmljZT5cbiAgICA8L1ByaWNpbmc+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJpY2VzQ29udGFpbmVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/prices-container/prices-container.component.jsx\n");

/***/ })

})