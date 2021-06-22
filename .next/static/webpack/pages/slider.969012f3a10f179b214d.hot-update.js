self["webpackHotUpdate_N_E"]("pages/slider",{

/***/ "./components/autoGapSlider.js":
/*!*************************************!*\
  !*** ./components/autoGapSlider.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _autoGapSlider_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./autoGapSlider.module.scss */ "./components/autoGapSlider.module.scss");
/* harmony import */ var _autoGapSlider_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_autoGapSlider_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _autoGapSliderCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./autoGapSliderCard */ "./components/autoGapSliderCard.js");
/* harmony import */ var _sliderCardData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sliderCardData */ "./components/sliderCardData.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\prana\\Documents\\VSCode\\React\\react hooks\\hook1\\components\\autoGapSlider.js",
    _this = undefined,
    _s = $RefreshSig$();







var AutoGapSlider = function AutoGapSlider() {
  _s();

  // Each slider card
  var childSliderCardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(); // Parent of slider cards , div holding all slide cards

  var divCardsContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(); // Slider containing cards container and prev, next buttons.

  var autoGapSliderMainContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(); // Grabbing next button

  var nextButton = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(); // Grabbing prev button

  var prevButton = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_sliderCardData__WEBPACK_IMPORTED_MODULE_4__.imgArrData),
      imgArr = _useState[0],
      imgArrUpdt = _useState[1];

  var imageUpdateArr = imgArr;
  var id = 12;
  var timerId;

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      slideCardMargin = _useState2[0],
      updateSlideCardMargin = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      translateValue = _useState3[0],
      updateTranslateValue = _useState3[1];

  var styleImg = {
    width: '200px',
    height: '300px',
    margin: "0 ".concat(slideCardMargin / 2, "px 0 ").concat(slideCardMargin / 2, "px")
  }; // Initialize default values

  var sliderVisibleWidth = 0;
  var eachSlideWidth = 0;
  var slidesToScroll = 0;
  var slidesToScrollWidth = 0;
  var nextPxValueToScrl = 0;
  var prevPxValueToScrl = 0;
  var divCardsContainerTotalWidth = 0; // Detect if we reached end of the slides

  var endOfSlide = false; // Loadash throttler to throttle resize and if user clicks button many times 

  var throttle = lodash__WEBPACK_IMPORTED_MODULE_2___default().throttle(function (func) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    func.apply(void 0, args);
  }, 600);

  var debounce = lodash__WEBPACK_IMPORTED_MODULE_2___default().debounce(function (func) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    func.apply(void 0, args); // console.log('deibounc')
  }, 800);

  var resetSliderPosition = function resetSliderPosition() {
    // default slidesToScrollWidth:240px
    nextPxValueToScrl = -slidesToScrollWidth;
    prevPxValueToScrl = slidesToScrollWidth; // divCardsContainer.current.style.cssText = `transform: translateX(-${0}px)`;

    updateTranslateValue(0);
    displayArrow('prev', false);
    divCardsContainerTotalWidth = divCardsContainer.current.offsetWidth;
  };

  var displayArrow = function displayArrow() {
    var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'prev';
    var toDisplay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (direction === 'prev') {
      if (!toDisplay) showPrevButton(false);else showPrevButton(true);
    } else {
      if (!toDisplay) showNextButton(false);else showNextButton(true);
    }
  };

  var updateSliderPositionRef = function updateSliderPositionRef(updateref) {
    // translateX(0) -> initial position, starting position
    // translateX(-240px) -> moves slide in -> direction by 240px(each slide width by default)
    if (updateref === 'next') {
      // minus position goes -> direction on translate
      // ex: prevPxValueToScrl=240,nextPxValueToScrl=-240  and slidesToScrollWidth=240
      prevPxValueToScrl = prevPxValueToScrl - slidesToScrollWidth; // first-time:prevPxValueToScrl:0
      // second-time:prevPxValueToScrl:-240

      nextPxValueToScrl = nextPxValueToScrl - slidesToScrollWidth; // first-time:nextPxValueToScrl:-480
      // second-time:nextPxValueToScrl:-720
    } else {
      // ex: prevPxValueToScrl=-240,nextPxValueToScrl=-720  and slidesToScrollWidth=240
      nextPxValueToScrl = nextPxValueToScrl + slidesToScrollWidth; // first-time:prevPxValueToScrl:480
      // second-time:prevPxValueToScrl:620

      prevPxValueToScrl = prevPxValueToScrl + slidesToScrollWidth; // first-time:nextPxValueToScrl:0
      // second-time:nextPxValueToScrl:240
    }
  };

  var updateSliderArray = function updateSliderArray() {
    var newElement = [{
      'src': 'static/per1.jpg',
      id: id
    }, {
      'src': 'static/per2.jpg',
      id: id + 1
    }]; // imgArr.push(...newElement)

    imageUpdateArr = imageUpdateArr.concat(newElement);
    imgArrUpdt(imageUpdateArr);
    divCardsContainerTotalWidth = divCardsContainer.current.offsetWidth;
    id = id + 2; // // console.log(imgArrData)
    // clickHandler('next')
  };

  var clickHandler = function clickHandler(direction) {
    // If next button is clicked
    // divCardsContainerTotalWidth = divCardsContainer.current.offsetWidth
    if (direction === 'next') {
      displayArrow('prev', true); // If reached end of slide return to first slide

      if (endOfSlide) {
        // Return to first slide and reset positions of scroll reference
        resetSliderPosition();
        endOfSlide = false; // ex: say divCardsContainerTotalWidth = 2360; and sliderVisibleWidth = 1336 and nextPxValueToScrl = -1440 then
        // sliderVisibleWidth is slider width which is visible to user
        // divCardsContainerTotalWidth is total width of container holding cards =  visible area+hidden area
      } else if (divCardsContainerTotalWidth - sliderVisibleWidth - slideCardMargin - 10 <= -nextPxValueToScrl) {
        // If slide is about to reach last slide , last but one click of endofslide
        // divCardsContainer.current.style.cssText = `transform: translateX(${-divCardsContainerTotalWidth+sliderVisibleWidth}px)`
        updateTranslateValue(-divCardsContainerTotalWidth + sliderVisibleWidth); // Update slider position reference, pass 'next' to update refrence with respect to next button click

        updateSliderPositionRef('next');
        endOfSlide = true; // updateSliderArray()
      } else {
        // If everything is right translate to next px value
        // divCardsContainer.current.style.cssText = `transform: translateX(${nextPxValueToScrl}px)` 
        updateTranslateValue(nextPxValueToScrl); // Update slider position reference, pass 'next' to update refrence with respect to next button click

        updateSliderPositionRef('next');
        endOfSlide = false;
      }
    } else if (direction === 'prev') {
      // End of slide cannot be reached by clicking previous button
      endOfSlide = false;

      if (prevPxValueToScrl > 0) {
        displayArrow('prev', false); // If slider is over left return to first slide and reset positions of scroll reference
        // ex: say by default reference prevPxValueToScrl is set to 240px hence this is executed

        resetSliderPosition();
      } else {
        displayArrow('prev', true); // If everything is right translate to prev px value
        // divCardsContainer.current.style.cssText = `transform: translateX(${prevPxValueToScrl}px)`;

        updateTranslateValue(prevPxValueToScrl); // Update slider position reference, pass 'prev' to update refrence with respect to next button click

        updateSliderPositionRef('prev');
      }
    }
  };

  var initValues = function initValues() {
    endOfSlide = false; // Slider width is an outer div which shows entire slider if we set slider to be 200px wide- 
    // -width is set on this div , we need it to calculate slider visible width in which slider is visible
    // by default slider takes full viewport width.ex : 1600px

    sliderVisibleWidth = autoGapSliderMainContainer.current.offsetWidth; // If slider has margin (space between slider cards if sliders are touch to each other then it has no margin)- 
    // -it is required to calculate how much does slider scrolls

    var eachSlide = childSliderCardRef.current;
    var eachslideCardMargin = window.getComputedStyle(eachSlide).marginRight.slice(0, -2); // Convert from string to number and multiply it by two because margin is applied on both sides

    eachslideCardMargin = Number(eachslideCardMargin) * 2; // Each slider card width is calculated by adding its own width with its own margin

    eachSlideWidth = eachSlide.offsetWidth + eachslideCardMargin; // eachSlideWidth =Number(eachSlideWidth)
    // Number of slides to scroll

    slidesToScroll = 1; // Number of slides to scroll in pixels ex: if 240px

    slidesToScrollWidth = eachSlideWidth * slidesToScroll;
    slidesToScrollWidth = sliderVisibleWidth; // to calculate and track progress of left and right scroll positions

    prevPxValueToScrl = slidesToScrollWidth; // ex:240px

    nextPxValueToScrl = -slidesToScrollWidth; // ex:-240px
    // Cards container width generally equal to eachsliderwidth*totalnumberofslides including margin ex: say 2090px

    divCardsContainerTotalWidth = divCardsContainer.current.offsetWidth;
    displayArrow('prev', false);
  };

  var autoSliderMove = function autoSliderMove(timeout, autoplay) {
    // console.log("mouseleave")
    if (autoplay) {
      timerId = setInterval(function () {
        throttle(clickHandler, 'next');
      }, 100000000000000);
    }
  };

  var clearAutoSliderMove = function clearAutoSliderMove(timerId) {
    // console.log("mouseenter")
    if (timerId) {
      clearTimeout(timerId);
    }
  }; // useEffect for number of slides to show per div


  function setSliderCardStyle(styleValue) {
    updateSlideCardMargin(styleValue);
  }

  function calculateMargin() {
    var minGapBetweenSlides = 10;
    var sliderVisibleWidth = autoGapSliderMainContainer.current.offsetWidth;
    var eachSlideWidth = childSliderCardRef.current.offsetWidth + minGapBetweenSlides;
    var slidesPerVisibleWidth = sliderVisibleWidth / eachSlideWidth;
    var marginToSetInPercentage = slidesPerVisibleWidth - Math.floor(slidesPerVisibleWidth);
    var marginToSetInPx = marginToSetInPercentage * eachSlideWidth;
    var marginPerSlide = marginToSetInPx / (Math.ceil(slidesPerVisibleWidth) - 1) + minGapBetweenSlides;
    setSliderCardStyle(marginPerSlide);
  } // Useeffect for slider next and prev button


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    // Execute when mounting
    // Initialize required values in particular function
    calculateMargin();
    initValues(); // displayContent(initvalues)

    autoSliderMove(2000, true); // sliderStyle.transform('400px')
    // Handle click event for both buttons

    nextButton.current.addEventListener('click', function () {
      return throttle(clickHandler, 'next');
    });
    prevButton.current.addEventListener('click', function () {
      return throttle(clickHandler, 'prev');
    });
    autoGapSliderMainContainer.current.addEventListener('mouseenter', function () {
      return clearAutoSliderMove(timerId);
    });
    autoGapSliderMainContainer.current.addEventListener('mouseleave', function () {
      return autoSliderMove(1000, true);
    });
    window.addEventListener('resize', function () {
      debounce(function () {
        calculateMargin();
        initValues();
        resetSliderPosition();
      });
    });
    return function () {
      // Execute when unmounting (cleanup)
      nextButton.current.removeEventListener('click', function () {
        return throttle(clickHandler, 'next');
      });
      prevButton.current.removeEventListener('click', function () {
        return throttle(clickHandler, 'prev');
      });
      autoGapSliderMainContainer.current.removeEventListener('mouseenter', function () {
        return clearAutoSliderMove(timerId);
      });
      autoGapSliderMainContainer.current.removeEventListener('mouseleave', function () {
        return autoSliderMove(1000, true);
      });
      window.removeEventListener('resize', function () {
        debounce(function () {
          calculateMargin();
          initValues();
          resetSliderPosition();
        });
      });
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    // console.log('Margin updated'+slideCardMargin);
    setTimeout(function () {
      return divCardsContainerTotalWidth = divCardsContainer.current.offsetWidth;
    }, 100);
  }, [slideCardMargin]);
  var touchStartPos = 0;

  var touchStartHandler = function touchStartHandler(e) {
    touchStartPos = e.changedTouches[0].clientX;
  };

  var touchEndHandler = function touchEndHandler(e) {
    var touchEndPos = e.changedTouches[0].clientX;
    if (touchEndPos === touchStartPos) return;
    if (touchEndPos - touchStartPos > 0) clickHandler('prev');else clickHandler('next');
  };

  var dragHandler = function dragHandler(e) {
    e.preventDefault();
  };

  var onImageLoad = function onImageLoad(image, isImgReady) {
    if (isImgReady) image.classList.remove('loading');else image.classList.add('loading');
  }; // useEffect for touch capability


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var images = Array.from(document.getElementsByClassName('imageHolder'));
    images.forEach(function (image) {
      onImageLoad(image, false);
      image.addEventListener('dragstart', function (e) {
        return dragHandler(e);
      });
      image.addEventListener('load', function (e) {
        return onImageLoad(image, true);
      });
    });
    autoGapSliderMainContainer.current.addEventListener('touchstart', function (e) {
      return touchStartHandler(e);
    }, {
      passive: true
    });
    autoGapSliderMainContainer.current.addEventListener('touchend', function (e) {
      return touchEndHandler(e);
    }, {
      passive: true
    });
    autoGapSliderMainContainer.current.addEventListener('touchmove', function (e) {
      console.log(e);
    }, {
      passive: true
    }); // childSliderCardRef.current.removeEventListener('dragstart',(e)=>dragHandler(e) )
    // autoGapSliderMainContainer.current.addEventListener('touchmove',(e)=>touchStartHandler(e) )

    return function () {
      autoGapSliderMainContainer.current.removeEventListener('touchstart', function (e) {
        return touchStartHandler(e);
      });
      autoGapSliderMainContainer.current.removeEventListener('touchend', function (e) {
        return touchEndHandler(e);
      }, {
        passive: true
      });
      images.forEach(function (image) {
        image.removeEventListener('dragstart', function (e) {
          return dragHandler(e);
        });
        image.removeEventListener('load', function (e) {
          return onImageLoad(e);
        });
      }); // autoGapSliderMainContainer.current.removeEventListener('touchmove',(e)=>touchStartHandler(e))
      // throttle(touchStartHandler,2000,e) 
    };
  }, []);

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
      prevButtonDisplay = _useState4[0],
      showPrevButton = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
      nextButtonDisplay = _useState5[0],
      showNextButton = _useState5[1]; // const leftStyle = {display:prevButtonDisplay?"inline-block":"none"}
  // const rightStyle = {display:nextButtonDisplay?"inline-btranslateX(translateValue)lock":"none"}
  // const sliderStyle = {transform: `translateX(${translateValue+'px'})` || '0'}


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      id: "visibleDiv",
      ref: autoGapSliderMainContainer,
      className: (_autoGapSlider_module_scss__WEBPACK_IMPORTED_MODULE_5___default().autoGapSliderMainContainer) + ' autoGapMainContainerDiv ',
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        ref: prevButton,
        style: sliderStyles.prevButton({
          prevButtonDisplay: prevButtonDisplay
        }),
        className: (_autoGapSlider_module_scss__WEBPACK_IMPORTED_MODULE_5___default().button) + ' prev ',
        children: "Prev"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 301,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: sliderStyles.divCardsContainer({
          translateValue: translateValue
        }),
        ref: divCardsContainer,
        className: (_autoGapSlider_module_scss__WEBPACK_IMPORTED_MODULE_5___default().divCardsContainer) + ' imgComp ',
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_autoGapSliderCard__WEBPACK_IMPORTED_MODULE_3__.default, {
          ref: childSliderCardRef,
          imgArr: imgArr,
          styleImg: sliderStyles.slideCardStyle({
            slideCardMargin: slideCardMargin
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 304,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 303,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        ref: nextButton,
        style: sliderStyles.nextButton({
          nextButtonDisplay: nextButtonDisplay
        }),
        className: (_autoGapSlider_module_scss__WEBPACK_IMPORTED_MODULE_5___default().button) + ' next ',
        children: "Next"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 306,
        columnNumber: 12
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      id: (_autoGapSlider_module_scss__WEBPACK_IMPORTED_MODULE_5___default().idea),
      children: "hey"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 9
    }, _this)]
  }, void 0, true);
}; // Styles for slider 


