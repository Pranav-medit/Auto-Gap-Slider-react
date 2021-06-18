(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\prana\\Documents\\VSCode\\React\\react hooks\\hook1\\pages\\index.js";


const DisplayPtag = props => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: ["Input is : ", props.inputText]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }, undefined), props.inputTextHistory.map((elem, key) => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: elem
      }, key, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 19
      }, undefined);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 1
  }, undefined);
};

const InputElement = () => {
  const {
    0: inputText,
    1: setInputText
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: inputTextHistory,
    1: setInputTextHistory
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
      onChange: e => {
        setInputText(e.target.value);
        setInputTextHistory([...inputTextHistory, e.target.value]);
      },
      placeholder: "Enter some text"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DisplayPtag, {
      inputTextHistory: inputTextHistory,
      inputText: inputText
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 10
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (InputElement);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob29rMS8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL2hvb2sxL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9ob29rMS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkRpc3BsYXlQdGFnIiwicHJvcHMiLCJpbnB1dFRleHQiLCJpbnB1dFRleHRIaXN0b3J5IiwibWFwIiwiZWxlbSIsImtleSIsIklucHV0RWxlbWVudCIsInNldElucHV0VGV4dCIsInVzZVN0YXRlIiwic2V0SW5wdXRUZXh0SGlzdG9yeSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFFQSxNQUFNQSxXQUFXLEdBQUlDLEtBQUQsSUFBVztBQUM5QixzQkFDRDtBQUFBLDRCQUVJO0FBQUEsZ0NBQWVBLEtBQUssQ0FBQ0MsU0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLEVBSVFELEtBQUssQ0FBQ0UsZ0JBQU4sQ0FBdUJDLEdBQXZCLENBQTJCLENBQUNDLElBQUQsRUFBTUMsR0FBTixLQUFZO0FBQ3JDLDBCQUFRO0FBQUEsa0JBQWVEO0FBQWYsU0FBUUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFSO0FBQ0YsS0FGQSxDQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURDO0FBV0EsQ0FaRDs7QUFjQSxNQUFNQyxZQUFZLEdBQUcsTUFBTTtBQUN2QixRQUFLO0FBQUEsT0FBQ0wsU0FBRDtBQUFBLE9BQVdNO0FBQVgsTUFBMkJDLCtDQUFRLENBQUMsRUFBRCxDQUF4QztBQUNBLFFBQUs7QUFBQSxPQUFDTixnQkFBRDtBQUFBLE9BQWtCTztBQUFsQixNQUF5Q0QsK0NBQVEsQ0FBQyxFQUFELENBQXREO0FBQ0Esc0JBQ0E7QUFBQSw0QkFDSTtBQUNBLGNBQVEsRUFBR0UsQ0FBRCxJQUFLO0FBQ1hILG9CQUFZLENBQUNHLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVo7QUFDQUgsMkJBQW1CLENBQUMsQ0FBQyxHQUFHUCxnQkFBSixFQUFzQlEsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQS9CLENBQUQsQ0FBbkI7QUFDSCxPQUpEO0FBS0MsaUJBQVcsRUFBQztBQUxiO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFPSyw4REFBQyxXQUFEO0FBQWEsc0JBQWdCLEVBQUVWLGdCQUEvQjtBQUFpRCxlQUFTLEVBQUVEO0FBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREE7QUFXSCxDQWREOztBQWVBLCtEQUFlSyxZQUFmLEU7Ozs7Ozs7Ozs7O0FDaENBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IERpc3BsYXlQdGFnID0gKHByb3BzKSA9PiB7XHJcbiByZXR1cm4gKFxyXG48ZGl2PlxyXG4gICAgXHJcbiAgICA8cD5JbnB1dCBpcyA6IHtwcm9wcy5pbnB1dFRleHR9PC9wPlxyXG4gICAgeyAgXHJcbiAgICAgICAgcHJvcHMuaW5wdXRUZXh0SGlzdG9yeS5tYXAoKGVsZW0sa2V5KT0+e1xyXG4gICAgICAgICAgcmV0dXJuICg8cCBrZXk9e2tleX0gPntlbGVtfTwvcD4pXHJcbiAgICAgICB9KVxyXG4gICAgfVxyXG48L2Rpdj5cclxuIClcclxufVxyXG5cclxuY29uc3QgSW5wdXRFbGVtZW50ID0gKCkgPT4ge1xyXG4gICAgY29uc3RbaW5wdXRUZXh0LHNldElucHV0VGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0W2lucHV0VGV4dEhpc3Rvcnksc2V0SW5wdXRUZXh0SGlzdG9yeV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKT0+e1xyXG4gICAgICAgICAgICBzZXRJbnB1dFRleHQoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgIHNldElucHV0VGV4dEhpc3RvcnkoWy4uLmlucHV0VGV4dEhpc3RvcnksIGUudGFyZ2V0LnZhbHVlXSlcclxuICAgICAgICB9fVxyXG4gICAgICAgICBwbGFjZWhvbGRlcj0nRW50ZXIgc29tZSB0ZXh0JyAvPlxyXG4gICAgICAgICA8RGlzcGxheVB0YWcgaW5wdXRUZXh0SGlzdG9yeT17aW5wdXRUZXh0SGlzdG9yeX0gaW5wdXRUZXh0PXtpbnB1dFRleHR9Lz5cclxuICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBJbnB1dEVsZW1lbnQiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9