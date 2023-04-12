"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/[id]";
exports.ids = ["pages/[id]"];
exports.modules = {

/***/ "./components/Button/Button.styled.js":
/*!********************************************!*\
  !*** ./components/Button/Button.styled.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StyledButton\": () => (/* binding */ StyledButton)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({\n    displayName: \"Button.styled__StyledButton\",\n    componentId: \"sc-ffdb8164-0\"\n})`\n  appearance: none;\n  border: none;\n  background: var(--color-water-10);\n  font-size: larger;\n  padding: 0.5rem 1rem;\n  box-shadow: 0px 1px 5px -2px var(--color-granite);\n  &:hover {\n    cursor: pointer;\n  }\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0J1dHRvbi9CdXR0b24uc3R5bGVkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF1QztBQUVoQyxNQUFNQyxlQUFlRCwwRUFBYTs7O0VBQUEsQ0FBQzs7Ozs7Ozs7OztBQVUxQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYWNrZW5kLXJlYWRfcHJvZHVjdHMvLi9jb21wb25lbnRzL0J1dHRvbi9CdXR0b24uc3R5bGVkLmpzPzY3YzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3Itd2F0ZXItMTApO1xuICBmb250LXNpemU6IGxhcmdlcjtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IC0ycHggdmFyKC0tY29sb3ItZ3Jhbml0ZSk7XG4gICY6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuYDtcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJTdHlsZWRCdXR0b24iLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Button/Button.styled.js\n");

/***/ }),

/***/ "./components/Comments/index.js":
/*!**************************************!*\
  !*** ./components/Comments/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Comments)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Comments({ reviews  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Comments\"\n            }, void 0, false, {\n                fileName: \"/home/dusan/Challenges-Spiced/Challenges-Spiced/backend-read_products/components/Comments/index.js\",\n                lineNumber: 4,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: reviews.map((review)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                review.rating,\n                                \"/5: \",\n                                review.text\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/dusan/Challenges-Spiced/Challenges-Spiced/backend-read_products/components/Comments/index.js\",\n                            lineNumber: 8,\n                            columnNumber: 13\n                        }, this)\n                    }, review._id, false, {\n                        fileName: \"/home/dusan/Challenges-Spiced/Challenges-Spiced/backend-read_products/components/Comments/index.js\",\n                        lineNumber: 7,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/home/dusan/Challenges-Spiced/Challenges-Spiced/backend-read_products/components/Comments/index.js\",\n                lineNumber: 5,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbW1lbnRzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQWUsU0FBU0EsU0FBUyxFQUFFQyxRQUFPLEVBQUUsRUFBRTtJQUM1QyxxQkFDRTs7MEJBQ0UsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDOzBCQUNFRixRQUFRRyxHQUFHLENBQUMsQ0FBQ0MsdUJBQ1osOERBQUNDO2tDQUNDLDRFQUFDQzs7Z0NBQ0VGLE9BQU9HLE1BQU07Z0NBQUM7Z0NBQUtILE9BQU9JLElBQUk7Ozs7Ozs7dUJBRjFCSixPQUFPSyxHQUFHOzs7Ozs7Ozs7Ozs7QUFTN0IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhY2tlbmQtcmVhZF9wcm9kdWN0cy8uL2NvbXBvbmVudHMvQ29tbWVudHMvaW5kZXguanM/MTIxMiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb21tZW50cyh7IHJldmlld3MgfSkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDM+Q29tbWVudHM8L2gzPlxuICAgICAgPHVsPlxuICAgICAgICB7cmV2aWV3cy5tYXAoKHJldmlldykgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e3Jldmlldy5faWR9PlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIHtyZXZpZXcucmF0aW5nfS81OiB7cmV2aWV3LnRleHR9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkNvbW1lbnRzIiwicmV2aWV3cyIsImgzIiwidWwiLCJtYXAiLCJyZXZpZXciLCJsaSIsInAiLCJyYXRpbmciLCJ0ZXh0IiwiX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Comments/index.js\n");

/***/ }),