_s(AutoGapSlider, "esMtd3dJketccwKfwDpTTJdfFKE=");

_c = AutoGapSlider;
var sliderStyles = {
  divCardsContainer: function divCardsContainer(_ref) {
    var translateValue = _ref.translateValue;
    return {
      transform: "translateX(".concat(translateValue + 'px', ")") || 0
    };
  },
  nextButton: function nextButton(_ref2) {
    var nextButtonDisplay = _ref2.nextButtonDisplay;
    return {
      display: nextButtonDisplay ? "inline-block" : "none"
    };
  },
  slideCardStyle: function slideCardStyle(_ref3) {
    var slideCardMargin = _ref3.slideCardMargin;
    return {
      width: '200px',
      height: '300px',
      margin: "0 ".concat(slideCardMargin / 2, "px 0 ").concat(slideCardMargin / 2, "px")
    };
  },
  prevButton: function prevButton(_ref4) {
    var prevButtonDisplay = _ref4.prevButtonDisplay;
    return {
      display: prevButtonDisplay ? "inline-block" : "none"
    };
  }
};
/* harmony default export */ __webpack_exports__["default"] = (AutoGapSlider);

var _c;

$RefreshReg$(_c, "AutoGapSlider");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRvR2FwU2xpZGVyLmpzIl0sIm5hbWVzIjpbIkF1dG9HYXBTbGlkZXIiLCJjaGlsZFNsaWRlckNhcmRSZWYiLCJ1c2VSZWYiLCJkaXZDYXJkc0NvbnRhaW5lciIsImF1dG9HYXBTbGlkZXJNYWluQ29udGFpbmVyIiwibmV4dEJ1dHRvbiIsInByZXZCdXR0b24iLCJ1c2VTdGF0ZSIsImltZ0FyckRhdGEiLCJpbWdBcnIiLCJpbWdBcnJVcGR0IiwiaW1hZ2VVcGRhdGVBcnIiLCJpZCIsInRpbWVySWQiLCJzbGlkZUNhcmRNYXJnaW4iLCJ1cGRhdGVTbGlkZUNhcmRNYXJnaW4iLCJ0cmFuc2xhdGVWYWx1ZSIsInVwZGF0ZVRyYW5zbGF0ZVZhbHVlIiwic3R5bGVJbWciLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpbiIsInNsaWRlclZpc2libGVXaWR0aCIsImVhY2hTbGlkZVdpZHRoIiwic2xpZGVzVG9TY3JvbGwiLCJzbGlkZXNUb1Njcm9sbFdpZHRoIiwibmV4dFB4VmFsdWVUb1NjcmwiLCJwcmV2UHhWYWx1ZVRvU2NybCIsImRpdkNhcmRzQ29udGFpbmVyVG90YWxXaWR0aCIsImVuZE9mU2xpZGUiLCJ0aHJvdHRsZSIsIl8iLCJmdW5jIiwiYXJncyIsImRlYm91bmNlIiwicmVzZXRTbGlkZXJQb3NpdGlvbiIsImRpc3BsYXlBcnJvdyIsImN1cnJlbnQiLCJvZmZzZXRXaWR0aCIsImRpcmVjdGlvbiIsInRvRGlzcGxheSIsInNob3dQcmV2QnV0dG9uIiwic2hvd05leHRCdXR0b24iLCJ1cGRhdGVTbGlkZXJQb3NpdGlvblJlZiIsInVwZGF0ZXJlZiIsInVwZGF0ZVNsaWRlckFycmF5IiwibmV3RWxlbWVudCIsImNvbmNhdCIsImNsaWNrSGFuZGxlciIsImluaXRWYWx1ZXMiLCJlYWNoU2xpZGUiLCJlYWNoc2xpZGVDYXJkTWFyZ2luIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIm1hcmdpblJpZ2h0Iiwic2xpY2UiLCJOdW1iZXIiLCJhdXRvU2xpZGVyTW92ZSIsInRpbWVvdXQiLCJhdXRvcGxheSIsInNldEludGVydmFsIiwiY2xlYXJBdXRvU2xpZGVyTW92ZSIsImNsZWFyVGltZW91dCIsInNldFNsaWRlckNhcmRTdHlsZSIsInN0eWxlVmFsdWUiLCJjYWxjdWxhdGVNYXJnaW4iLCJtaW5HYXBCZXR3ZWVuU2xpZGVzIiwic2xpZGVzUGVyVmlzaWJsZVdpZHRoIiwibWFyZ2luVG9TZXRJblBlcmNlbnRhZ2UiLCJNYXRoIiwiZmxvb3IiLCJtYXJnaW5Ub1NldEluUHgiLCJtYXJnaW5QZXJTbGlkZSIsImNlaWwiLCJ1c2VFZmZlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNldFRpbWVvdXQiLCJ0b3VjaFN0YXJ0UG9zIiwidG91Y2hTdGFydEhhbmRsZXIiLCJlIiwiY2hhbmdlZFRvdWNoZXMiLCJjbGllbnRYIiwidG91Y2hFbmRIYW5kbGVyIiwidG91Y2hFbmRQb3MiLCJkcmFnSGFuZGxlciIsInByZXZlbnREZWZhdWx0Iiwib25JbWFnZUxvYWQiLCJpbWFnZSIsImlzSW1nUmVhZHkiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJpbWFnZXMiLCJBcnJheSIsImZyb20iLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJmb3JFYWNoIiwicGFzc2l2ZSIsImNvbnNvbGUiLCJsb2ciLCJwcmV2QnV0dG9uRGlzcGxheSIsIm5leHRCdXR0b25EaXNwbGF5Iiwic3R5bGVzIiwic2xpZGVyU3R5bGVzIiwic2xpZGVDYXJkU3R5bGUiLCJ0cmFuc2Zvcm0iLCJkaXNwbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFBQTs7QUFFeEI7QUFDQSxNQUFNQyxrQkFBa0IsR0FBR0MsNkNBQU0sRUFBakMs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QUEsYTtBQW1UTixJQUFNeUcsWUFBWSxHQUFHO0FBQ2pCdEcsbUJBQWlCLEVBQUM7QUFBQSxRQUFFYSxjQUFGLFFBQUVBLGNBQUY7QUFBQSxXQUFxQjtBQUNuQzJGLGVBQVMsRUFBRSxxQkFBYzNGLGNBQWMsR0FBQyxJQUE3QixVQUF3QyxDQUFHO0FBRG5CLEtBQXJCO0FBQUEsR0FERDtBQUlqQlgsWUFBVSxFQUFDO0FBQUEsUUFBRWtHLGlCQUFGLFNBQUVBLGlCQUFGO0FBQUEsV0FBd0I7QUFDL0JLLGFBQU8sRUFBQ0wsaUJBQWlCLEdBQUMsY0FBRCxHQUFnQjtBQURWLEtBQXhCO0FBQUEsR0FKTTtBQU9qQkcsZ0JBQWMsRUFBQztBQUFBLFFBQUU1RixlQUFGLFNBQUVBLGVBQUY7QUFBQSxXQUFzQjtBQUNqQ0ssV0FBSyxFQUFDLE9BRDJCO0FBRWpDQyxZQUFNLEVBQUMsT0FGMEI7QUFHakNDLFlBQU0sY0FBTVAsZUFBZSxHQUFDLENBQXRCLGtCQUErQkEsZUFBZSxHQUFDLENBQS9DO0FBSDJCLEtBQXRCO0FBQUEsR0FQRTtBQVlqQlIsWUFBVSxFQUFDO0FBQUEsUUFBRWdHLGlCQUFGLFNBQUVBLGlCQUFGO0FBQUEsV0FBd0I7QUFDL0JNLGFBQU8sRUFBQ04saUJBQWlCLEdBQUMsY0FBRCxHQUFnQjtBQURWLEtBQXhCO0FBQUE7QUFaTSxDQUFyQjtBQWdCQSwrREFBZXRHLGFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2xpZGVyLjk2OTAxMmYzYTEwZjE3OWIyMTRkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVJlZixmb3J3YXJkUmVmLCB1c2VFZmZlY3QsdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2F1dG9HYXBTbGlkZXIubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIlxyXG5pbXBvcnQgU2xpZGVyQ2FyZCBmcm9tICcuL2F1dG9HYXBTbGlkZXJDYXJkJ1xyXG5pbXBvcnQge2ltZ0FyckRhdGF9IGZyb20gJy4vc2xpZGVyQ2FyZERhdGEnXHJcbmNvbnN0IEF1dG9HYXBTbGlkZXIgPSAoKSA9PiB7XHJcbiAgICBcclxuICAgIC8vIEVhY2ggc2xpZGVyIGNhcmRcclxuICAgIGNvbnN0IGNoaWxkU2xpZGVyQ2FyZFJlZiA9IHVzZVJlZigpO1xyXG4gICAgLy8gUGFyZW50IG9mIHNsaWRlciBjYXJkcyAsIGRpdiBob2xkaW5nIGFsbCBzbGlkZSBjYXJkc1xyXG4gICAgY29uc3QgZGl2Q2FyZHNDb250YWluZXIgPSB1c2VSZWYoKTsgICBcclxuICAgIC8vIFNsaWRlciBjb250YWluaW5nIGNhcmRzIGNvbnRhaW5lciBhbmQgcHJldiwgbmV4dCBidXR0b25zLlxyXG4gICAgY29uc3QgYXV0b0dhcFNsaWRlck1haW5Db250YWluZXIgPSB1c2VSZWYoKTtcclxuICAgIC8vIEdyYWJiaW5nIG5leHQgYnV0dG9uXHJcbiAgICBjb25zdCBuZXh0QnV0dG9uID0gdXNlUmVmKCk7XHJcbiAgICAvLyBHcmFiYmluZyBwcmV2IGJ1dHRvblxyXG4gICAgY29uc3QgcHJldkJ1dHRvbiA9IHVzZVJlZigpO1xyXG4gICAgY29uc3QgW2ltZ0FycixpbWdBcnJVcGR0XSA9IHVzZVN0YXRlKGltZ0FyckRhdGEpXHJcbiAgICBsZXQgaW1hZ2VVcGRhdGVBcnI9aW1nQXJyO1xyXG4gICAgbGV0IGlkID0gMTI7XHJcbiAgICBsZXQgdGltZXJJZDtcclxuICAgIGNvbnN0IFtzbGlkZUNhcmRNYXJnaW4sdXBkYXRlU2xpZGVDYXJkTWFyZ2luXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW3RyYW5zbGF0ZVZhbHVlLHVwZGF0ZVRyYW5zbGF0ZVZhbHVlXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3Qgc3R5bGVJbWcgPSB7XHJcbiAgICAgICAgd2lkdGg6JzIwMHB4JyxcclxuICAgICAgICBoZWlnaHQ6JzMwMHB4JyxcclxuICAgICAgICBtYXJnaW46YDAgJHtzbGlkZUNhcmRNYXJnaW4vMn1weCAwICR7c2xpZGVDYXJkTWFyZ2luLzJ9cHhgXHJcbiAgICB9O1xyXG4gICAgLy8gSW5pdGlhbGl6ZSBkZWZhdWx0IHZhbHVlc1xyXG4gICAgbGV0IHNsaWRlclZpc2libGVXaWR0aD0wO1xyXG4gICAgbGV0IGVhY2hTbGlkZVdpZHRoID0gMDtcclxuICAgIGxldCBzbGlkZXNUb1Njcm9sbCA9IDA7XHJcbiAgICBsZXQgc2xpZGVzVG9TY3JvbGxXaWR0aD0wO1xyXG4gICAgbGV0IG5leHRQeFZhbHVlVG9TY3JsID0gMDsgXHJcbiAgICBsZXQgcHJldlB4VmFsdWVUb1NjcmwgPSAwO1xyXG4gICAgbGV0IGRpdkNhcmRzQ29udGFpbmVyVG90YWxXaWR0aD0wO1xyXG4gICAgLy8gRGV0ZWN0IGlmIHdlIHJlYWNoZWQgZW5kIG9mIHRoZSBzbGlkZXNcclxuICAgIGxldCBlbmRPZlNsaWRlID0gZmFsc2VcclxuICAgIC8vIExvYWRhc2ggdGhyb3R0bGVyIHRvIHRocm90dGxlIHJlc2l6ZSBhbmQgaWYgdXNlciBjbGlja3MgYnV0dG9uIG1hbnkgdGltZXMgXHJcbiAgICBsZXQgdGhyb3R0bGUgPSBfLnRocm90dGxlKChmdW5jLC4uLmFyZ3MpPT4ge1xyXG4gICAgICAgIGZ1bmMoLi4uYXJncylcclxuICAgIH0sIDYwMCk7XHJcbiAgICBsZXQgZGVib3VuY2UgPSBfLmRlYm91bmNlKChmdW5jLC4uLmFyZ3MpPT4ge1xyXG4gICAgICAgIGZ1bmMoLi4uYXJncylcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnZGVpYm91bmMnKVxyXG4gICAgfSwgODAwKTtcclxuICAgIGNvbnN0IHJlc2V0U2xpZGVyUG9zaXRpb24gPSAoKSA9PntcclxuICAgICAgICAvLyBkZWZhdWx0IHNsaWRlc1RvU2Nyb2xsV2lkdGg6MjQwcHhcclxuICAgICAgICBuZXh0UHhWYWx1ZVRvU2NybCA9IC1zbGlkZXNUb1Njcm9sbFdpZHRoOyBcclxuICAgICAgICBwcmV2UHhWYWx1ZVRvU2NybCA9IHNsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbiAgICAgICAgLy8gZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zdHlsZS5jc3NUZXh0ID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtJHswfXB4KWA7XHJcbiAgICAgICAgdXBkYXRlVHJhbnNsYXRlVmFsdWUoMClcclxuICAgICAgICBkaXNwbGF5QXJyb3coJ3ByZXYnLGZhbHNlKVxyXG4gICAgICAgIGRpdkNhcmRzQ29udGFpbmVyVG90YWxXaWR0aCA9IGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQub2Zmc2V0V2lkdGhcclxuICAgIH1cclxuICAgIGNvbnN0IGRpc3BsYXlBcnJvdz0oZGlyZWN0aW9uPSdwcmV2Jyx0b0Rpc3BsYXk9dHJ1ZSk9PntcclxuICAgICAgICBpZiAoZGlyZWN0aW9uPT09J3ByZXYnKXtcclxuICAgICAgICAgICAgaWYgICghdG9EaXNwbGF5KXNob3dQcmV2QnV0dG9uKGZhbHNlKVxyXG4gICAgICAgICAgICBlbHNlIHNob3dQcmV2QnV0dG9uKHRydWUpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlmICAoIXRvRGlzcGxheSlzaG93TmV4dEJ1dHRvbihmYWxzZSlcclxuICAgICAgICAgICAgZWxzZSBzaG93TmV4dEJ1dHRvbih0cnVlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHVwZGF0ZVNsaWRlclBvc2l0aW9uUmVmID0gKHVwZGF0ZXJlZikgPT57XHJcbiAgICAgICAgLy8gdHJhbnNsYXRlWCgwKSAtPiBpbml0aWFsIHBvc2l0aW9uLCBzdGFydGluZyBwb3NpdGlvblxyXG4gICAgICAgIC8vIHRyYW5zbGF0ZVgoLTI0MHB4KSAtPiBtb3ZlcyBzbGlkZSBpbiAtPiBkaXJlY3Rpb24gYnkgMjQwcHgoZWFjaCBzbGlkZSB3aWR0aCBieSBkZWZhdWx0KVxyXG4gICAgICAgIGlmICh1cGRhdGVyZWYgPT09ICduZXh0Jyl7XHJcbiAgICAgICAgICAgIC8vIG1pbnVzIHBvc2l0aW9uIGdvZXMgLT4gZGlyZWN0aW9uIG9uIHRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAvLyBleDogcHJldlB4VmFsdWVUb1Njcmw9MjQwLG5leHRQeFZhbHVlVG9TY3JsPS0yNDAgIGFuZCBzbGlkZXNUb1Njcm9sbFdpZHRoPTI0MFxyXG4gICAgICAgICAgICBwcmV2UHhWYWx1ZVRvU2NybCA9IHByZXZQeFZhbHVlVG9TY3JsLXNsaWRlc1RvU2Nyb2xsV2lkdGg7IFxyXG4gICAgICAgICAgICAvLyBmaXJzdC10aW1lOnByZXZQeFZhbHVlVG9TY3JsOjBcclxuICAgICAgICAgICAgLy8gc2Vjb25kLXRpbWU6cHJldlB4VmFsdWVUb1Njcmw6LTI0MFxyXG4gICAgICAgICAgICBuZXh0UHhWYWx1ZVRvU2NybCA9IG5leHRQeFZhbHVlVG9TY3JsLXNsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbiAgICAgICAgICAgIC8vIGZpcnN0LXRpbWU6bmV4dFB4VmFsdWVUb1Njcmw6LTQ4MFxyXG4gICAgICAgICAgICAvLyBzZWNvbmQtdGltZTpuZXh0UHhWYWx1ZVRvU2NybDotNzIwXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIC8vIGV4OiBwcmV2UHhWYWx1ZVRvU2NybD0tMjQwLG5leHRQeFZhbHVlVG9TY3JsPS03MjAgIGFuZCBzbGlkZXNUb1Njcm9sbFdpZHRoPTI0MFxyXG4gICAgICAgICAgICBuZXh0UHhWYWx1ZVRvU2NybCA9bmV4dFB4VmFsdWVUb1NjcmwgK3NsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbiAgICAgICAgICAgIC8vIGZpcnN0LXRpbWU6cHJldlB4VmFsdWVUb1Njcmw6NDgwXHJcbiAgICAgICAgICAgIC8vIHNlY29uZC10aW1lOnByZXZQeFZhbHVlVG9TY3JsOjYyMFxyXG4gICAgICAgICAgICBwcmV2UHhWYWx1ZVRvU2NybCA9IHByZXZQeFZhbHVlVG9TY3JsK3NsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbiAgICAgICAgICAgIC8vIGZpcnN0LXRpbWU6bmV4dFB4VmFsdWVUb1Njcmw6MFxyXG4gICAgICAgICAgICAvLyBzZWNvbmQtdGltZTpuZXh0UHhWYWx1ZVRvU2NybDoyNDBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCB1cGRhdGVTbGlkZXJBcnJheSA9ICgpID0+e1xyXG4gICAgICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICdzcmMnOidzdGF0aWMvcGVyMS5qcGcnLFxyXG4gICAgICAgICAgICAgICAgaWQ6aWQsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICdzcmMnOidzdGF0aWMvcGVyMi5qcGcnLFxyXG4gICAgICAgICAgICAgICAgaWQ6aWQrMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICAgIC8vIGltZ0Fyci5wdXNoKC4uLm5ld0VsZW1lbnQpXHJcbiAgICAgICAgaW1hZ2VVcGRhdGVBcnIgPSAgaW1hZ2VVcGRhdGVBcnIuY29uY2F0KG5ld0VsZW1lbnQpXHJcbiAgICAgICAgaW1nQXJyVXBkdChpbWFnZVVwZGF0ZUFyciApO1xyXG4gICAgICAgIGRpdkNhcmRzQ29udGFpbmVyVG90YWxXaWR0aCA9IGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQub2Zmc2V0V2lkdGhcclxuICAgICAgICBpZCA9IGlkKzI7XHJcbiAgICAgICAgLy8gLy8gY29uc29sZS5sb2coaW1nQXJyRGF0YSlcclxuICAgICAgICAvLyBjbGlja0hhbmRsZXIoJ25leHQnKVxyXG4gICAgfVxyXG4gICAgY29uc3QgY2xpY2tIYW5kbGVyID0gKGRpcmVjdGlvbik9PnsgXHJcbiAgICAgICAgLy8gSWYgbmV4dCBidXR0b24gaXMgY2xpY2tlZFxyXG4gICAgICAgIC8vIGRpdkNhcmRzQ29udGFpbmVyVG90YWxXaWR0aCA9IGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQub2Zmc2V0V2lkdGhcclxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAnbmV4dCcpe1xyXG4gICAgICAgICAgICBkaXNwbGF5QXJyb3coJ3ByZXYnLHRydWUpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBJZiByZWFjaGVkIGVuZCBvZiBzbGlkZSByZXR1cm4gdG8gZmlyc3Qgc2xpZGVcclxuICAgICAgICAgICAgaWYoZW5kT2ZTbGlkZSl7ICBcclxuICAgICAgICAgICAgICAgIC8vIFJldHVybiB0byBmaXJzdCBzbGlkZSBhbmQgcmVzZXQgcG9zaXRpb25zIG9mIHNjcm9sbCByZWZlcmVuY2VcclxuICAgICAgICAgICAgICAgIHJlc2V0U2xpZGVyUG9zaXRpb24oKVxyXG4gICAgICAgICAgICAgICAgZW5kT2ZTbGlkZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAvLyBleDogc2F5IGRpdkNhcmRzQ29udGFpbmVyVG90YWxXaWR0aCA9IDIzNjA7IGFuZCBzbGlkZXJWaXNpYmxlV2lkdGggPSAxMzM2IGFuZCBuZXh0UHhWYWx1ZVRvU2NybCA9IC0xNDQwIHRoZW5cclxuICAgICAgICAgICAgICAgIC8vIHNsaWRlclZpc2libGVXaWR0aCBpcyBzbGlkZXIgd2lkdGggd2hpY2ggaXMgdmlzaWJsZSB0byB1c2VyXHJcbiAgICAgICAgICAgICAgICAvLyBkaXZDYXJkc0NvbnRhaW5lclRvdGFsV2lkdGggaXMgdG90YWwgd2lkdGggb2YgY29udGFpbmVyIGhvbGRpbmcgY2FyZHMgPSAgdmlzaWJsZSBhcmVhK2hpZGRlbiBhcmVhXHJcbiAgICAgICAgICAgIH1lbHNlIGlmICgoZGl2Q2FyZHNDb250YWluZXJUb3RhbFdpZHRoLXNsaWRlclZpc2libGVXaWR0aC1zbGlkZUNhcmRNYXJnaW4tMTApPD0gLW5leHRQeFZhbHVlVG9TY3JsKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBJZiBzbGlkZSBpcyBhYm91dCB0byByZWFjaCBsYXN0IHNsaWRlICwgbGFzdCBidXQgb25lIGNsaWNrIG9mIGVuZG9mc2xpZGVcclxuICAgICAgICAgICAgICAgIC8vIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHstZGl2Q2FyZHNDb250YWluZXJUb3RhbFdpZHRoK3NsaWRlclZpc2libGVXaWR0aH1weClgXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVUcmFuc2xhdGVWYWx1ZSgtZGl2Q2FyZHNDb250YWluZXJUb3RhbFdpZHRoK3NsaWRlclZpc2libGVXaWR0aClcclxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBzbGlkZXIgcG9zaXRpb24gcmVmZXJlbmNlLCBwYXNzICduZXh0JyB0byB1cGRhdGUgcmVmcmVuY2Ugd2l0aCByZXNwZWN0IHRvIG5leHQgYnV0dG9uIGNsaWNrXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVTbGlkZXJQb3NpdGlvblJlZignbmV4dCcpXHJcbiAgICAgICAgICAgICAgICBlbmRPZlNsaWRlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgLy8gdXBkYXRlU2xpZGVyQXJyYXkoKVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIC8vIElmIGV2ZXJ5dGhpbmcgaXMgcmlnaHQgdHJhbnNsYXRlIHRvIG5leHQgcHggdmFsdWVcclxuICAgICAgICAgICAgICAgIC8vIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHtuZXh0UHhWYWx1ZVRvU2NybH1weClgIFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlVHJhbnNsYXRlVmFsdWUobmV4dFB4VmFsdWVUb1NjcmwpXHJcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgc2xpZGVyIHBvc2l0aW9uIHJlZmVyZW5jZSwgcGFzcyAnbmV4dCcgdG8gdXBkYXRlIHJlZnJlbmNlIHdpdGggcmVzcGVjdCB0byBuZXh0IGJ1dHRvbiBjbGlja1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlU2xpZGVyUG9zaXRpb25SZWYoJ25leHQnKVxyXG4gICAgICAgICAgICAgICAgZW5kT2ZTbGlkZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZSBpZihkaXJlY3Rpb24gPT09ICdwcmV2Jyl7XHJcbiAgICAgICAgICAgIC8vIEVuZCBvZiBzbGlkZSBjYW5ub3QgYmUgcmVhY2hlZCBieSBjbGlja2luZyBwcmV2aW91cyBidXR0b25cclxuICAgICAgICAgICAgZW5kT2ZTbGlkZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIGlmKHByZXZQeFZhbHVlVG9TY3JsPjApe1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheUFycm93KCdwcmV2JyxmYWxzZSlcclxuICAgICAgICAgICAgICAgIC8vIElmIHNsaWRlciBpcyBvdmVyIGxlZnQgcmV0dXJuIHRvIGZpcnN0IHNsaWRlIGFuZCByZXNldCBwb3NpdGlvbnMgb2Ygc2Nyb2xsIHJlZmVyZW5jZVxyXG4gICAgICAgICAgICAgICAgLy8gZXg6IHNheSBieSBkZWZhdWx0IHJlZmVyZW5jZSBwcmV2UHhWYWx1ZVRvU2NybCBpcyBzZXQgdG8gMjQwcHggaGVuY2UgdGhpcyBpcyBleGVjdXRlZFxyXG4gICAgICAgICAgICAgICAgcmVzZXRTbGlkZXJQb3NpdGlvbigpXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheUFycm93KCdwcmV2Jyx0cnVlKVxyXG4gICAgICAgICAgICAgICAgLy8gSWYgZXZlcnl0aGluZyBpcyByaWdodCB0cmFuc2xhdGUgdG8gcHJldiBweCB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgLy8gZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zdHlsZS5jc3NUZXh0ID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgke3ByZXZQeFZhbHVlVG9TY3JsfXB4KWA7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVUcmFuc2xhdGVWYWx1ZShwcmV2UHhWYWx1ZVRvU2NybClcclxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBzbGlkZXIgcG9zaXRpb24gcmVmZXJlbmNlLCBwYXNzICdwcmV2JyB0byB1cGRhdGUgcmVmcmVuY2Ugd2l0aCByZXNwZWN0IHRvIG5leHQgYnV0dG9uIGNsaWNrXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVTbGlkZXJQb3NpdGlvblJlZigncHJldicpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGluaXRWYWx1ZXMgPSgpID0+e1xyXG4gICAgICAgIGVuZE9mU2xpZGUgPSBmYWxzZVxyXG4gICAgICAgIC8vIFNsaWRlciB3aWR0aCBpcyBhbiBvdXRlciBkaXYgd2hpY2ggc2hvd3MgZW50aXJlIHNsaWRlciBpZiB3ZSBzZXQgc2xpZGVyIHRvIGJlIDIwMHB4IHdpZGUtIFxyXG4gICAgICAgIC8vIC13aWR0aCBpcyBzZXQgb24gdGhpcyBkaXYgLCB3ZSBuZWVkIGl0IHRvIGNhbGN1bGF0ZSBzbGlkZXIgdmlzaWJsZSB3aWR0aCBpbiB3aGljaCBzbGlkZXIgaXMgdmlzaWJsZVxyXG4gICAgICAgIC8vIGJ5IGRlZmF1bHQgc2xpZGVyIHRha2VzIGZ1bGwgdmlld3BvcnQgd2lkdGguZXggOiAxNjAwcHhcclxuICAgICAgICBzbGlkZXJWaXNpYmxlV2lkdGggPSBhdXRvR2FwU2xpZGVyTWFpbkNvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgICAgIC8vIElmIHNsaWRlciBoYXMgbWFyZ2luIChzcGFjZSBiZXR3ZWVuIHNsaWRlciBjYXJkcyBpZiBzbGlkZXJzIGFyZSB0b3VjaCB0byBlYWNoIG90aGVyIHRoZW4gaXQgaGFzIG5vIG1hcmdpbiktIFxyXG4gICAgICAgIC8vIC1pdCBpcyByZXF1aXJlZCB0byBjYWxjdWxhdGUgaG93IG11Y2ggZG9lcyBzbGlkZXIgc2Nyb2xsc1xyXG4gICAgICAgIGxldCBlYWNoU2xpZGUgPSBjaGlsZFNsaWRlckNhcmRSZWYuY3VycmVudFxyXG4gICAgICAgIGxldCBlYWNoc2xpZGVDYXJkTWFyZ2luID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWFjaFNsaWRlKS5tYXJnaW5SaWdodC5zbGljZSgwLCAtMik7XHJcbiAgICAgICAgLy8gQ29udmVydCBmcm9tIHN0cmluZyB0byBudW1iZXIgYW5kIG11bHRpcGx5IGl0IGJ5IHR3byBiZWNhdXNlIG1hcmdpbiBpcyBhcHBsaWVkIG9uIGJvdGggc2lkZXNcclxuICAgICAgICBlYWNoc2xpZGVDYXJkTWFyZ2luPU51bWJlcihlYWNoc2xpZGVDYXJkTWFyZ2luKSoyXHJcbiAgICAgICAgLy8gRWFjaCBzbGlkZXIgY2FyZCB3aWR0aCBpcyBjYWxjdWxhdGVkIGJ5IGFkZGluZyBpdHMgb3duIHdpZHRoIHdpdGggaXRzIG93biBtYXJnaW5cclxuICAgICAgICBlYWNoU2xpZGVXaWR0aCA9IGVhY2hTbGlkZS5vZmZzZXRXaWR0aCtlYWNoc2xpZGVDYXJkTWFyZ2luO1xyXG4gICAgICAgIC8vIGVhY2hTbGlkZVdpZHRoID1OdW1iZXIoZWFjaFNsaWRlV2lkdGgpXHJcbiAgICAgICAgLy8gTnVtYmVyIG9mIHNsaWRlcyB0byBzY3JvbGxcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbCA9IDFcclxuICAgICAgICAvLyBOdW1iZXIgb2Ygc2xpZGVzIHRvIHNjcm9sbCBpbiBwaXhlbHMgZXg6IGlmIDI0MHB4XHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGxXaWR0aD1lYWNoU2xpZGVXaWR0aCpzbGlkZXNUb1Njcm9sbDtcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbFdpZHRoID0gc2xpZGVyVmlzaWJsZVdpZHRoO1xyXG4gICAgICAgIC8vIHRvIGNhbGN1bGF0ZSBhbmQgdHJhY2sgcHJvZ3Jlc3Mgb2YgbGVmdCBhbmQgcmlnaHQgc2Nyb2xsIHBvc2l0aW9uc1xyXG4gICAgICAgIHByZXZQeFZhbHVlVG9TY3JsID0gc2xpZGVzVG9TY3JvbGxXaWR0aDsgLy8gZXg6MjQwcHhcclxuICAgICAgICBuZXh0UHhWYWx1ZVRvU2NybCA9IC1zbGlkZXNUb1Njcm9sbFdpZHRoOyAvLyBleDotMjQwcHhcclxuICAgICAgICAvLyBDYXJkcyBjb250YWluZXIgd2lkdGggZ2VuZXJhbGx5IGVxdWFsIHRvIGVhY2hzbGlkZXJ3aWR0aCp0b3RhbG51bWJlcm9mc2xpZGVzIGluY2x1ZGluZyBtYXJnaW4gZXg6IHNheSAyMDkwcHhcclxuICAgICAgICBkaXZDYXJkc0NvbnRhaW5lclRvdGFsV2lkdGggPSBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoXHJcbiAgICAgICAgZGlzcGxheUFycm93KCdwcmV2JyxmYWxzZSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgYXV0b1NsaWRlck1vdmU9KHRpbWVvdXQsYXV0b3BsYXkpPT57XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJtb3VzZWxlYXZlXCIpXHJcbiAgICAgICAgaWYoYXV0b3BsYXkpe1xyXG4gICAgICAgICAgICB0aW1lcklkPXNldEludGVydmFsKCgpPT57XHJcbiAgICAgICAgICAgICAgICB0aHJvdHRsZShjbGlja0hhbmRsZXIsJ25leHQnKVxyXG4gICAgICAgICAgICB9LDEwMDAwMDAwMDAwMDAwMClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBjbGVhckF1dG9TbGlkZXJNb3ZlPSh0aW1lcklkKT0+e1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibW91c2VlbnRlclwiKVxyXG4gICAgICAgIGlmKHRpbWVySWQpe1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXJJZClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyB1c2VFZmZlY3QgZm9yIG51bWJlciBvZiBzbGlkZXMgdG8gc2hvdyBwZXIgZGl2XHJcbiAgICBmdW5jdGlvbiAgc2V0U2xpZGVyQ2FyZFN0eWxlKHN0eWxlVmFsdWUpIHtcclxuICAgICAgICB1cGRhdGVTbGlkZUNhcmRNYXJnaW4oc3R5bGVWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVNYXJnaW4oKXtcclxuICAgICAgICBjb25zdCBtaW5HYXBCZXR3ZWVuU2xpZGVzID0gMTBcclxuICAgICAgICBjb25zdCBzbGlkZXJWaXNpYmxlV2lkdGggPSBhdXRvR2FwU2xpZGVyTWFpbkNvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgICAgIGNvbnN0IGVhY2hTbGlkZVdpZHRoID0gY2hpbGRTbGlkZXJDYXJkUmVmLmN1cnJlbnQub2Zmc2V0V2lkdGgrbWluR2FwQmV0d2VlblNsaWRlc1xyXG4gICAgICAgIGNvbnN0IHNsaWRlc1BlclZpc2libGVXaWR0aCA9IHNsaWRlclZpc2libGVXaWR0aC8oZWFjaFNsaWRlV2lkdGgpO1xyXG4gICAgICAgIGNvbnN0IG1hcmdpblRvU2V0SW5QZXJjZW50YWdlID0gc2xpZGVzUGVyVmlzaWJsZVdpZHRoIC0gTWF0aC5mbG9vcihzbGlkZXNQZXJWaXNpYmxlV2lkdGgpXHJcbiAgICAgICAgY29uc3QgbWFyZ2luVG9TZXRJblB4ID0gKChtYXJnaW5Ub1NldEluUGVyY2VudGFnZSkqZWFjaFNsaWRlV2lkdGgpXHJcbiAgICAgICAgY29uc3QgbWFyZ2luUGVyU2xpZGUgPSAobWFyZ2luVG9TZXRJblB4LyhNYXRoLmNlaWwoc2xpZGVzUGVyVmlzaWJsZVdpZHRoKS0xKSkrbWluR2FwQmV0d2VlblNsaWRlc1xyXG4gICAgICAgIHNldFNsaWRlckNhcmRTdHlsZShtYXJnaW5QZXJTbGlkZSlcclxuICAgIH1cclxuICAgIC8vIFVzZWVmZmVjdCBmb3Igc2xpZGVyIG5leHQgYW5kIHByZXYgYnV0dG9uXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICAvLyBFeGVjdXRlIHdoZW4gbW91bnRpbmdcclxuICAgICAgICAvLyBJbml0aWFsaXplIHJlcXVpcmVkIHZhbHVlcyBpbiBwYXJ0aWN1bGFyIGZ1bmN0aW9uXHJcbiAgICAgICAgY2FsY3VsYXRlTWFyZ2luKClcclxuICAgICAgICBpbml0VmFsdWVzKClcclxuICAgICAgICAvLyBkaXNwbGF5Q29udGVudChpbml0dmFsdWVzKVxyXG4gICAgICAgIGF1dG9TbGlkZXJNb3ZlKDIwMDAsdHJ1ZSlcclxuICAgICAgICAvLyBzbGlkZXJTdHlsZS50cmFuc2Zvcm0oJzQwMHB4JylcclxuICAgICAgICAvLyBIYW5kbGUgY2xpY2sgZXZlbnQgZm9yIGJvdGggYnV0dG9uc1xyXG4gICAgICAgIG5leHRCdXR0b24uY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PnRocm90dGxlKGNsaWNrSGFuZGxlciwnbmV4dCcpKVxyXG4gICAgICAgIHByZXZCdXR0b24uY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PnRocm90dGxlKGNsaWNrSGFuZGxlciwncHJldicpKVxyXG4gICAgICAgIGF1dG9HYXBTbGlkZXJNYWluQ29udGFpbmVyLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsKCk9PmNsZWFyQXV0b1NsaWRlck1vdmUodGltZXJJZCkpXHJcbiAgICAgICAgYXV0b0dhcFNsaWRlck1haW5Db250YWluZXIuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywoKT0+YXV0b1NsaWRlck1vdmUoMTAwMCx0cnVlKSApXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsKCk9PntcclxuICAgICAgICAgICAgZGVib3VuY2UoKCk9PntcclxuICAgICAgICAgICAgICAgIGNhbGN1bGF0ZU1hcmdpbigpO1xyXG4gICAgICAgICAgICAgICAgaW5pdFZhbHVlcygpO1xyXG4gICAgICAgICAgICAgICAgcmVzZXRTbGlkZXJQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gKCk9PntcclxuICAgICAgICAgICAgLy8gRXhlY3V0ZSB3aGVuIHVubW91bnRpbmcgKGNsZWFudXApXHJcbiAgICAgICAgICAgIG5leHRCdXR0b24uY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PnRocm90dGxlKGNsaWNrSGFuZGxlciwnbmV4dCcpKVxyXG4gICAgICAgICAgICBwcmV2QnV0dG9uLmN1cnJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT50aHJvdHRsZShjbGlja0hhbmRsZXIsJ3ByZXYnKSkgICAgICAgXHJcbiAgICAgICAgICAgIGF1dG9HYXBTbGlkZXJNYWluQ29udGFpbmVyLmN1cnJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsKCk9PmNsZWFyQXV0b1NsaWRlck1vdmUodGltZXJJZCkpXHJcbiAgICAgICAgICAgIGF1dG9HYXBTbGlkZXJNYWluQ29udGFpbmVyLmN1cnJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsKCk9PmF1dG9TbGlkZXJNb3ZlKDEwMDAsdHJ1ZSkgKVxyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywoKT0+e1xyXG4gICAgICAgICAgICAgICAgZGVib3VuY2UoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICBjYWxjdWxhdGVNYXJnaW4oKTtcclxuICAgICAgICAgICAgICAgICAgICBpbml0VmFsdWVzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzZXRTbGlkZXJQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfSk7ICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0sW10pXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnTWFyZ2luIHVwZGF0ZWQnK3NsaWRlQ2FyZE1hcmdpbik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+ZGl2Q2FyZHNDb250YWluZXJUb3RhbFdpZHRoID0gZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aCwxMDApXHJcbiAgICB9LFtzbGlkZUNhcmRNYXJnaW5dKVxyXG4gICAgbGV0IHRvdWNoU3RhcnRQb3MgPTA7XHJcbiAgICBjb25zdCB0b3VjaFN0YXJ0SGFuZGxlciA9IChlKT0+e1xyXG4gICAgICAgIHRvdWNoU3RhcnRQb3M9ZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdG91Y2hFbmRIYW5kbGVyPShlKT0+e1xyXG4gICAgICAgIGxldCB0b3VjaEVuZFBvcyA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WDtcclxuICAgICAgICBpZiAodG91Y2hFbmRQb3M9PT10b3VjaFN0YXJ0UG9zKSByZXR1cm5cclxuICAgICAgICBpZiAodG91Y2hFbmRQb3MtdG91Y2hTdGFydFBvcz4wKSBjbGlja0hhbmRsZXIoJ3ByZXYnKVxyXG4gICAgICAgIGVsc2UgY2xpY2tIYW5kbGVyKCduZXh0JylcclxuICAgIH1cclxuICAgIGNvbnN0IGRyYWdIYW5kbGVyID0gKGUpID0+e1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgfVxyXG4gICAgY29uc3Qgb25JbWFnZUxvYWQgPSAoaW1hZ2UsaXNJbWdSZWFkeSkgPT57XHJcbiAgICAgICAgaWYgKGlzSW1nUmVhZHkpaW1hZ2UuY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGluZycpXHJcbiAgICAgICAgZWxzZSBpbWFnZS5jbGFzc0xpc3QuYWRkKCdsb2FkaW5nJykgICAgXHJcbiAgICB9XHJcbiAgICAvLyB1c2VFZmZlY3QgZm9yIHRvdWNoIGNhcGFiaWxpdHlcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGxldCBpbWFnZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ltYWdlSG9sZGVyJykpXHJcbiAgICAgICAgaW1hZ2VzLmZvckVhY2goKGltYWdlKT0+e1xyXG4gICAgICAgICAgICBvbkltYWdlTG9hZChpbWFnZSxmYWxzZSlcclxuICAgICAgICAgICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywoZSk9PmRyYWdIYW5kbGVyKGUpIClcclxuICAgICAgICAgICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsKGUpPT5vbkltYWdlTG9hZChpbWFnZSx0cnVlKSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIGF1dG9HYXBTbGlkZXJNYWluQ29udGFpbmVyLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsKGUpPT50b3VjaFN0YXJ0SGFuZGxlcihlKSx7cGFzc2l2ZTp0cnVlfSlcclxuICAgICAgICBhdXRvR2FwU2xpZGVyTWFpbkNvbnRhaW5lci5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywoZSk9PnRvdWNoRW5kSGFuZGxlcihlKSx7cGFzc2l2ZTp0cnVlfSApXHJcbiAgICAgICAgYXV0b0dhcFNsaWRlck1haW5Db250YWluZXIuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLChlKT0+e2NvbnNvbGUubG9nKGUpfSx7cGFzc2l2ZTp0cnVlfSlcclxuICAgICAgICAvLyBjaGlsZFNsaWRlckNhcmRSZWYuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLChlKT0+ZHJhZ0hhbmRsZXIoZSkgKVxyXG4gICAgICAgIC8vIGF1dG9HYXBTbGlkZXJNYWluQ29udGFpbmVyLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywoZSk9PnRvdWNoU3RhcnRIYW5kbGVyKGUpIClcclxuICAgICAgICByZXR1cm4gKCk9PiB7XHJcbiAgICAgICAgICAgIGF1dG9HYXBTbGlkZXJNYWluQ29udGFpbmVyLmN1cnJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsKGUpPT50b3VjaFN0YXJ0SGFuZGxlcihlKSApXHJcbiAgICAgICAgICAgIGF1dG9HYXBTbGlkZXJNYWluQ29udGFpbmVyLmN1cnJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLChlKT0+dG91Y2hFbmRIYW5kbGVyKGUpLHtwYXNzaXZlOnRydWV9KVxyXG4gICAgICAgICAgICBpbWFnZXMuZm9yRWFjaCgoaW1hZ2UpPT57XHJcbiAgICAgICAgICAgICAgICBpbWFnZS5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLChlKT0+ZHJhZ0hhbmRsZXIoZSkgKVxyXG4gICAgICAgICAgICAgICAgaW1hZ2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsKGUpPT5vbkltYWdlTG9hZChlKSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLy8gYXV0b0dhcFNsaWRlck1haW5Db250YWluZXIuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLChlKT0+dG91Y2hTdGFydEhhbmRsZXIoZSkpXHJcbiAgICAgICAgICAgIC8vIHRocm90dGxlKHRvdWNoU3RhcnRIYW5kbGVyLDIwMDAsZSkgXHJcbiAgICAgICAgfVxyXG4gICAgfSxbXSlcclxuICAgIGNvbnN0IFtwcmV2QnV0dG9uRGlzcGxheSxzaG93UHJldkJ1dHRvbl09IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW25leHRCdXR0b25EaXNwbGF5LHNob3dOZXh0QnV0dG9uXT0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICAvLyBjb25zdCBsZWZ0U3R5bGUgPSB7ZGlzcGxheTpwcmV2QnV0dG9uRGlzcGxheT9cImlubGluZS1ibG9ja1wiOlwibm9uZVwifVxyXG4gICAgLy8gY29uc3QgcmlnaHRTdHlsZSA9IHtkaXNwbGF5Om5leHRCdXR0b25EaXNwbGF5P1wiaW5saW5lLWJ0cmFuc2xhdGVYKHRyYW5zbGF0ZVZhbHVlKWxvY2tcIjpcIm5vbmVcIn1cclxuICAgIC8vIGNvbnN0IHNsaWRlclN0eWxlID0ge3RyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHt0cmFuc2xhdGVWYWx1ZSsncHgnfSlgIHx8ICcwJ31cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8ZGl2IGlkPVwidmlzaWJsZURpdlwiIHJlZj17YXV0b0dhcFNsaWRlck1haW5Db250YWluZXJ9ICBjbGFzc05hbWU9e3N0eWxlcy5hdXRvR2FwU2xpZGVyTWFpbkNvbnRhaW5lciArICcgYXV0b0dhcE1haW5Db250YWluZXJEaXYgJ30+XHJcbiAgICAgICAgICAgIDxpIHJlZj17cHJldkJ1dHRvbn0gc3R5bGU9e3NsaWRlclN0eWxlcy5wcmV2QnV0dG9uKHtwcmV2QnV0dG9uRGlzcGxheX0pfSAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uKycgcHJldiAnfT5QcmV2PC9pPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiAgc3R5bGU9e3NsaWRlclN0eWxlcy5kaXZDYXJkc0NvbnRhaW5lcih7dHJhbnNsYXRlVmFsdWV9KX0gcmVmPXtkaXZDYXJkc0NvbnRhaW5lcn0gY2xhc3NOYW1lPXtzdHlsZXMuZGl2Q2FyZHNDb250YWluZXIrICcgaW1nQ29tcCAnfT5cclxuICAgICAgICAgICAgPFNsaWRlckNhcmQgcmVmPXtjaGlsZFNsaWRlckNhcmRSZWZ9IGltZ0Fycj17aW1nQXJyfSBzdHlsZUltZz17c2xpZGVyU3R5bGVzLnNsaWRlQ2FyZFN0eWxlKHtzbGlkZUNhcmRNYXJnaW59KX0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPGkgcmVmPXtuZXh0QnV0dG9ufSBzdHlsZT17c2xpZGVyU3R5bGVzLm5leHRCdXR0b24oe25leHRCdXR0b25EaXNwbGF5fSl9IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbisnIG5leHQgJ30+TmV4dDwvaT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8cCAgaWQ9e3N0eWxlc1snaWRlYSddfSA+aGV5PC9wPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuLy8gU3R5bGVzIGZvciBzbGlkZXIgXHJcbmNvbnN0IHNsaWRlclN0eWxlcyA9IHtcclxuICAgIGRpdkNhcmRzQ29udGFpbmVyOih7dHJhbnNsYXRlVmFsdWV9KT0+KHtcclxuICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7dHJhbnNsYXRlVmFsdWUrJ3B4J30pYCB8fCAnMCcsXHJcbiAgICB9KSxcclxuICAgIG5leHRCdXR0b246KHtuZXh0QnV0dG9uRGlzcGxheX0pPT4oe1xyXG4gICAgICAgIGRpc3BsYXk6bmV4dEJ1dHRvbkRpc3BsYXk/XCJpbmxpbmUtYmxvY2tcIjpcIm5vbmVcIlxyXG4gICAgfSksXHJcbiAgICBzbGlkZUNhcmRTdHlsZTooe3NsaWRlQ2FyZE1hcmdpbn0pPT4oe1xyXG4gICAgICAgIHdpZHRoOicyMDBweCcsXHJcbiAgICAgICAgaGVpZ2h0OiczMDBweCcsXHJcbiAgICAgICAgbWFyZ2luOmAwICR7c2xpZGVDYXJkTWFyZ2luLzJ9cHggMCAke3NsaWRlQ2FyZE1hcmdpbi8yfXB4YFxyXG4gICAgfSksXHJcbiAgICBwcmV2QnV0dG9uOih7cHJldkJ1dHRvbkRpc3BsYXl9KT0+KHtcclxuICAgICAgICBkaXNwbGF5OnByZXZCdXR0b25EaXNwbGF5P1wiaW5saW5lLWJsb2NrXCI6XCJub25lXCJcclxuICAgIH0pXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQXV0b0dhcFNsaWRlcjsiXSwic291cmNlUm9vdCI6IiJ9