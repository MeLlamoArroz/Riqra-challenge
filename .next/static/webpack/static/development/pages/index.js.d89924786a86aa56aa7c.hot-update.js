webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/cart-container/cart-container.component.jsx":
/*!********************************************************************!*\
  !*** ./src/components/cart-container/cart-container.component.jsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _cart_container_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart-container.styles */ \"./src/components/cart-container/cart-container.styles.js\");\n/* harmony import */ var _public_items_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../public/items-data */ \"./public/items-data.js\");\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar CartContainer = function CartContainer(_ref) {\n  var _s = $RefreshSig$();\n\n  var searchBarInput = _ref.searchBarInput,\n      cartItems = _ref.cartItems,\n      setCartItems = _ref.setCartItems;\n  var filteredItems = _public_items_data__WEBPACK_IMPORTED_MODULE_4__[\"default\"].items.filter(function (item) {\n    return item.name.toLowerCase().includes(searchBarInput);\n  });\n  return searchBarInput.length === 0 ? Object.values(cartItems).length === 0 ? __jsx(_cart_container_styles__WEBPACK_IMPORTED_MODULE_3__[\"EmptyCartContainer\"], null, __jsx(_cart_container_styles__WEBPACK_IMPORTED_MODULE_3__[\"CartLogoComponent\"], null), __jsx(_cart_container_styles__WEBPACK_IMPORTED_MODULE_3__[\"EmptyTitle\"], null, \"Your cart is empty\"), __jsx(_cart_container_styles__WEBPACK_IMPORTED_MODULE_3__[\"EmptySubtitle\"], null, \"Seems like you haven't chosen what to buy...\")) : __jsx(_cart_container_styles__WEBPACK_IMPORTED_MODULE_3__[\"MatchedItems\"], null) : __jsx(_cart_container_styles__WEBPACK_IMPORTED_MODULE_3__[\"MatchedItems\"], null, filteredItems.map(_s(function (item, idx) {\n    _s();\n\n    var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),\n        _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState, 2),\n        isItemAdded = _React$useState2[0],\n        setIsItemAdded = _React$useState2[1];\n\n    return __jsx(_cart_container_styles__WEBPACK_IMPORTED_MODULE_3__[\"MatchedItem\"], {\n      key: idx\n    }, __jsx(_cart_container_styles__WEBPACK_IMPORTED_MODULE_3__[\"ImageItem\"], {\n      imageSrc: item.imageUrl\n    }), __jsx(_cart_container_styles__WEBPACK_IMPORTED_MODULE_3__[\"TextItem\"], null, \" \", item.name, \" \"), __jsx(_cart_container_styles__WEBPACK_IMPORTED_MODULE_3__[\"TextItem\"], {\n      price: true\n    }, \" \", \"$\".concat(parseFloat(item.price).toFixed(2)), \" \"), __jsx(_cart_container_styles__WEBPACK_IMPORTED_MODULE_3__[\"AddItem\"], {\n      itemAdded: isItemAdded,\n      onClick: function onClick() {\n        setIsItemAdded(true);\n        setCartItems(_objectSpread(_objectSpread({}, cartItems), {}, {\n          item: item\n        }));\n      }\n    }));\n  }, \"YsZkyXHye3pIYUG6WLuz5TForhc=\")));\n};\n\n_c = CartContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CartContainer);\n\nvar _c;\n\n$RefreshReg$(_c, \"CartContainer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJ0LWNvbnRhaW5lci9jYXJ0LWNvbnRhaW5lci5jb21wb25lbnQuanN4Pzg1NTYiXSwibmFtZXMiOlsiQ2FydENvbnRhaW5lciIsInNlYXJjaEJhcklucHV0IiwiY2FydEl0ZW1zIiwic2V0Q2FydEl0ZW1zIiwiZmlsdGVyZWRJdGVtcyIsIklURU1TX0RBVEEiLCJpdGVtcyIsImZpbHRlciIsIml0ZW0iLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsImxlbmd0aCIsIk9iamVjdCIsInZhbHVlcyIsIm1hcCIsImlkeCIsIlJlYWN0IiwidXNlU3RhdGUiLCJpc0l0ZW1BZGRlZCIsInNldElzSXRlbUFkZGVkIiwiaW1hZ2VVcmwiLCJwYXJzZUZsb2F0IiwicHJpY2UiLCJ0b0ZpeGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBV0M7O0FBRUQsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixPQUFpRDtBQUFBOztBQUFBLE1BQTlDQyxjQUE4QyxRQUE5Q0EsY0FBOEM7QUFBQSxNQUE5QkMsU0FBOEIsUUFBOUJBLFNBQThCO0FBQUEsTUFBbkJDLFlBQW1CLFFBQW5CQSxZQUFtQjtBQUNyRSxNQUFNQyxhQUFhLEdBQUdDLDBEQUFVLENBQUNDLEtBQVgsQ0FBaUJDLE1BQWpCLENBQXdCLFVBQUFDLElBQUk7QUFBQSxXQUFJQSxJQUFJLENBQUNDLElBQUwsQ0FBVUMsV0FBVixHQUF3QkMsUUFBeEIsQ0FBaUNWLGNBQWpDLENBQUo7QUFBQSxHQUE1QixDQUF0QjtBQUVBLFNBQ0VBLGNBQWMsQ0FBQ1csTUFBZixLQUEwQixDQUExQixHQUVFQyxNQUFNLENBQUNDLE1BQVAsQ0FBY1osU0FBZCxFQUF5QlUsTUFBekIsS0FBb0MsQ0FBcEMsR0FFRSxNQUFDLHlFQUFELFFBQ0UsTUFBQyx3RUFBRCxPQURGLEVBRUUsTUFBQyxpRUFBRCw2QkFGRixFQUtFLE1BQUMsb0VBQUQsdURBTEYsQ0FGRixHQVlFLE1BQUMsbUVBQUQsT0FkSixHQWlCRSxNQUFDLG1FQUFELFFBRUVSLGFBQWEsQ0FBQ1csR0FBZCxJQUFrQixVQUFDUCxJQUFELEVBQU9RLEdBQVAsRUFBZTtBQUFBOztBQUFBLDBCQUNPQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQURQO0FBQUE7QUFBQSxRQUN4QkMsV0FEd0I7QUFBQSxRQUNYQyxjQURXOztBQUUvQixXQUNFLE1BQUMsa0VBQUQ7QUFBYSxTQUFHLEVBQUVKO0FBQWxCLE9BQ0UsTUFBQyxnRUFBRDtBQUFXLGNBQVEsRUFBRVIsSUFBSSxDQUFDYTtBQUExQixNQURGLEVBRUUsTUFBQywrREFBRCxhQUFZYixJQUFJLENBQUNDLElBQWpCLE1BRkYsRUFHRSxNQUFDLCtEQUFEO0FBQVUsV0FBSztBQUFmLHVCQUFzQmEsVUFBVSxDQUFDZCxJQUFJLENBQUNlLEtBQU4sQ0FBVixDQUF1QkMsT0FBdkIsQ0FBK0IsQ0FBL0IsQ0FBdEIsT0FIRixFQUlFLE1BQUMsOERBQUQ7QUFBUyxlQUFTLEVBQUVMLFdBQXBCO0FBQWlDLGFBQU8sRUFBRSxtQkFBTTtBQUM5Q0Msc0JBQWMsQ0FBQyxJQUFELENBQWQ7QUFDQWpCLG9CQUFZLGlDQUNQRCxTQURPO0FBRVZNLGNBQUksRUFBSkE7QUFGVSxXQUFaO0FBSUQ7QUFORCxNQUpGLENBREY7QUFjRCxHQWhCRCxrQ0FGRixDQWxCSjtBQXdDRCxDQTNDRDs7S0FBTVIsYTtBQTZDU0EsNEVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jYXJ0LWNvbnRhaW5lci9jYXJ0LWNvbnRhaW5lci5jb21wb25lbnQuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFxuICBFbXB0eUNhcnRDb250YWluZXIsIFxuICBDYXJ0TG9nb0NvbXBvbmVudCxcbiAgRW1wdHlUaXRsZSxcbiAgRW1wdHlTdWJ0aXRsZSxcbiAgTWF0Y2hlZEl0ZW1zLFxuICBNYXRjaGVkSXRlbSxcbiAgSW1hZ2VJdGVtLFxuICBUZXh0SXRlbSxcbiAgQWRkSXRlbVxuIH0gZnJvbSAnLi9jYXJ0LWNvbnRhaW5lci5zdHlsZXMnO1xuIGltcG9ydCBJVEVNU19EQVRBIGZyb20gJy4uLy4uLy4uL3B1YmxpYy9pdGVtcy1kYXRhJztcblxuY29uc3QgQ2FydENvbnRhaW5lciA9ICh7IHNlYXJjaEJhcklucHV0LCBjYXJ0SXRlbXMsIHNldENhcnRJdGVtcyB9KSA9PiB7XG4gIGNvbnN0IGZpbHRlcmVkSXRlbXMgPSBJVEVNU19EQVRBLml0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaEJhcklucHV0KSlcbiAgXG4gIHJldHVybiAoXG4gICAgc2VhcmNoQmFySW5wdXQubGVuZ3RoID09PSAwXG4gICAgP1xuICAgICAgT2JqZWN0LnZhbHVlcyhjYXJ0SXRlbXMpLmxlbmd0aCA9PT0gMFxuICAgICAgP1xuICAgICAgICA8RW1wdHlDYXJ0Q29udGFpbmVyPlxuICAgICAgICAgIDxDYXJ0TG9nb0NvbXBvbmVudC8+XG4gICAgICAgICAgPEVtcHR5VGl0bGU+XG4gICAgICAgICAgICBZb3VyIGNhcnQgaXMgZW1wdHlcbiAgICAgICAgICA8L0VtcHR5VGl0bGU+XG4gICAgICAgICAgPEVtcHR5U3VidGl0bGU+XG4gICAgICAgICAgICBTZWVtcyBsaWtlIHlvdSBoYXZlbid0IGNob3NlbiB3aGF0IHRvIGJ1eS4uLlxuICAgICAgICAgIDwvRW1wdHlTdWJ0aXRsZT5cbiAgICAgICAgPC9FbXB0eUNhcnRDb250YWluZXI+XG4gICAgICA6XG4gICAgICAgIDxNYXRjaGVkSXRlbXM+XG4gICAgICAgIDwvTWF0Y2hlZEl0ZW1zPlxuICAgIDpcbiAgICAgIDxNYXRjaGVkSXRlbXM+XG4gICAgICB7XG4gICAgICAgIGZpbHRlcmVkSXRlbXMubWFwKChpdGVtLCBpZHgpID0+IHtcbiAgICAgICAgICBjb25zdCBbaXNJdGVtQWRkZWQsIHNldElzSXRlbUFkZGVkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TWF0Y2hlZEl0ZW0ga2V5PXtpZHh9PlxuICAgICAgICAgICAgICA8SW1hZ2VJdGVtIGltYWdlU3JjPXtpdGVtLmltYWdlVXJsfS8+XG4gICAgICAgICAgICAgIDxUZXh0SXRlbT4ge2l0ZW0ubmFtZX0gPC9UZXh0SXRlbT5cbiAgICAgICAgICAgICAgPFRleHRJdGVtIHByaWNlPiB7YCQke3BhcnNlRmxvYXQoaXRlbS5wcmljZSkudG9GaXhlZCgyKX1gfSA8L1RleHRJdGVtPlxuICAgICAgICAgICAgICA8QWRkSXRlbSBpdGVtQWRkZWQ9e2lzSXRlbUFkZGVkfSBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0SXNJdGVtQWRkZWQodHJ1ZSlcbiAgICAgICAgICAgICAgICBzZXRDYXJ0SXRlbXMoe1xuICAgICAgICAgICAgICAgICAgLi4uY2FydEl0ZW1zLFxuICAgICAgICAgICAgICAgICAgaXRlbVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH19Lz5cbiAgICAgICAgICAgIDwvTWF0Y2hlZEl0ZW0+XG4gICAgICAgICAgKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIDwvTWF0Y2hlZEl0ZW1zPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcnRDb250YWluZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/cart-container/cart-container.component.jsx\n");

/***/ })

})