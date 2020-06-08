webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/cart-container/cart-container.component.jsx":
/*!********************************************************************!*\
  !*** ./src/components/cart-container/cart-container.component.jsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _cart_container_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart-container.styles */ \"./src/components/cart-container/cart-container.styles.js\");\n/* harmony import */ var _src_public_items_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src-public/items-data */ \"./src-public/items-data.js\");\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar CartContainer = function CartContainer(_ref) {\n  var searchBarInput = _ref.searchBarInput;\n  var filteredItems = _src_public_items_data__WEBPACK_IMPORTED_MODULE_2__[\"default\"].items.filter(function (item) {\n    return item.name.toLowerCase().includes(searchBarInput);\n  });\n  console.log(\"filteredItems : \", filteredItems);\n  return searchBarInput.length === 0 ? __jsx(_cart_container_styles__WEBPACK_IMPORTED_MODULE_1__[\"EmptyCartContainer\"], null, __jsx(_cart_container_styles__WEBPACK_IMPORTED_MODULE_1__[\"CartLogoComponent\"], null), __jsx(_cart_container_styles__WEBPACK_IMPORTED_MODULE_1__[\"EmptyTitle\"], null, \"Your cart is empty\"), __jsx(_cart_container_styles__WEBPACK_IMPORTED_MODULE_1__[\"EmptySubtitle\"], null, \"Seems like you haven't chosen what to buy...\")) : __jsx(_cart_container_styles__WEBPACK_IMPORTED_MODULE_1__[\"MatchedItems\"], null, __jsx(_cart_container_styles__WEBPACK_IMPORTED_MODULE_1__[\"MatchedItem\"], null, __jsx(\"img\", null), __jsx(\"span\", null, \" GAAAA \")));\n};\n\n_c = CartContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CartContainer);\n\nvar _c;\n\n$RefreshReg$(_c, \"CartContainer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJ0LWNvbnRhaW5lci9jYXJ0LWNvbnRhaW5lci5jb21wb25lbnQuanN4Pzg1NTYiXSwibmFtZXMiOlsiQ2FydENvbnRhaW5lciIsInNlYXJjaEJhcklucHV0IiwiZmlsdGVyZWRJdGVtcyIsIklURU1TX0RBVEEiLCJpdGVtcyIsImZpbHRlciIsIml0ZW0iLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFRQzs7QUFFRCxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQXdCO0FBQUEsTUFBckJDLGNBQXFCLFFBQXJCQSxjQUFxQjtBQUM1QyxNQUFNQyxhQUFhLEdBQUdDLDhEQUFVLENBQUNDLEtBQVgsQ0FBaUJDLE1BQWpCLENBQXdCLFVBQUFDLElBQUk7QUFBQSxXQUFJQSxJQUFJLENBQUNDLElBQUwsQ0FBVUMsV0FBVixHQUF3QkMsUUFBeEIsQ0FBaUNSLGNBQWpDLENBQUo7QUFBQSxHQUE1QixDQUF0QjtBQUNBUyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWixFQUFnQ1QsYUFBaEM7QUFFQSxTQUNFRCxjQUFjLENBQUNXLE1BQWYsS0FBMEIsQ0FBMUIsR0FFQSxNQUFDLHlFQUFELFFBQ0UsTUFBQyx3RUFBRCxPQURGLEVBRUUsTUFBQyxpRUFBRCw2QkFGRixFQUtFLE1BQUMsb0VBQUQsdURBTEYsQ0FGQSxHQVlBLE1BQUMsbUVBQUQsUUFDRSxNQUFDLGtFQUFELFFBQ0Usa0JBREYsRUFFRSw4QkFGRixDQURGLENBYkY7QUFvQkQsQ0F4QkQ7O0tBQU1aLGE7QUEwQlNBLDRFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvY2FydC1jb250YWluZXIvY2FydC1jb250YWluZXIuY29tcG9uZW50LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBcbiAgRW1wdHlDYXJ0Q29udGFpbmVyLCBcbiAgQ2FydExvZ29Db21wb25lbnQsXG4gIEVtcHR5VGl0bGUsXG4gIEVtcHR5U3VidGl0bGUsXG4gIE1hdGNoZWRJdGVtcyxcbiAgTWF0Y2hlZEl0ZW1cbiB9IGZyb20gJy4vY2FydC1jb250YWluZXIuc3R5bGVzJztcbiBpbXBvcnQgSVRFTVNfREFUQSBmcm9tICcuLi8uLi8uLi9zcmMtcHVibGljL2l0ZW1zLWRhdGEnO1xuXG5jb25zdCBDYXJ0Q29udGFpbmVyID0gKHsgc2VhcmNoQmFySW5wdXQgfSkgPT4ge1xuICBjb25zdCBmaWx0ZXJlZEl0ZW1zID0gSVRFTVNfREFUQS5pdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hCYXJJbnB1dCkpXG4gIGNvbnNvbGUubG9nKFwiZmlsdGVyZWRJdGVtcyA6IFwiLCBmaWx0ZXJlZEl0ZW1zKVxuXG4gIHJldHVybiAoXG4gICAgc2VhcmNoQmFySW5wdXQubGVuZ3RoID09PSAwXG4gICAgP1xuICAgIDxFbXB0eUNhcnRDb250YWluZXI+XG4gICAgICA8Q2FydExvZ29Db21wb25lbnQvPlxuICAgICAgPEVtcHR5VGl0bGU+XG4gICAgICAgIFlvdXIgY2FydCBpcyBlbXB0eVxuICAgICAgPC9FbXB0eVRpdGxlPlxuICAgICAgPEVtcHR5U3VidGl0bGU+XG4gICAgICAgIFNlZW1zIGxpa2UgeW91IGhhdmVuJ3QgY2hvc2VuIHdoYXQgdG8gYnV5Li4uXG4gICAgICA8L0VtcHR5U3VidGl0bGU+XG4gICAgPC9FbXB0eUNhcnRDb250YWluZXI+XG4gICAgOlxuICAgIDxNYXRjaGVkSXRlbXM+XG4gICAgICA8TWF0Y2hlZEl0ZW0+XG4gICAgICAgIDxpbWcvPlxuICAgICAgICA8c3Bhbj4gR0FBQUEgPC9zcGFuPlxuICAgICAgPC9NYXRjaGVkSXRlbT5cbiAgICA8L01hdGNoZWRJdGVtcz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJ0Q29udGFpbmVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/cart-container/cart-container.component.jsx\n");

/***/ })

})