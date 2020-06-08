webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/cart-container/cart-container.component.jsx":
/*!********************************************************************!*\
  !*** ./src/components/cart-container/cart-container.component.jsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _cart_container_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart-container.styles */ \"./src/components/cart-container/cart-container.styles.js\");\n/* harmony import */ var _public_items_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../public/items-data */ \"./public/items-data.js\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar CartContainer = function CartContainer(_ref) {\n  var searchBarInput = _ref.searchBarInput;\n  var filteredItems = _public_items_data__WEBPACK_IMPORTED_MODULE_2__[\"default\"].items.filter(function (item) {\n    return item.name.toLowerCase().includes(searchBarInput);\n  });\n  return searchBarInput.length === 0 ? __jsx(_cart_container_styles__WEBPACK_IMPORTED_MODULE_1__[\"EmptyCartContainer\"], null, __jsx(_cart_container_styles__WEBPACK_IMPORTED_MODULE_1__[\"CartLogoComponent\"], null), __jsx(_cart_container_styles__WEBPACK_IMPORTED_MODULE_1__[\"EmptyTitle\"], null, \"Your cart is empty\"), __jsx(_cart_container_styles__WEBPACK_IMPORTED_MODULE_1__[\"EmptySubtitle\"], null, \"Seems like you haven't chosen what to buy...\")) : __jsx(_cart_container_styles__WEBPACK_IMPORTED_MODULE_1__[\"MatchedItems\"], null, filteredItems.map(function (item) {\n    __jsx(_cart_container_styles__WEBPACK_IMPORTED_MODULE_1__[\"MatchedItem\"], null, __jsx(\"img\", {\n      src: item.imageUrl,\n      style: {\n        height: '80px',\n        width: '74px'\n      }\n    }), __jsx(\"span\", null, \" GAAAA \"));\n  }));\n};\n\n_c = CartContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CartContainer);\n\nvar _c;\n\n$RefreshReg$(_c, \"CartContainer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJ0LWNvbnRhaW5lci9jYXJ0LWNvbnRhaW5lci5jb21wb25lbnQuanN4Pzg1NTYiXSwibmFtZXMiOlsiQ2FydENvbnRhaW5lciIsInNlYXJjaEJhcklucHV0IiwiZmlsdGVyZWRJdGVtcyIsIklURU1TX0RBVEEiLCJpdGVtcyIsImZpbHRlciIsIml0ZW0iLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsImxlbmd0aCIsIm1hcCIsImltYWdlVXJsIiwiaGVpZ2h0Iiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFRQzs7QUFFRCxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQXdCO0FBQUEsTUFBckJDLGNBQXFCLFFBQXJCQSxjQUFxQjtBQUM1QyxNQUFNQyxhQUFhLEdBQUdDLDBEQUFVLENBQUNDLEtBQVgsQ0FBaUJDLE1BQWpCLENBQXdCLFVBQUFDLElBQUk7QUFBQSxXQUFJQSxJQUFJLENBQUNDLElBQUwsQ0FBVUMsV0FBVixHQUF3QkMsUUFBeEIsQ0FBaUNSLGNBQWpDLENBQUo7QUFBQSxHQUE1QixDQUF0QjtBQUVBLFNBQ0VBLGNBQWMsQ0FBQ1MsTUFBZixLQUEwQixDQUExQixHQUVBLE1BQUMseUVBQUQsUUFDRSxNQUFDLHdFQUFELE9BREYsRUFFRSxNQUFDLGlFQUFELDZCQUZGLEVBS0UsTUFBQyxvRUFBRCx1REFMRixDQUZBLEdBWUEsTUFBQyxtRUFBRCxRQUVJUixhQUFhLENBQUNTLEdBQWQsQ0FBa0IsVUFBQUwsSUFBSSxFQUFJO0FBQ3hCLFVBQUMsa0VBQUQsUUFDRTtBQUFLLFNBQUcsRUFBRUEsSUFBSSxDQUFDTSxRQUFmO0FBQXlCLFdBQUssRUFBRTtBQUFDQyxjQUFNLEVBQUMsTUFBUjtBQUFnQkMsYUFBSyxFQUFDO0FBQXRCO0FBQWhDLE1BREYsRUFFRSw4QkFGRjtBQUlELEdBTEQsQ0FGSixDQWJGO0FBd0JELENBM0JEOztLQUFNZCxhO0FBNkJTQSw0RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2NhcnQtY29udGFpbmVyL2NhcnQtY29udGFpbmVyLmNvbXBvbmVudC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgXG4gIEVtcHR5Q2FydENvbnRhaW5lciwgXG4gIENhcnRMb2dvQ29tcG9uZW50LFxuICBFbXB0eVRpdGxlLFxuICBFbXB0eVN1YnRpdGxlLFxuICBNYXRjaGVkSXRlbXMsXG4gIE1hdGNoZWRJdGVtXG4gfSBmcm9tICcuL2NhcnQtY29udGFpbmVyLnN0eWxlcyc7XG4gaW1wb3J0IElURU1TX0RBVEEgZnJvbSAnLi4vLi4vLi4vcHVibGljL2l0ZW1zLWRhdGEnO1xuXG5jb25zdCBDYXJ0Q29udGFpbmVyID0gKHsgc2VhcmNoQmFySW5wdXQgfSkgPT4ge1xuICBjb25zdCBmaWx0ZXJlZEl0ZW1zID0gSVRFTVNfREFUQS5pdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hCYXJJbnB1dCkpXG4gIFxuICByZXR1cm4gKFxuICAgIHNlYXJjaEJhcklucHV0Lmxlbmd0aCA9PT0gMFxuICAgID9cbiAgICA8RW1wdHlDYXJ0Q29udGFpbmVyPlxuICAgICAgPENhcnRMb2dvQ29tcG9uZW50Lz5cbiAgICAgIDxFbXB0eVRpdGxlPlxuICAgICAgICBZb3VyIGNhcnQgaXMgZW1wdHlcbiAgICAgIDwvRW1wdHlUaXRsZT5cbiAgICAgIDxFbXB0eVN1YnRpdGxlPlxuICAgICAgICBTZWVtcyBsaWtlIHlvdSBoYXZlbid0IGNob3NlbiB3aGF0IHRvIGJ1eS4uLlxuICAgICAgPC9FbXB0eVN1YnRpdGxlPlxuICAgIDwvRW1wdHlDYXJ0Q29udGFpbmVyPlxuICAgIDpcbiAgICA8TWF0Y2hlZEl0ZW1zPlxuICAgICAge1xuICAgICAgICBmaWx0ZXJlZEl0ZW1zLm1hcChpdGVtID0+IHtcbiAgICAgICAgICA8TWF0Y2hlZEl0ZW0+XG4gICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5pbWFnZVVybH0gc3R5bGU9e3toZWlnaHQ6JzgwcHgnLCB3aWR0aDonNzRweCd9fS8+XG4gICAgICAgICAgICA8c3Bhbj4gR0FBQUEgPC9zcGFuPlxuICAgICAgICAgIDwvTWF0Y2hlZEl0ZW0+XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgPC9NYXRjaGVkSXRlbXM+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FydENvbnRhaW5lcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/cart-container/cart-container.component.jsx\n");

/***/ })

})