/***/ "./components/Product/Product.styled.js":
/*!**********************************************!*\
  !*** ./components/Product/Product.styled.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProductCard\": () => (/* binding */ ProductCard)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ProductCard = styled_components__WEBPACK_IMPORTED_MODULE_0___default().article.withConfig({\n    displayName: \"Product.styled__ProductCard\",\n    componentId: \"sc-cc17b663-0\"\n})`\n  padding: 0.5rem 1rem;\n  box-shadow: 0px 1px 5px -2px var(--color-granite);\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3QvUHJvZHVjdC5zdHlsZWQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXVDO0FBRWhDLE1BQU1DLGNBQWNELDJFQUFjOzs7RUFBQSxDQUFDOzs7QUFHMUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFja2VuZC1yZWFkX3Byb2R1Y3RzLy4vY29tcG9uZW50cy9Qcm9kdWN0L1Byb2R1Y3Quc3R5bGVkLmpzP2Y1MjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGNvbnN0IFByb2R1Y3RDYXJkID0gc3R5bGVkLmFydGljbGVgXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBib3gtc2hhZG93OiAwcHggMXB4IDVweCAtMnB4IHZhcigtLWNvbG9yLWdyYW5pdGUpO1xuYDtcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJQcm9kdWN0Q2FyZCIsImFydGljbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Product/Product.styled.js\n");

/***/ }),

