webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/cart-container/cart-container.component.jsx":
/*!********************************************************************!*\
  !*** ./src/components/cart-container/cart-container.component.jsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _cart_container_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart-container.styles */ \"./src/components/cart-container/cart-container.styles.js\");\n/* harmony import */ var _public_items_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../public/items-data */ \"./public/items-data.js\");\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar CartContainer = function CartContainer(_ref) {\n  var _s = $RefreshSig$();\n\n  var searchBarInput = _ref.searchBarInput,\n      cartItems = _ref.cartItems,\n      setCartItems = _ref.setCartItems;\n  var filteredItems = _public_items_data__WEBPACK_IMPORTED_MODULE_4__[\"default\"].items.filter(function (item) {\n    return item.name.toLowerCase().includes(searchBarInput);\n  });\n  console.log(\"cartItems : \", cartItems);\n  return searchBarInput.length === 0 ? Object.values(cartItems).length === 0 ? __jsx(_cart_container_styles__WEBPACK_IMPORTED_MODULE_3__[\"EmptyCartContainer\"], null, __jsx(_cart_container_styles__WEBPACK_IMPORTED_MODULE_3__[\"CartLogoComponent\"], null), __jsx(_cart_container_styles__WEBPACK_IMPORTED_MODULE_3__[\"EmptyTitle\"], null, \"Your cart is empty\"), __jsx(_cart_container_styles__WEBPACK_IMPORTED_MODULE_3__[\"EmptySubtitle\"], null, \"Seems like you haven't chosen what to buy...\")) : __jsx(_cart_container_styles__WEBPACK_IMPORTED_MODULE_3__[\"MatchedItems\"], null, Object.values(cartItems).map(function (item, idx) {\n    // const [isItemAdded, setIsItemAdded] = React.useState(false)\n    return __jsx(_cart_container_styles__WEBPACK_IMPORTED_MODULE_3__[\"MatchedItem\"], {\n      key: idx\n    }, __jsx(_cart_container_styles__WEBPACK_IMPORTED_MODULE_3__[\"ImageItem\"], {\n      imageSrc: item.imageUrl\n    }), __jsx(_cart_container_styles__WEBPACK_IMPORTED_MODULE_3__[\"TextItem\"], null, \" \", item.name, \" \"), __jsx(_cart_container_styles__WEBPACK_IMPORTED_MODULE_3__[\"TextItem\"], {\n      price: true\n    }, \" \", \"$\".concat(parseFloat(item.price).toFixed(2)), \" \"), __jsx(_cart_container_styles__WEBPACK_IMPORTED_MODULE_3__[\"AddItem\"], {\n      onClick: function onClick() {\n        // setIsItemAdded(true)\n        setCartItems(_objectSpread(_objectSpread({}, cartItems), {}, {\n          ASD: item\n        }));\n      }\n    }));\n  })) : __jsx(_cart_container_styles__WEBPACK_IMPORTED_MODULE_3__[\"MatchedItems\"], null, filteredItems.map(_s(function (item, idx) {\n    _s();\n\n    var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),\n        _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n        isItemAdded = _React$useState2[0],\n        setIsItemAdded = _React$useState2[1];\n\n    return __jsx(_cart_container_styles__WEBPACK_IMPORTED_MODULE_3__[\"MatchedItem\"], {\n      key: idx\n    }, __jsx(_cart_container_styles__WEBPACK_IMPORTED_MODULE_3__[\"ImageItem\"], {\n      imageSrc: item.imageUrl\n    }), __jsx(_cart_container_styles__WEBPACK_IMPORTED_MODULE_3__[\"TextItem\"], null, \" \", item.name, \" \"), __jsx(_cart_container_styles__WEBPACK_IMPORTED_MODULE_3__[\"TextItem\"], {\n      price: true\n    }, \" \", \"$\".concat(parseFloat(item.price).toFixed(2)), \" \"), __jsx(_cart_container_styles__WEBPACK_IMPORTED_MODULE_3__[\"AddItem\"], {\n      itemAdded: isItemAdded,\n      onClick: function onClick() {\n        setIsItemAdded(true);\n        setCartItems(_objectSpread(_objectSpread({}, cartItems), {}, {\n          item: item\n        }));\n      }\n    }));\n  }, \"YsZkyXHye3pIYUG6WLuz5TForhc=\")));\n};\n\n_c = CartContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CartContainer);\n\nvar _c;\n\n$RefreshReg$(_c, \"CartContainer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJ0LWNvbnRhaW5lci9jYXJ0LWNvbnRhaW5lci5jb21wb25lbnQuanN4Pzg1NTYiXSwibmFtZXMiOlsiQ2FydENvbnRhaW5lciIsInNlYXJjaEJhcklucHV0IiwiY2FydEl0ZW1zIiwic2V0Q2FydEl0ZW1zIiwiZmlsdGVyZWRJdGVtcyIsIklURU1TX0RBVEEiLCJpdGVtcyIsImZpbHRlciIsIml0ZW0iLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJPYmplY3QiLCJ2YWx1ZXMiLCJtYXAiLCJpZHgiLCJpbWFnZVVybCIsInBhcnNlRmxvYXQiLCJwcmljZSIsInRvRml4ZWQiLCJBU0QiLCJSZWFjdCIsInVzZVN0YXRlIiwiaXNJdGVtQWRkZWQiLCJzZXRJc0l0ZW1BZGRlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVdDOztBQUVELElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FBaUQ7QUFBQTs7QUFBQSxNQUE5Q0MsY0FBOEMsUUFBOUNBLGNBQThDO0FBQUEsTUFBOUJDLFNBQThCLFFBQTlCQSxTQUE4QjtBQUFBLE1BQW5CQyxZQUFtQixRQUFuQkEsWUFBbUI7QUFDckUsTUFBTUMsYUFBYSxHQUFHQywwREFBVSxDQUFDQyxLQUFYLENBQWlCQyxNQUFqQixDQUF3QixVQUFBQyxJQUFJO0FBQUEsV0FBSUEsSUFBSSxDQUFDQyxJQUFMLENBQVVDLFdBQVYsR0FBd0JDLFFBQXhCLENBQWlDVixjQUFqQyxDQUFKO0FBQUEsR0FBNUIsQ0FBdEI7QUFDQVcsU0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWixFQUE0QlgsU0FBNUI7QUFFQSxTQUNFRCxjQUFjLENBQUNhLE1BQWYsS0FBMEIsQ0FBMUIsR0FFRUMsTUFBTSxDQUFDQyxNQUFQLENBQWNkLFNBQWQsRUFBeUJZLE1BQXpCLEtBQW9DLENBQXBDLEdBRUUsTUFBQyx5RUFBRCxRQUNFLE1BQUMsd0VBQUQsT0FERixFQUVFLE1BQUMsaUVBQUQsNkJBRkYsRUFLRSxNQUFDLG9FQUFELHVEQUxGLENBRkYsR0FZRSxNQUFDLG1FQUFELFFBRUVDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjZCxTQUFkLEVBQXlCZSxHQUF6QixDQUE2QixVQUFDVCxJQUFELEVBQU9VLEdBQVAsRUFBZTtBQUMxQztBQUNBLFdBQ0UsTUFBQyxrRUFBRDtBQUFhLFNBQUcsRUFBRUE7QUFBbEIsT0FDRSxNQUFDLGdFQUFEO0FBQVcsY0FBUSxFQUFFVixJQUFJLENBQUNXO0FBQTFCLE1BREYsRUFFRSxNQUFDLCtEQUFELGFBQVlYLElBQUksQ0FBQ0MsSUFBakIsTUFGRixFQUdFLE1BQUMsK0RBQUQ7QUFBVSxXQUFLO0FBQWYsdUJBQXNCVyxVQUFVLENBQUNaLElBQUksQ0FBQ2EsS0FBTixDQUFWLENBQXVCQyxPQUF2QixDQUErQixDQUEvQixDQUF0QixPQUhGLEVBSUUsTUFBQyw4REFBRDtBQUFVLGFBQU8sRUFBRSxtQkFBTTtBQUN2QjtBQUNBbkIsb0JBQVksaUNBQ1BELFNBRE87QUFFVnFCLGFBQUcsRUFBRWY7QUFGSyxXQUFaO0FBSUQ7QUFORCxNQUpGLENBREY7QUFjRCxHQWhCRCxDQUZGLENBZEosR0FvQ0UsTUFBQyxtRUFBRCxRQUVFSixhQUFhLENBQUNhLEdBQWQsSUFBa0IsVUFBQ1QsSUFBRCxFQUFPVSxHQUFQLEVBQWU7QUFBQTs7QUFBQSwwQkFDT00sNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FEUDtBQUFBO0FBQUEsUUFDeEJDLFdBRHdCO0FBQUEsUUFDWEMsY0FEVzs7QUFFL0IsV0FDRSxNQUFDLGtFQUFEO0FBQWEsU0FBRyxFQUFFVDtBQUFsQixPQUNFLE1BQUMsZ0VBQUQ7QUFBVyxjQUFRLEVBQUVWLElBQUksQ0FBQ1c7QUFBMUIsTUFERixFQUVFLE1BQUMsK0RBQUQsYUFBWVgsSUFBSSxDQUFDQyxJQUFqQixNQUZGLEVBR0UsTUFBQywrREFBRDtBQUFVLFdBQUs7QUFBZix1QkFBc0JXLFVBQVUsQ0FBQ1osSUFBSSxDQUFDYSxLQUFOLENBQVYsQ0FBdUJDLE9BQXZCLENBQStCLENBQS9CLENBQXRCLE9BSEYsRUFJRSxNQUFDLDhEQUFEO0FBQVMsZUFBUyxFQUFFSSxXQUFwQjtBQUFpQyxhQUFPLEVBQUUsbUJBQU07QUFDOUNDLHNCQUFjLENBQUMsSUFBRCxDQUFkO0FBQ0F4QixvQkFBWSxpQ0FDUEQsU0FETztBQUVWTSxjQUFJLEVBQUpBO0FBRlUsV0FBWjtBQUlEO0FBTkQsTUFKRixDQURGO0FBY0QsR0FoQkQsa0NBRkYsQ0FyQ0o7QUEyREQsQ0EvREQ7O0tBQU1SLGE7QUFpRVNBLDRFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvY2FydC1jb250YWluZXIvY2FydC1jb250YWluZXIuY29tcG9uZW50LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBcbiAgRW1wdHlDYXJ0Q29udGFpbmVyLCBcbiAgQ2FydExvZ29Db21wb25lbnQsXG4gIEVtcHR5VGl0bGUsXG4gIEVtcHR5U3VidGl0bGUsXG4gIE1hdGNoZWRJdGVtcyxcbiAgTWF0Y2hlZEl0ZW0sXG4gIEltYWdlSXRlbSxcbiAgVGV4dEl0ZW0sXG4gIEFkZEl0ZW1cbiB9IGZyb20gJy4vY2FydC1jb250YWluZXIuc3R5bGVzJztcbiBpbXBvcnQgSVRFTVNfREFUQSBmcm9tICcuLi8uLi8uLi9wdWJsaWMvaXRlbXMtZGF0YSc7XG5cbmNvbnN0IENhcnRDb250YWluZXIgPSAoeyBzZWFyY2hCYXJJbnB1dCwgY2FydEl0ZW1zLCBzZXRDYXJ0SXRlbXMgfSkgPT4ge1xuICBjb25zdCBmaWx0ZXJlZEl0ZW1zID0gSVRFTVNfREFUQS5pdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hCYXJJbnB1dCkpXG4gIGNvbnNvbGUubG9nKFwiY2FydEl0ZW1zIDogXCIsIGNhcnRJdGVtcylcblxuICByZXR1cm4gKFxuICAgIHNlYXJjaEJhcklucHV0Lmxlbmd0aCA9PT0gMFxuICAgID9cbiAgICAgIE9iamVjdC52YWx1ZXMoY2FydEl0ZW1zKS5sZW5ndGggPT09IDBcbiAgICAgID9cbiAgICAgICAgPEVtcHR5Q2FydENvbnRhaW5lcj5cbiAgICAgICAgICA8Q2FydExvZ29Db21wb25lbnQvPlxuICAgICAgICAgIDxFbXB0eVRpdGxlPlxuICAgICAgICAgICAgWW91ciBjYXJ0IGlzIGVtcHR5XG4gICAgICAgICAgPC9FbXB0eVRpdGxlPlxuICAgICAgICAgIDxFbXB0eVN1YnRpdGxlPlxuICAgICAgICAgICAgU2VlbXMgbGlrZSB5b3UgaGF2ZW4ndCBjaG9zZW4gd2hhdCB0byBidXkuLi5cbiAgICAgICAgICA8L0VtcHR5U3VidGl0bGU+XG4gICAgICAgIDwvRW1wdHlDYXJ0Q29udGFpbmVyPlxuICAgICAgOlxuICAgICAgICA8TWF0Y2hlZEl0ZW1zPlxuICAgICAgICB7ICBcbiAgICAgICAgICBPYmplY3QudmFsdWVzKGNhcnRJdGVtcykubWFwKChpdGVtLCBpZHgpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnN0IFtpc0l0ZW1BZGRlZCwgc2V0SXNJdGVtQWRkZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8TWF0Y2hlZEl0ZW0ga2V5PXtpZHh9PlxuICAgICAgICAgICAgICAgIDxJbWFnZUl0ZW0gaW1hZ2VTcmM9e2l0ZW0uaW1hZ2VVcmx9Lz5cbiAgICAgICAgICAgICAgICA8VGV4dEl0ZW0+IHtpdGVtLm5hbWV9IDwvVGV4dEl0ZW0+XG4gICAgICAgICAgICAgICAgPFRleHRJdGVtIHByaWNlPiB7YCQke3BhcnNlRmxvYXQoaXRlbS5wcmljZSkudG9GaXhlZCgyKX1gfSA8L1RleHRJdGVtPlxuICAgICAgICAgICAgICAgIDxBZGRJdGVtICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAvLyBzZXRJc0l0ZW1BZGRlZCh0cnVlKVxuICAgICAgICAgICAgICAgICAgc2V0Q2FydEl0ZW1zKHtcbiAgICAgICAgICAgICAgICAgICAgLi4uY2FydEl0ZW1zLFxuICAgICAgICAgICAgICAgICAgICBBU0Q6IGl0ZW1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfX0vPlxuICAgICAgICAgICAgICA8L01hdGNoZWRJdGVtPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgPC9NYXRjaGVkSXRlbXM+XG4gICAgOlxuICAgICAgPE1hdGNoZWRJdGVtcz5cbiAgICAgIHtcbiAgICAgICAgZmlsdGVyZWRJdGVtcy5tYXAoKGl0ZW0sIGlkeCkgPT4ge1xuICAgICAgICAgIGNvbnN0IFtpc0l0ZW1BZGRlZCwgc2V0SXNJdGVtQWRkZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxNYXRjaGVkSXRlbSBrZXk9e2lkeH0+XG4gICAgICAgICAgICAgIDxJbWFnZUl0ZW0gaW1hZ2VTcmM9e2l0ZW0uaW1hZ2VVcmx9Lz5cbiAgICAgICAgICAgICAgPFRleHRJdGVtPiB7aXRlbS5uYW1lfSA8L1RleHRJdGVtPlxuICAgICAgICAgICAgICA8VGV4dEl0ZW0gcHJpY2U+IHtgJCR7cGFyc2VGbG9hdChpdGVtLnByaWNlKS50b0ZpeGVkKDIpfWB9IDwvVGV4dEl0ZW0+XG4gICAgICAgICAgICAgIDxBZGRJdGVtIGl0ZW1BZGRlZD17aXNJdGVtQWRkZWR9IG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRJc0l0ZW1BZGRlZCh0cnVlKVxuICAgICAgICAgICAgICAgIHNldENhcnRJdGVtcyh7XG4gICAgICAgICAgICAgICAgICAuLi5jYXJ0SXRlbXMsXG4gICAgICAgICAgICAgICAgICBpdGVtXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfX0vPlxuICAgICAgICAgICAgPC9NYXRjaGVkSXRlbT5cbiAgICAgICAgICApXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgPC9NYXRjaGVkSXRlbXM+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FydENvbnRhaW5lcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/cart-container/cart-container.component.jsx\n");

/***/ })

})