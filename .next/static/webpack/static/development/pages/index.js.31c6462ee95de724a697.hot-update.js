webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/pages/index.jsx":
/*!*****************************!*\
  !*** ./src/pages/index.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.styles */ \"./src/pages/index.styles.js\");\n/* harmony import */ var _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/search-bar/search-bar.component */ \"./src/components/search-bar/search-bar.component.jsx\");\n/* harmony import */ var _components_cart_container_cart_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/cart-container/cart-container.component */ \"./src/components/cart-container/cart-container.component.jsx\");\n/* harmony import */ var _components_delivery_date_delivery_date_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/delivery-date/delivery-date.component */ \"./src/components/delivery-date/delivery-date.component.jsx\");\n/* harmony import */ var _components_prices_container_prices_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/prices-container/prices-container.component */ \"./src/components/prices-container/prices-container.component.jsx\");\n/* harmony import */ var _components_complete_order_complete_order_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/complete-order/complete.order.component */ \"./src/components/complete-order/complete.order.component.jsx\");\n\n\nvar _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\nvar Index = function Index() {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(''),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      searchBarInput = _React$useState2[0],\n      setSearchBarInput = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]),\n      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState3, 2),\n      cartItems = _React$useState4[0],\n      setCartItems = _React$useState4[1];\n\n  return __jsx(\"div\", {\n    className: \"homepage\"\n  }, __jsx(_index_styles__WEBPACK_IMPORTED_MODULE_2__[\"GlobalStyle\"], null), __jsx(_components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    setSearchBar: setSearchBarInput\n  }), __jsx(_components_cart_container_cart_container_component__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    searchBarInput: searchBarInput,\n    setSearchBar: setSearchBarInput,\n    cartItems: cartItems,\n    setCartItems: setCartItems\n  }), __jsx(_components_delivery_date_delivery_date_component__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null), __jsx(_components_prices_container_prices_container_component__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    cartItems: cartItems\n  }), __jsx(_components_complete_order_complete_order_component__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null));\n};\n\n_s(Index, \"q3V16nxyPfr1FuRMiw/s3JqB8hE=\");\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXguanN4PzBlZDciXSwibmFtZXMiOlsiSW5kZXgiLCJSZWFjdCIsInVzZVN0YXRlIiwic2VhcmNoQmFySW5wdXQiLCJzZXRTZWFyY2hCYXJJbnB1dCIsImNhcnRJdGVtcyIsInNldENhcnRJdGVtcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUFBLHdCQUMwQkMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FEMUI7QUFBQTtBQUFBLE1BQ1hDLGNBRFc7QUFBQSxNQUNLQyxpQkFETDs7QUFBQSx5QkFFZ0JILDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBRmhCO0FBQUE7QUFBQSxNQUVYRyxTQUZXO0FBQUEsTUFFQUMsWUFGQTs7QUFJbEIsU0FDRTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0UsTUFBQyx5REFBRCxPQURGLEVBRUUsTUFBQyxtRkFBRDtBQUNFLGdCQUFZLEVBQUVGO0FBRGhCLElBRkYsRUFLRSxNQUFDLDJGQUFEO0FBQ0Usa0JBQWMsRUFBRUQsY0FEbEI7QUFFRSxnQkFBWSxFQUFFQyxpQkFGaEI7QUFHRSxhQUFTLEVBQUVDLFNBSGI7QUFJRSxnQkFBWSxFQUFFQztBQUpoQixJQUxGLEVBV0UsTUFBQyx5RkFBRCxPQVhGLEVBWUUsTUFBQywrRkFBRDtBQUNFLGFBQVMsRUFBRUQ7QUFEYixJQVpGLEVBZUUsTUFBQywyRkFBRCxPQWZGLENBREY7QUFtQkQsQ0F2QkQ7O0dBQU1MLEs7O0tBQUFBLEs7QUF3QlNBLG9FQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBHbG9iYWxTdHlsZSB9IGZyb20gJy4vaW5kZXguc3R5bGVzJztcblxuaW1wb3J0IFNlYXJjaEJhciBmcm9tICcuLi9jb21wb25lbnRzL3NlYXJjaC1iYXIvc2VhcmNoLWJhci5jb21wb25lbnQnO1xuaW1wb3J0IENhcnRDb250YWluZXIgZnJvbSAnLi4vY29tcG9uZW50cy9jYXJ0LWNvbnRhaW5lci9jYXJ0LWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IERlbGl2ZXJ5RGF0ZSBmcm9tICcuLi9jb21wb25lbnRzL2RlbGl2ZXJ5LWRhdGUvZGVsaXZlcnktZGF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IFByaWNlc0NvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL3ByaWNlcy1jb250YWluZXIvcHJpY2VzLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IENvbXBsZXRlQnV0dG9uQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvY29tcGxldGUtb3JkZXIvY29tcGxldGUub3JkZXIuY29tcG9uZW50JztcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IFtzZWFyY2hCYXJJbnB1dCwgc2V0U2VhcmNoQmFySW5wdXRdID0gUmVhY3QudXNlU3RhdGUoJycpXG4gIGNvbnN0IFtjYXJ0SXRlbXMsIHNldENhcnRJdGVtc10gPSBSZWFjdC51c2VTdGF0ZShbXSlcbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2hvbWVwYWdlJz5cbiAgICAgIDxHbG9iYWxTdHlsZS8+XG4gICAgICA8U2VhcmNoQmFyIFxuICAgICAgICBzZXRTZWFyY2hCYXI9e3NldFNlYXJjaEJhcklucHV0fVxuICAgICAgLz5cbiAgICAgIDxDYXJ0Q29udGFpbmVyXG4gICAgICAgIHNlYXJjaEJhcklucHV0PXtzZWFyY2hCYXJJbnB1dH1cbiAgICAgICAgc2V0U2VhcmNoQmFyPXtzZXRTZWFyY2hCYXJJbnB1dH1cbiAgICAgICAgY2FydEl0ZW1zPXtjYXJ0SXRlbXN9XG4gICAgICAgIHNldENhcnRJdGVtcz17c2V0Q2FydEl0ZW1zfVxuICAgICAgLz5cbiAgICAgIDxEZWxpdmVyeURhdGUvPlxuICAgICAgPFByaWNlc0NvbnRhaW5lclxuICAgICAgICBjYXJ0SXRlbXM9e2NhcnRJdGVtc31cbiAgICAgIC8+XG4gICAgICA8Q29tcGxldGVCdXR0b25Db21wb25lbnQvPlxuICAgIDwvZGl2PlxuICApXG59XG5leHBvcnQgZGVmYXVsdCBJbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.jsx\n");

/***/ })

})