/***/ "./components/Product/index.js":
/*!*************************************!*\
  !*** ./components/Product/index.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Product)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Button_Button_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Button/Button.styled */ \"./components/Button/Button.styled.js\");\n/* harmony import */ var _Product_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Product.styled */ \"./components/Product/Product.styled.js\");\n/* harmony import */ var components_Comments__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Comments */ \"./components/Comments/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);\nswr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nfunction Product() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { id  } = router.query;\n    const { data  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(id ? `/api/products/${id}` : null);\n    if (!data) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/home/dusan/Challenges-Spiced/Challenges-Spiced/backend-read_products/components/Product/index.js\",\n            lineNumber: 14,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product_styled__WEBPACK_IMPORTED_MODULE_4__.ProductCard, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: data.name\n            }, void 0, false, {\n                fileName: \"/home/dusan/Challenges-Spiced/Challenges-Spiced/backend-read_products/components/Product/index.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Description: \",\n                    data.description\n                ]\n            }, void 0, true, {\n                fileName: \"/home/dusan/Challenges-Spiced/Challenges-Spiced/backend-read_products/components/Product/index.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Price: \",\n                    data.price,\n                    \" \",\n                    data.currency\n                ]\n            }, void 0, true, {\n                fileName: \"/home/dusan/Challenges-Spiced/Challenges-Spiced/backend-read_products/components/Product/index.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    data.reviews.length,\n                    \" review(s)\"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/dusan/Challenges-Spiced/Challenges-Spiced/backend-read_products/components/Product/index.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Comments__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                reviews: data.reviews\n            }, void 0, false, {\n                fileName: \"/home/dusan/Challenges-Spiced/Challenges-Spiced/backend-read_products/components/Product/index.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button_Button_styled__WEBPACK_IMPORTED_MODULE_3__.StyledButton, {\n                type: \"button\",\n                onClick: ()=>router.push(\"/\"),\n                children: \"Back to all\"\n            }, void 0, false, {\n                fileName: \"/home/dusan/Challenges-Spiced/Challenges-Spiced/backend-read_products/components/Product/index.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/dusan/Challenges-Spiced/Challenges-Spiced/backend-read_products/components/Product/index.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3QvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBeUI7QUFDZTtBQUNlO0FBQ1I7QUFDSjtBQUU1QixTQUFTSyxVQUFVO0lBQ2hDLE1BQU1DLFNBQVNMLHNEQUFTQTtJQUN4QixNQUFNLEVBQUVNLEdBQUUsRUFBRSxHQUFHRCxPQUFPRSxLQUFLO0lBRTNCLE1BQU0sRUFBRUMsS0FBSSxFQUFFLEdBQUdULCtDQUFNQSxDQUFDTyxLQUFLLENBQUMsY0FBYyxFQUFFQSxHQUFHLENBQUMsR0FBRyxJQUFJO0lBRXpELElBQUksQ0FBQ0UsTUFBTTtRQUNULHFCQUFPLDhEQUFDQztzQkFBRzs7Ozs7O0lBQ2IsQ0FBQztJQUVELHFCQUNFLDhEQUFDUCx3REFBV0E7OzBCQUNWLDhEQUFDUTswQkFBSUYsS0FBS0csSUFBSTs7Ozs7OzBCQUNkLDhEQUFDQzs7b0JBQUU7b0JBQWNKLEtBQUtLLFdBQVc7Ozs7Ozs7MEJBQ2pDLDhEQUFDRDs7b0JBQUU7b0JBQ09KLEtBQUtNLEtBQUs7b0JBQUM7b0JBQUVOLEtBQUtPLFFBQVE7Ozs7Ozs7MEJBRXBDLDhEQUFDSDs7b0JBQUdKLEtBQUtRLE9BQU8sQ0FBQ0MsTUFBTTtvQkFBQzs7Ozs7OzswQkFDeEIsOERBQUNkLDJEQUFRQTtnQkFBQ2EsU0FBU1IsS0FBS1EsT0FBTzs7Ozs7OzBCQUMvQiw4REFBQ2YsK0RBQVlBO2dCQUFDaUIsTUFBSztnQkFBU0MsU0FBUyxJQUFNZCxPQUFPZSxJQUFJLENBQUM7MEJBQU07Ozs7Ozs7Ozs7OztBQUtuRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFja2VuZC1yZWFkX3Byb2R1Y3RzLy4vY29tcG9uZW50cy9Qcm9kdWN0L2luZGV4LmpzP2Q0OTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IFN0eWxlZEJ1dHRvbiB9IGZyb20gXCIuLi9CdXR0b24vQnV0dG9uLnN0eWxlZFwiO1xuaW1wb3J0IHsgUHJvZHVjdENhcmQgfSBmcm9tIFwiLi9Qcm9kdWN0LnN0eWxlZFwiO1xuaW1wb3J0IENvbW1lbnRzIGZyb20gXCJjb21wb25lbnRzL0NvbW1lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3QoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgY29uc3QgeyBkYXRhIH0gPSB1c2VTV1IoaWQgPyBgL2FwaS9wcm9kdWN0cy8ke2lkfWAgOiBudWxsKTtcblxuICBpZiAoIWRhdGEpIHtcbiAgICByZXR1cm4gPGgxPkxvYWRpbmcuLi48L2gxPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFByb2R1Y3RDYXJkPlxuICAgICAgPGgyPntkYXRhLm5hbWV9PC9oMj5cbiAgICAgIDxwPkRlc2NyaXB0aW9uOiB7ZGF0YS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICA8cD5cbiAgICAgICAgUHJpY2U6IHtkYXRhLnByaWNlfSB7ZGF0YS5jdXJyZW5jeX1cbiAgICAgIDwvcD5cbiAgICAgIDxwPntkYXRhLnJldmlld3MubGVuZ3RofSByZXZpZXcocyk8L3A+XG4gICAgICA8Q29tbWVudHMgcmV2aWV3cz17ZGF0YS5yZXZpZXdzfSAvPlxuICAgICAgPFN0eWxlZEJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvXCIpfT5cbiAgICAgICAgQmFjayB0byBhbGxcbiAgICAgIDwvU3R5bGVkQnV0dG9uPlxuICAgIDwvUHJvZHVjdENhcmQ+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU1dSIiwidXNlUm91dGVyIiwiU3R5bGVkQnV0dG9uIiwiUHJvZHVjdENhcmQiLCJDb21tZW50cyIsIlByb2R1Y3QiLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwiZGF0YSIsImgxIiwiaDIiLCJuYW1lIiwicCIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJjdXJyZW5jeSIsInJldmlld3MiLCJsZW5ndGgiLCJ0eXBlIiwib25DbGljayIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Product/index.js\n");

/***/ }),

/***/ "./pages/[id].js":
/*!***********************!*\
  !*** ./pages/[id].js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ProductDetailsPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Product */ \"./components/Product/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Product__WEBPACK_IMPORTED_MODULE_1__]);\n_components_Product__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nfunction ProductDetailsPage() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Product__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n        fileName: \"/home/dusan/Challenges-Spiced/Challenges-Spiced/backend-read_products/pages/[id].js\",\n        lineNumber: 4,\n        columnNumber: 10\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUE0QztBQUU3QixTQUFTQyxxQkFBcUI7SUFDM0MscUJBQU8sOERBQUNELDJEQUFPQTs7Ozs7QUFDakIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhY2tlbmQtcmVhZF9wcm9kdWN0cy8uL3BhZ2VzL1tpZF0uanM/YTMwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvZHVjdCBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9kdWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3REZXRhaWxzUGFnZSgpIHtcbiAgcmV0dXJuIDxQcm9kdWN0IC8+O1xufVxuIl0sIm5hbWVzIjpbIlByb2R1Y3QiLCJQcm9kdWN0RGV0YWlsc1BhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[id].js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/[id].js"));
module.exports = __webpack_exports__;

})();