"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app\\page",{

/***/ "./utils/motion.js":
/*!*************************!*\
  !*** ./utils/motion.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navVariants\": function() { return /* binding */ navVariants; },\n/* harmony export */   \"slideIn\": function() { return /* binding */ slideIn; },\n/* harmony export */   \"staggerContainer\": function() { return /* binding */ staggerContainer; },\n/* harmony export */   \"textVariant\": function() { return /* binding */ textVariant; }\n/* harmony export */ });\nconst navVariants = {\n    hidden: {\n        opacity: 0,\n        y: -50,\n        transition: {\n            type: \"spring\",\n            stiffness: 300,\n            damping: 140\n        }\n    },\n    show: {\n        opacity: 1,\n        y: 0,\n        transition: {\n            type: \"spring\",\n            stiffness: 80,\n            delay: 0.8\n        }\n    }\n};\nconst slideIn = (direction, type, delay, duration)=>({\n        hidden: {\n            x: direction === \"left\" ? \"-100%\" : direction === \"right\" ? \"100%\" : 0,\n            y: direction === \"up\" ? \"100%\" : direction === \"down\" ? \"100%\" : 0\n        },\n        show: {\n            x: 0,\n            y: 0,\n            transition: {\n                type,\n                delay,\n                duration,\n                ease: \"easeOut\"\n            }\n        }\n    });\nconst staggerContainer = (staggerChildren, delayChildren)=>({\n        hidden: {},\n        show: {\n            transition: {\n                staggerChildren,\n                delayChildren\n            }\n        }\n    });\nconst textVariant = (delay)=>({\n        hidden: {\n            y: 50,\n            opacity: 0\n        },\n        show: {\n            y: 0,\n            opacity: 1,\n            transition: {\n                type: \"spring\",\n                duration: 1.25,\n                delay\n            }\n        }\n    });\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9tb3Rpb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFPLE1BQU1BLGNBQWM7SUFDekJDLFFBQVE7UUFDTkMsU0FBUztRQUNUQyxHQUFHLENBQUM7UUFDSkMsWUFBWTtZQUNWQyxNQUFNO1lBQ05DLFdBQVc7WUFDWEMsU0FBUztRQUNYO0lBQ0Y7SUFDQUMsTUFBTTtRQUNKTixTQUFTO1FBQ1RDLEdBQUc7UUFDSEMsWUFBWTtZQUNWQyxNQUFNO1lBQ05DLFdBQVc7WUFDWEcsT0FBTztRQUNUO0lBQ0Y7QUFDRixFQUFFO0FBRUssTUFBTUMsVUFBVSxDQUFDQyxXQUFXTixNQUFNSSxPQUFPRyxXQUFjO1FBQzVEWCxRQUFRO1lBQ05ZLEdBQUdGLGNBQWMsU0FBUyxVQUFVQSxjQUFjLFVBQVUsU0FBUyxDQUFDO1lBQ3RFUixHQUFHUSxjQUFjLE9BQU8sU0FBU0EsY0FBYyxTQUFTLFNBQVMsQ0FBQztRQUNwRTtRQUNBSCxNQUFNO1lBQ0pLLEdBQUc7WUFDSFYsR0FBRztZQUNIQyxZQUFZO2dCQUNWQztnQkFDQUk7Z0JBQ0FHO2dCQUNBRSxNQUFNO1lBQ1I7UUFDRjtJQUNGLEdBQUc7QUFFSSxNQUFNQyxtQkFBbUIsQ0FBQ0MsaUJBQWlCQyxnQkFBbUI7UUFDbkVoQixRQUFRLENBQUM7UUFDVE8sTUFBTTtZQUNKSixZQUFZO2dCQUNWWTtnQkFDQUM7WUFDRjtRQUNGO0lBQ0YsR0FBRztBQUVJLE1BQU1DLGNBQWMsQ0FBQ1QsUUFBVztRQUNyQ1IsUUFBUTtZQUNORSxHQUFHO1lBQ0hELFNBQVM7UUFDWDtRQUNBTSxNQUFNO1lBQ0pMLEdBQUc7WUFDSEQsU0FBUztZQUNURSxZQUFZO2dCQUNWQyxNQUFNO2dCQUNOTyxVQUFVO2dCQUNWSDtZQUNGO1FBQ0Y7SUFDRixHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3V0aWxzL21vdGlvbi5qcz8zNDIxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBuYXZWYXJpYW50cyA9IHtcbiAgaGlkZGVuOiB7XG4gICAgb3BhY2l0eTogMCxcbiAgICB5OiAtNTAsXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgdHlwZTogJ3NwcmluZycsXG4gICAgICBzdGlmZm5lc3M6IDMwMCxcbiAgICAgIGRhbXBpbmc6IDE0MCxcbiAgICB9LFxuICB9LFxuICBzaG93OiB7XG4gICAgb3BhY2l0eTogMSxcbiAgICB5OiAwLFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIHR5cGU6ICdzcHJpbmcnLFxuICAgICAgc3RpZmZuZXNzOiA4MCxcbiAgICAgIGRlbGF5OiAwLjgsXG4gICAgfSxcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBzbGlkZUluID0gKGRpcmVjdGlvbiwgdHlwZSwgZGVsYXksIGR1cmF0aW9uKSA9PiAoe1xuICBoaWRkZW46IHtcbiAgICB4OiBkaXJlY3Rpb24gPT09ICdsZWZ0JyA/ICctMTAwJScgOiBkaXJlY3Rpb24gPT09ICdyaWdodCcgPyAnMTAwJScgOiAwLFxuICAgIHk6IGRpcmVjdGlvbiA9PT0gJ3VwJyA/ICcxMDAlJyA6IGRpcmVjdGlvbiA9PT0gJ2Rvd24nID8gJzEwMCUnIDogMCxcbiAgfSxcbiAgc2hvdzoge1xuICAgIHg6IDAsXG4gICAgeTogMCxcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICB0eXBlLFxuICAgICAgZGVsYXksXG4gICAgICBkdXJhdGlvbixcbiAgICAgIGVhc2U6ICdlYXNlT3V0JyxcbiAgICB9LFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBzdGFnZ2VyQ29udGFpbmVyID0gKHN0YWdnZXJDaGlsZHJlbiwgZGVsYXlDaGlsZHJlbikgPT4gKHtcbiAgaGlkZGVuOiB7fSxcbiAgc2hvdzoge1xuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIHN0YWdnZXJDaGlsZHJlbixcbiAgICAgIGRlbGF5Q2hpbGRyZW4sXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgdGV4dFZhcmlhbnQgPSAoZGVsYXkpID0+ICh7XG4gIGhpZGRlbjoge1xuICAgIHk6IDUwLFxuICAgIG9wYWNpdHk6IDAsXG4gIH0sXG4gIHNob3c6IHtcbiAgICB5OiAwLFxuICAgIG9wYWNpdHk6IDEsXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgdHlwZTogJ3NwcmluZycsXG4gICAgICBkdXJhdGlvbjogMS4yNSxcbiAgICAgIGRlbGF5LFxuICAgIH0sXG4gIH0sXG59KTtcblxuIl0sIm5hbWVzIjpbIm5hdlZhcmlhbnRzIiwiaGlkZGVuIiwib3BhY2l0eSIsInkiLCJ0cmFuc2l0aW9uIiwidHlwZSIsInN0aWZmbmVzcyIsImRhbXBpbmciLCJzaG93IiwiZGVsYXkiLCJzbGlkZUluIiwiZGlyZWN0aW9uIiwiZHVyYXRpb24iLCJ4IiwiZWFzZSIsInN0YWdnZXJDb250YWluZXIiLCJzdGFnZ2VyQ2hpbGRyZW4iLCJkZWxheUNoaWxkcmVuIiwidGV4dFZhcmlhbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/motion.js\n"));

/***/ })

});