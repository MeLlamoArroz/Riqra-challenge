webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/cart-container/cart-container.component.jsx":
/*!********************************************************************!*\
  !*** ./src/components/cart-container/cart-container.component.jsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _cart_container_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart-container.styles */ \"./src/components/cart-container/cart-container.styles.js\");\n/* harmony import */ var _public_items_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../public/items-data */ \"./public/items-data.js\");\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar CartContainer = function CartContainer(_ref) {\n  var _s = $RefreshSig$();\n\n  var searchBarInput = _ref.searchBarInput,\n      cartItems = _ref.cartItems,\n      setCartItems = _ref.setCartItems;\n  var filteredItems = _public_items_data__WEBPACK_IMPORTED_MODULE_4__[\"default\"].items.filter(function (item) {\n    return item.name.toLowerCase().includes(searchBarInput);\n  });\n  console.log(\"cartItems : \", cartItems);\n  return searchBarInput.length === 0 ? Object.values(cartItems).length === 0 ? __jsx(_cart_container_styles__WEBPACK_IMPORTED_MODULE_3__[\"EmptyCartContainer\"], null, __jsx(_cart_container_styles__WEBPACK_IMPORTED_MODULE_3__[\"CartLogoComponent\"], null), __jsx(_cart_container_styles__WEBPACK_IMPORTED_MODULE_3__[\"EmptyTitle\"], null, \"Your cart is empty\"), __jsx(_cart_container_styles__WEBPACK_IMPORTED_MODULE_3__[\"EmptySubtitle\"], null, \"Seems like you haven't chosen what to buy...\")) : __jsx(_cart_container_styles__WEBPACK_IMPORTED_MODULE_3__[\"MatchedItems\"], null, Object.values(cartItems).map(function (item, idx) {\n    // const [isItemAdded, setIsItemAdded] = React.useState(false)\n    return __jsx(_cart_container_styles__WEBPACK_IMPORTED_MODULE_3__[\"MatchedItem\"], {\n      key: idx\n    }, __jsx(_cart_container_styles__WEBPACK_IMPORTED_MODULE_3__[\"ImageItem\"], {\n      imageSrc: item.imageUrl\n    }), __jsx(_cart_container_styles__WEBPACK_IMPORTED_MODULE_3__[\"TextItem\"], null, \" \", item.name, \" \"), __jsx(_cart_container_styles__WEBPACK_IMPORTED_MODULE_3__[\"TextItem\"], {\n      price: true\n    }, \" \", \"$\".concat(parseFloat(item.price).toFixed(2)), \" \"), __jsx(_cart_container_styles__WEBPACK_IMPORTED_MODULE_3__[\"AddItem\"], {\n      onClick: function onClick() {\n        // setIsItemAdded(true)\n        setCartItems(_objectSpread(_objectSpread({}, cartItems), {}, {\n          a: item\n        }));\n      }\n    }));\n  })) : __jsx(_cart_container_styles__WEBPACK_IMPORTED_MODULE_3__[\"MatchedItems\"], null, filteredItems.map(_s(function (item, idx) {\n    _s();\n\n    var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),\n        _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n        isItemAdded = _React$useState2[0],\n        setIsItemAdded = _React$useState2[1];\n\n    return __jsx(_cart_container_styles__WEBPACK_IMPORTED_MODULE_3__[\"MatchedItem\"], {\n      key: idx\n    }, __jsx(_cart_container_styles__WEBPACK_IMPORTED_MODULE_3__[\"ImageItem\"], {\n      imageSrc: item.imageUrl\n    }), __jsx(_cart_container_styles__WEBPACK_IMPORTED_MODULE_3__[\"TextItem\"], null, \" \", item.name, \" \"), __jsx(_cart_container_styles__WEBPACK_IMPORTED_MODULE_3__[\"TextItem\"], {\n      price: true\n    }, \" \", \"$\".concat(parseFloat(item.price).toFixed(2)), \" \"), __jsx(_cart_container_styles__WEBPACK_IMPORTED_MODULE_3__[\"AddItem\"], {\n      itemAdded: isItemAdded,\n      onClick: function onClick() {\n        setIsItemAdded(true);\n        setCartItems(_objectSpread(_objectSpread({}, cartItems), {}, {\n          item: item\n        }));\n      }\n    }));\n  }, \"YsZkyXHye3pIYUG6WLuz5TForhc=\")));\n};\n\n_c = CartContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CartContainer);\n\nvar _c;\n\n$RefreshReg$(_c, \"CartContainer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJ0LWNvbnRhaW5lci9jYXJ0LWNvbnRhaW5lci5jb21wb25lbnQuanN4Pzg1NTYiXSwibmFtZXMiOlsiQ2FydENvbnRhaW5lciIsInNlYXJjaEJhcklucHV0IiwiY2FydEl0ZW1zIiwic2V0Q2FydEl0ZW1zIiwiZmlsdGVyZWRJdGVtcyIsIklURU1TX0RBVEEiLCJpdGVtcyIsImZpbHRlciIsIml0ZW0iLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJPYmplY3QiLCJ2YWx1ZXMiLCJtYXAiLCJpZHgiLCJpbWFnZVVybCIsInBhcnNlRmxvYXQiLCJwcmljZSIsInRvRml4ZWQiLCJhIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImlzSXRlbUFkZGVkIiwic2V0SXNJdGVtQWRkZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFXQzs7QUFFRCxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQWlEO0FBQUE7O0FBQUEsTUFBOUNDLGNBQThDLFFBQTlDQSxjQUE4QztBQUFBLE1BQTlCQyxTQUE4QixRQUE5QkEsU0FBOEI7QUFBQSxNQUFuQkMsWUFBbUIsUUFBbkJBLFlBQW1CO0FBQ3JFLE1BQU1DLGFBQWEsR0FBR0MsMERBQVUsQ0FBQ0MsS0FBWCxDQUFpQkMsTUFBakIsQ0FBd0IsVUFBQUMsSUFBSTtBQUFBLFdBQUlBLElBQUksQ0FBQ0MsSUFBTCxDQUFVQyxXQUFWLEdBQXdCQyxRQUF4QixDQUFpQ1YsY0FBakMsQ0FBSjtBQUFBLEdBQTVCLENBQXRCO0FBQ0FXLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosRUFBNEJYLFNBQTVCO0FBRUEsU0FDRUQsY0FBYyxDQUFDYSxNQUFmLEtBQTBCLENBQTFCLEdBRUVDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjZCxTQUFkLEVBQXlCWSxNQUF6QixLQUFvQyxDQUFwQyxHQUVFLE1BQUMseUVBQUQsUUFDRSxNQUFDLHdFQUFELE9BREYsRUFFRSxNQUFDLGlFQUFELDZCQUZGLEVBS0UsTUFBQyxvRUFBRCx1REFMRixDQUZGLEdBWUUsTUFBQyxtRUFBRCxRQUVFQyxNQUFNLENBQUNDLE1BQVAsQ0FBY2QsU0FBZCxFQUF5QmUsR0FBekIsQ0FBNkIsVUFBQ1QsSUFBRCxFQUFPVSxHQUFQLEVBQWU7QUFDMUM7QUFDQSxXQUNFLE1BQUMsa0VBQUQ7QUFBYSxTQUFHLEVBQUVBO0FBQWxCLE9BQ0UsTUFBQyxnRUFBRDtBQUFXLGNBQVEsRUFBRVYsSUFBSSxDQUFDVztBQUExQixNQURGLEVBRUUsTUFBQywrREFBRCxhQUFZWCxJQUFJLENBQUNDLElBQWpCLE1BRkYsRUFHRSxNQUFDLCtEQUFEO0FBQVUsV0FBSztBQUFmLHVCQUFzQlcsVUFBVSxDQUFDWixJQUFJLENBQUNhLEtBQU4sQ0FBVixDQUF1QkMsT0FBdkIsQ0FBK0IsQ0FBL0IsQ0FBdEIsT0FIRixFQUlFLE1BQUMsOERBQUQ7QUFBVSxhQUFPLEVBQUUsbUJBQU07QUFDdkI7QUFDQW5CLG9CQUFZLGlDQUNQRCxTQURPO0FBRVZxQixXQUFDLEVBQUVmO0FBRk8sV0FBWjtBQUlEO0FBTkQsTUFKRixDQURGO0FBY0QsR0FoQkQsQ0FGRixDQWRKLEdBb0NFLE1BQUMsbUVBQUQsUUFFRUosYUFBYSxDQUFDYSxHQUFkLElBQWtCLFVBQUNULElBQUQsRUFBT1UsR0FBUCxFQUFlO0FBQUE7O0FBQUEsMEJBQ09NLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBRFA7QUFBQTtBQUFBLFFBQ3hCQyxXQUR3QjtBQUFBLFFBQ1hDLGNBRFc7O0FBRS9CLFdBQ0UsTUFBQyxrRUFBRDtBQUFhLFNBQUcsRUFBRVQ7QUFBbEIsT0FDRSxNQUFDLGdFQUFEO0FBQVcsY0FBUSxFQUFFVixJQUFJLENBQUNXO0FBQTFCLE1BREYsRUFFRSxNQUFDLCtEQUFELGFBQVlYLElBQUksQ0FBQ0MsSUFBakIsTUFGRixFQUdFLE1BQUMsK0RBQUQ7QUFBVSxXQUFLO0FBQWYsdUJBQXNCVyxVQUFVLENBQUNaLElBQUksQ0FBQ2EsS0FBTixDQUFWLENBQXVCQyxPQUF2QixDQUErQixDQUEvQixDQUF0QixPQUhGLEVBSUUsTUFBQyw4REFBRDtBQUFTLGVBQVMsRUFBRUksV0FBcEI7QUFBaUMsYUFBTyxFQUFFLG1CQUFNO0FBQzlDQyxzQkFBYyxDQUFDLElBQUQsQ0FBZDtBQUNBeEIsb0JBQVksaUNBQ1BELFNBRE87QUFFVk0sY0FBSSxFQUFKQTtBQUZVLFdBQVo7QUFJRDtBQU5ELE1BSkYsQ0FERjtBQWNELEdBaEJELGtDQUZGLENBckNKO0FBMkRELENBL0REOztLQUFNUixhO0FBaUVTQSw0RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2NhcnQtY29udGFpbmVyL2NhcnQtY29udGFpbmVyLmNvbXBvbmVudC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgXG4gIEVtcHR5Q2FydENvbnRhaW5lciwgXG4gIENhcnRMb2dvQ29tcG9uZW50LFxuICBFbXB0eVRpdGxlLFxuICBFbXB0eVN1YnRpdGxlLFxuICBNYXRjaGVkSXRlbXMsXG4gIE1hdGNoZWRJdGVtLFxuICBJbWFnZUl0ZW0sXG4gIFRleHRJdGVtLFxuICBBZGRJdGVtXG4gfSBmcm9tICcuL2NhcnQtY29udGFpbmVyLnN0eWxlcyc7XG4gaW1wb3J0IElURU1TX0RBVEEgZnJvbSAnLi4vLi4vLi4vcHVibGljL2l0ZW1zLWRhdGEnO1xuXG5jb25zdCBDYXJ0Q29udGFpbmVyID0gKHsgc2VhcmNoQmFySW5wdXQsIGNhcnRJdGVtcywgc2V0Q2FydEl0ZW1zIH0pID0+IHtcbiAgY29uc3QgZmlsdGVyZWRJdGVtcyA9IElURU1TX0RBVEEuaXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoQmFySW5wdXQpKVxuICBjb25zb2xlLmxvZyhcImNhcnRJdGVtcyA6IFwiLCBjYXJ0SXRlbXMpXG5cbiAgcmV0dXJuIChcbiAgICBzZWFyY2hCYXJJbnB1dC5sZW5ndGggPT09IDBcbiAgICA/XG4gICAgICBPYmplY3QudmFsdWVzKGNhcnRJdGVtcykubGVuZ3RoID09PSAwXG4gICAgICA/XG4gICAgICAgIDxFbXB0eUNhcnRDb250YWluZXI+XG4gICAgICAgICAgPENhcnRMb2dvQ29tcG9uZW50Lz5cbiAgICAgICAgICA8RW1wdHlUaXRsZT5cbiAgICAgICAgICAgIFlvdXIgY2FydCBpcyBlbXB0eVxuICAgICAgICAgIDwvRW1wdHlUaXRsZT5cbiAgICAgICAgICA8RW1wdHlTdWJ0aXRsZT5cbiAgICAgICAgICAgIFNlZW1zIGxpa2UgeW91IGhhdmVuJ3QgY2hvc2VuIHdoYXQgdG8gYnV5Li4uXG4gICAgICAgICAgPC9FbXB0eVN1YnRpdGxlPlxuICAgICAgICA8L0VtcHR5Q2FydENvbnRhaW5lcj5cbiAgICAgIDpcbiAgICAgICAgPE1hdGNoZWRJdGVtcz5cbiAgICAgICAgeyAgXG4gICAgICAgICAgT2JqZWN0LnZhbHVlcyhjYXJ0SXRlbXMpLm1hcCgoaXRlbSwgaWR4KSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zdCBbaXNJdGVtQWRkZWQsIHNldElzSXRlbUFkZGVkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPE1hdGNoZWRJdGVtIGtleT17aWR4fT5cbiAgICAgICAgICAgICAgICA8SW1hZ2VJdGVtIGltYWdlU3JjPXtpdGVtLmltYWdlVXJsfS8+XG4gICAgICAgICAgICAgICAgPFRleHRJdGVtPiB7aXRlbS5uYW1lfSA8L1RleHRJdGVtPlxuICAgICAgICAgICAgICAgIDxUZXh0SXRlbSBwcmljZT4ge2AkJHtwYXJzZUZsb2F0KGl0ZW0ucHJpY2UpLnRvRml4ZWQoMil9YH0gPC9UZXh0SXRlbT5cbiAgICAgICAgICAgICAgICA8QWRkSXRlbSAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgLy8gc2V0SXNJdGVtQWRkZWQodHJ1ZSlcbiAgICAgICAgICAgICAgICAgIHNldENhcnRJdGVtcyh7XG4gICAgICAgICAgICAgICAgICAgIC4uLmNhcnRJdGVtcyxcbiAgICAgICAgICAgICAgICAgICAgYTogaXRlbVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9fS8+XG4gICAgICAgICAgICAgIDwvTWF0Y2hlZEl0ZW0+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICA8L01hdGNoZWRJdGVtcz5cbiAgICA6XG4gICAgICA8TWF0Y2hlZEl0ZW1zPlxuICAgICAge1xuICAgICAgICBmaWx0ZXJlZEl0ZW1zLm1hcCgoaXRlbSwgaWR4KSA9PiB7XG4gICAgICAgICAgY29uc3QgW2lzSXRlbUFkZGVkLCBzZXRJc0l0ZW1BZGRlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE1hdGNoZWRJdGVtIGtleT17aWR4fT5cbiAgICAgICAgICAgICAgPEltYWdlSXRlbSBpbWFnZVNyYz17aXRlbS5pbWFnZVVybH0vPlxuICAgICAgICAgICAgICA8VGV4dEl0ZW0+IHtpdGVtLm5hbWV9IDwvVGV4dEl0ZW0+XG4gICAgICAgICAgICAgIDxUZXh0SXRlbSBwcmljZT4ge2AkJHtwYXJzZUZsb2F0KGl0ZW0ucHJpY2UpLnRvRml4ZWQoMil9YH0gPC9UZXh0SXRlbT5cbiAgICAgICAgICAgICAgPEFkZEl0ZW0gaXRlbUFkZGVkPXtpc0l0ZW1BZGRlZH0gb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldElzSXRlbUFkZGVkKHRydWUpXG4gICAgICAgICAgICAgICAgc2V0Q2FydEl0ZW1zKHtcbiAgICAgICAgICAgICAgICAgIC4uLmNhcnRJdGVtcyxcbiAgICAgICAgICAgICAgICAgIGl0ZW1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9fS8+XG4gICAgICAgICAgICA8L01hdGNoZWRJdGVtPlxuICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICA8L01hdGNoZWRJdGVtcz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJ0Q29udGFpbmVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/cart-container/cart-container.component.jsx\n");

/***/ })

})