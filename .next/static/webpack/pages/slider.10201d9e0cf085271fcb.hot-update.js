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
      slideMargin = _useState2[0],
      updateSlideMargin = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      translateValue = _useState3[0],
      updateTranslateValue = _useState3[1];

  var styleImg = {
    width: '200px',
    height: '300px',
    margin: "0 ".concat(slideMargin / 2, "px 0 ").concat(slideMargin / 2, "px")
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
      } else if (divCardsContainerTotalWidth - sliderVisibleWidth - slideMargin - 10 <= -nextPxValueToScrl) {
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
    var eachSlideMargin = window.getComputedStyle(eachSlide).marginRight.slice(0, -2); // Convert from string to number and multiply it by two because margin is applied on both sides

    eachSlideMargin = Number(eachSlideMargin) * 2; // Each slider card width is calculated by adding its own width with its own margin

    eachSlideWidth = eachSlide.offsetWidth + eachSlideMargin; // eachSlideWidth =Number(eachSlideWidth)
    // Number of slides to scroll

    slidesToScroll = 1; // Number of slides to scroll in pixels ex: if 240px

    slidesToScrollWidth = eachSlideWidth * slidesToScroll;
    slidesToScrollWidth = sliderVisibleWidth; // to calculate and track progress of left and right scroll positions

    prevPxValueToScrl = slidesToScrollWidth; // ex:240px

    nextPxValueToScrl = -slidesToScrollWidth; // ex:-240px
    // Cards container width generally equal to eachsliderwidth*totalnumberofslides including margin ex: say 2090px

    divCardsContainerTotalWidth = divCardsContainer.current.offsetWidth;
    displayArrow('prev', false);
    console.log("values inited");
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


  function setStyle(className, styleValue) {
    updateSlideMargin(styleValue);
  }

  function calculateMargin() {
    var minGapBetweenSlides = 10;
    var sliderVisibleWidth = autoGapSliderMainContainer.current.offsetWidth;
    var eachSlideWidth = childSliderCardRef.current.offsetWidth + minGapBetweenSlides;
    var slidesPerVisibleWidth = sliderVisibleWidth / eachSlideWidth;
    var marginToSetInPercentage = slidesPerVisibleWidth - Math.floor(slidesPerVisibleWidth);
    var marginToSetInPx = marginToSetInPercentage * eachSlideWidth;
    var marginPerSlide = marginToSetInPx / (Math.ceil(slidesPerVisibleWidth) - 1) + minGapBetweenSlides;
    setStyle('div__sliderCard--slideCalulate', marginPerSlide);
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
    // console.log('Margin updated'+slideMargin);
    setTimeout(function () {
      return divCardsContainerTotalWidth = divCardsContainer.current.offsetWidth;
    }, 100);
  }, [slideMargin]);
  var touchStartPos = 0;

  var touchStartHandler = function touchStartHandler(e) {
    touchStartPos = e.changedTouches[0].clientX; // console.log(e.changedTouches[0].clientX)   
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
    if (isImgReady) {
      image.classList.remove('loading');
    } else {
      image.classList.add('loading');
    }
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
        lineNumber: 307,
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
          styleImg: sliderStyles.slideCardarStyle({
            cardMargin: cardMargin
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 310,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 309,
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
        lineNumber: 312,
        columnNumber: 12
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      id: (_autoGapSlider_module_scss__WEBPACK_IMPORTED_MODULE_5___default().idea),
      children: "hey"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 9
    }, _this)]
  }, void 0, true);
};

_s(AutoGapSlider, "qMh9Fz61lfdqKgNcZ3+2rLQv2J4=");

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
    var slideMargin = _ref3.slideMargin;
    return {
      width: '200px',
      height: '300px',
      margin: "0 ".concat(slideMargin / 2, "px 0 ").concat(slideMargin / 2, "px")
    };
  },
  prevButton: function prevButton(_ref4) {
    var prevButtonDisplay = _ref4.prevButtonDisplay;
    return {
      display: prevButtonDisplay ? "inline-block" : "none"
    };
  }
};
/* harmony default export */ __webpack_exports__["default"] = (AutoGapSlider); // setTimeout(()=>{
//     id=id+2;
//     imgArrUpdt([...imgState,   {
//         'src':'static/per1.jpg',
//         id:id,
//     },
//     {
//         'src':'static/per2.jpg',
//         id:id+1,
//     }])
//     console.log(id)
// },10000)
// else if(left> -slidesToScrollWidth){
//     divCardsContainer.current.style.cssText = `transform: translateX(-${0}px)`;
//     nextPxValueToScrl = -slidesToScrollWidth; 
//     prevPxValueToScrl = slidesToScrollWidth;
// }
// const clickHandler = (direction)=>{ 
//     const left = divCardsContainer.current.getBoundingClientRect().left
//     console.log(nextPxValueToScrl,-divCardsContainer.current.offsetWidth+sliderVisibleWidth)
//     if (direction === 'next'){
//         if(nextPxValueToScrl,-divCardsContainer.current.offsetWidth+sliderVisibleWidth){
//             divCardsContainer.current.style.cssText = `transform: translateX(-${0}px)`;
//             nextPxValueToScrl = -slidesToScrollWidth; 
//             prevPxValueToScrl = slidesToScrollWidth;
//         }else if (divCardsContainer.current.offsetWidth-sliderVisibleWidth< -nextPxValueToScrl) {
//             divCardsContainer.current.style.cssText = `transform: translateX(${-divCardsContainer.current.offsetWidth+sliderVisibleWidth}px)`
//             nextPxValueToScrl = -divCardsContainer.current.offsetWidth+sliderVisibleWidth
//         }else{
//             divCardsContainer.current.style.cssText = `transform: translateX(${nextPxValueToScrl}px)`
//             divCardsContainer.current.scrollLeft = slidesToScrollWidth;
//             prevPxValueToScrl = prevPxValueToScrl-slidesToScrollWidth;
//             nextPxValueToScrl = nextPxValueToScrl-slidesToScrollWidth;
//         }
//     }else if(direction === 'prev'){
//         console.log(prevPxValueToScrl)
//         const left = divCardsContainer.current.getBoundingClientRect().left;
//         if(prevPxValueToScrl>0){
//             divCardsContainer.current.style.cssText = `transform: translateX(-${0}px)`;
//             nextPxValueToScrl = -slidesToScrollWidth; 
//             prevPxValueToScrl = slidesToScrollWidth;
//         }else{
//             divCardsContainer.current.style.cssText = `transform: translateX(${prevPxValueToScrl}px)`;
//             nextPxValueToScrl =nextPxValueToScrl +slidesToScrollWidth;
//             prevPxValueToScrl = prevPxValueToScrl+slidesToScrollWidth;
//         }
//     }
// // }
// const left = divCardsContainer.current.getBoundingClientRect().left;
// divCardsContainer.current.scrollLeft = slidesToScrollWidth;
// let items = document.getElementsByClassName(className);
// for (var i=0; i < items.length; i++) {
//   if (i+1===(items.length))items[i].style.marginRight = 'auto'
// }
// initValues()
// async function  setStyle(className, styleValue) {
//     await updateSlideMargin(styleValue);
//     initValues()
// }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRvR2FwU2xpZGVyLmpzIl0sIm5hbWVzIjpbIkF1dG9HYXBTbGlkZXIiLCJjaGlsZFNsaWRlckNhcmRSZWYiLCJ1c2VSZWYiLCJkaXZDYXJkc0NvbnRhaW5lciIsImF1dG9HYXBTbGlkZXJNYWluQ29udGFpbmVyIiwibmV4dEJ1dHRvbiIsInByZXZCdXR0b24iLCJ1c2VTdGF0ZSIsImltZ0FyckRhdGEiLCJpbWdBcnIiLCJpbWdBcnJVcGR0IiwiaW1hZ2VVcGRhdGVBcnIiLCJpZCIsInRpbWVySWQiLCJzbGlkZU1hcmdpbiIsInVwZGF0ZVNsaWRlTWFyZ2luIiwidHJhbnNsYXRlVmFsdWUiLCJ1cGRhdGVUcmFuc2xhdGVWYWx1ZSIsInN0eWxlSW1nIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJzbGlkZXJWaXNpYmxlV2lkdGgiLCJlYWNoU2xpZGVXaWR0aCIsInNsaWRlc1RvU2Nyb2xsIiwic2xpZGVzVG9TY3JvbGxXaWR0aCIsIm5leHRQeFZhbHVlVG9TY3JsIiwicHJldlB4VmFsdWVUb1NjcmwiLCJkaXZDYXJkc0NvbnRhaW5lclRvdGFsV2lkdGgiLCJlbmRPZlNsaWRlIiwidGhyb3R0bGUiLCJfIiwiZnVuYyIsImFyZ3MiLCJkZWJvdW5jZSIsInJlc2V0U2xpZGVyUG9zaXRpb24iLCJkaXNwbGF5QXJyb3ciLCJjdXJyZW50Iiwib2Zmc2V0V2lkdGgiLCJkaXJlY3Rpb24iLCJ0b0Rpc3BsYXkiLCJzaG93UHJldkJ1dHRvbiIsInNob3dOZXh0QnV0dG9uIiwidXBkYXRlU2xpZGVyUG9zaXRpb25SZWYiLCJ1cGRhdGVyZWYiLCJ1cGRhdGVTbGlkZXJBcnJheSIsIm5ld0VsZW1lbnQiLCJjb25jYXQiLCJjbGlja0hhbmRsZXIiLCJpbml0VmFsdWVzIiwiZWFjaFNsaWRlIiwiZWFjaFNsaWRlTWFyZ2luIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIm1hcmdpblJpZ2h0Iiwic2xpY2UiLCJOdW1iZXIiLCJjb25zb2xlIiwibG9nIiwiYXV0b1NsaWRlck1vdmUiLCJ0aW1lb3V0IiwiYXV0b3BsYXkiLCJzZXRJbnRlcnZhbCIsImNsZWFyQXV0b1NsaWRlck1vdmUiLCJjbGVhclRpbWVvdXQiLCJzZXRTdHlsZSIsImNsYXNzTmFtZSIsInN0eWxlVmFsdWUiLCJjYWxjdWxhdGVNYXJnaW4iLCJtaW5HYXBCZXR3ZWVuU2xpZGVzIiwic2xpZGVzUGVyVmlzaWJsZVdpZHRoIiwibWFyZ2luVG9TZXRJblBlcmNlbnRhZ2UiLCJNYXRoIiwiZmxvb3IiLCJtYXJnaW5Ub1NldEluUHgiLCJtYXJnaW5QZXJTbGlkZSIsImNlaWwiLCJ1c2VFZmZlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNldFRpbWVvdXQiLCJ0b3VjaFN0YXJ0UG9zIiwidG91Y2hTdGFydEhhbmRsZXIiLCJlIiwiY2hhbmdlZFRvdWNoZXMiLCJjbGllbnRYIiwidG91Y2hFbmRIYW5kbGVyIiwidG91Y2hFbmRQb3MiLCJkcmFnSGFuZGxlciIsInByZXZlbnREZWZhdWx0Iiwib25JbWFnZUxvYWQiLCJpbWFnZSIsImlzSW1nUmVhZHkiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJpbWFnZXMiLCJBcnJheSIsImZyb20iLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJmb3JFYWNoIiwicGFzc2l2ZSIsInByZXZCdXR0b25EaXNwbGF5IiwibmV4dEJ1dHRvbkRpc3BsYXkiLCJzdHlsZXMiLCJzbGlkZXJTdHlsZXMiLCJzbGlkZUNhcmRhclN0eWxlIiwiY2FyZE1hcmdpbiIsInRyYW5zZm9ybSIsImRpc3BsYXkiLCJzbGlkZUNhcmRTdHlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQUE7O0FBRXhCO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUdDLDZDQUFNLEVBQWpDLENBSHdCLENBSXhCOztBQUNBLE1BQU1DLGlCQUFpQixHQUFHRCw2Q0FBTSxFQUFoQyxDQUx3QixDQU14Qjs7QUFDQSxNQUFNRSwwQkFBMEIsR0FBR0YsNkNBQU0sRUFBekMsQ0FQd0IsQ0FReEI7O0FBQ0EsTUFBTUcsVUFBVSxHQUFHSCw2Q0FBTSxFQUF6QixDQVR3QixDQVV4Qjs7QUFDQSxNQUFNSSxVQUFVLEdBQUdKLDZDQUFNLEVBQXpCOztBQVh3QixrQkFZSUssK0NBQVEsQ0FBQ0MsdURBQUQsQ0FaWjtBQUFBLE1BWWpCQyxNQVppQjtBQUFBLE1BWVZDLFVBWlU7O0FBYXhCLE1BQUlDLGNBQWMsR0FBQ0YsTUFBbkI7QUFDQSxNQUFJRyxFQUFFLEdBQUcsRUFBVDtBQUNBLE1BQUlDLE9BQUo7O0FBZndCLG1CQWdCZ0JOLCtDQUFRLENBQUMsQ0FBRCxDQWhCeEI7QUFBQSxNQWdCakJPLFdBaEJpQjtBQUFBLE1BZ0JMQyxpQkFoQks7O0FBQUEsbUJBaUJzQlIsK0NBQVEsQ0FBQyxDQUFELENBakI5QjtBQUFBLE1BaUJqQlMsY0FqQmlCO0FBQUEsTUFpQkZDLG9CQWpCRTs7QUFrQnhCLE1BQU1DLFFBQVEsR0FBRztBQUNiQyxTQUFLLEVBQUMsT0FETztBQUViQyxVQUFNLEVBQUMsT0FGTTtBQUdiQyxVQUFNLGNBQU1QLFdBQVcsR0FBQyxDQUFsQixrQkFBMkJBLFdBQVcsR0FBQyxDQUF2QztBQUhPLEdBQWpCLENBbEJ3QixDQXVCeEI7O0FBQ0EsTUFBSVEsa0JBQWtCLEdBQUMsQ0FBdkI7QUFDQSxNQUFJQyxjQUFjLEdBQUcsQ0FBckI7QUFDQSxNQUFJQyxjQUFjLEdBQUcsQ0FBckI7QUFDQSxNQUFJQyxtQkFBbUIsR0FBQyxDQUF4QjtBQUNBLE1BQUlDLGlCQUFpQixHQUFHLENBQXhCO0FBQ0EsTUFBSUMsaUJBQWlCLEdBQUcsQ0FBeEI7QUFDQSxNQUFJQywyQkFBMkIsR0FBQyxDQUFoQyxDQTlCd0IsQ0ErQnhCOztBQUNBLE1BQUlDLFVBQVUsR0FBRyxLQUFqQixDQWhDd0IsQ0FpQ3hCOztBQUNBLE1BQUlDLFFBQVEsR0FBR0Msc0RBQUEsQ0FBVyxVQUFDQyxJQUFELEVBQWlCO0FBQUEsc0NBQVJDLElBQVE7QUFBUkEsVUFBUTtBQUFBOztBQUN2Q0QsUUFBSSxNQUFKLFNBQVFDLElBQVI7QUFDSCxHQUZjLEVBRVosR0FGWSxDQUFmOztBQUdBLE1BQUlDLFFBQVEsR0FBR0gsc0RBQUEsQ0FBVyxVQUFDQyxJQUFELEVBQWlCO0FBQUEsdUNBQVJDLElBQVE7QUFBUkEsVUFBUTtBQUFBOztBQUN2Q0QsUUFBSSxNQUFKLFNBQVFDLElBQVIsRUFEdUMsQ0FFdkM7QUFDSCxHQUhjLEVBR1osR0FIWSxDQUFmOztBQUlBLE1BQU1FLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsR0FBSztBQUM3QjtBQUNBVCxxQkFBaUIsR0FBRyxDQUFDRCxtQkFBckI7QUFDQUUscUJBQWlCLEdBQUdGLG1CQUFwQixDQUg2QixDQUk3Qjs7QUFDQVIsd0JBQW9CLENBQUMsQ0FBRCxDQUFwQjtBQUNBbUIsZ0JBQVksQ0FBQyxNQUFELEVBQVEsS0FBUixDQUFaO0FBQ0FSLCtCQUEyQixHQUFHekIsaUJBQWlCLENBQUNrQyxPQUFsQixDQUEwQkMsV0FBeEQ7QUFDSCxHQVJEOztBQVNBLE1BQU1GLFlBQVksR0FBQyxTQUFiQSxZQUFhLEdBQW1DO0FBQUEsUUFBbENHLFNBQWtDLHVFQUF4QixNQUF3QjtBQUFBLFFBQWpCQyxTQUFpQix1RUFBUCxJQUFPOztBQUNsRCxRQUFJRCxTQUFTLEtBQUcsTUFBaEIsRUFBdUI7QUFDbkIsVUFBSyxDQUFDQyxTQUFOLEVBQWdCQyxjQUFjLENBQUMsS0FBRCxDQUFkLENBQWhCLEtBQ0tBLGNBQWMsQ0FBQyxJQUFELENBQWQ7QUFDUixLQUhELE1BR0s7QUFDRCxVQUFLLENBQUNELFNBQU4sRUFBZ0JFLGNBQWMsQ0FBQyxLQUFELENBQWQsQ0FBaEIsS0FDS0EsY0FBYyxDQUFDLElBQUQsQ0FBZDtBQUNSO0FBQ0osR0FSRDs7QUFTQSxNQUFNQyx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLENBQUNDLFNBQUQsRUFBYztBQUMxQztBQUNBO0FBQ0EsUUFBSUEsU0FBUyxLQUFLLE1BQWxCLEVBQXlCO0FBQ3JCO0FBQ0E7QUFDQWpCLHVCQUFpQixHQUFHQSxpQkFBaUIsR0FBQ0YsbUJBQXRDLENBSHFCLENBSXJCO0FBQ0E7O0FBQ0FDLHVCQUFpQixHQUFHQSxpQkFBaUIsR0FBQ0QsbUJBQXRDLENBTnFCLENBT3JCO0FBQ0E7QUFDSCxLQVRELE1BU0s7QUFDRDtBQUNBQyx1QkFBaUIsR0FBRUEsaUJBQWlCLEdBQUVELG1CQUF0QyxDQUZDLENBR0Q7QUFDQTs7QUFDQUUsdUJBQWlCLEdBQUdBLGlCQUFpQixHQUFDRixtQkFBdEMsQ0FMQyxDQU1EO0FBQ0E7QUFDSDtBQUNKLEdBckJEOztBQXNCQSxNQUFNb0IsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFLO0FBQzNCLFFBQU1DLFVBQVUsR0FBRyxDQUNmO0FBQ0ksYUFBTSxpQkFEVjtBQUVJbEMsUUFBRSxFQUFDQTtBQUZQLEtBRGUsRUFLZjtBQUNJLGFBQU0saUJBRFY7QUFFSUEsUUFBRSxFQUFDQSxFQUFFLEdBQUM7QUFGVixLQUxlLENBQW5CLENBRDJCLENBVzNCOztBQUNBRCxrQkFBYyxHQUFJQSxjQUFjLENBQUNvQyxNQUFmLENBQXNCRCxVQUF0QixDQUFsQjtBQUNBcEMsY0FBVSxDQUFDQyxjQUFELENBQVY7QUFDQWlCLCtCQUEyQixHQUFHekIsaUJBQWlCLENBQUNrQyxPQUFsQixDQUEwQkMsV0FBeEQ7QUFDQTFCLE1BQUUsR0FBR0EsRUFBRSxHQUFDLENBQVIsQ0FmMkIsQ0FnQjNCO0FBQ0E7QUFDSCxHQWxCRDs7QUFtQkEsTUFBTW9DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNULFNBQUQsRUFBYTtBQUM5QjtBQUNBO0FBQ0EsUUFBSUEsU0FBUyxLQUFLLE1BQWxCLEVBQXlCO0FBQ3JCSCxrQkFBWSxDQUFDLE1BQUQsRUFBUSxJQUFSLENBQVosQ0FEcUIsQ0FHckI7O0FBQ0EsVUFBR1AsVUFBSCxFQUFjO0FBQ1Y7QUFDQU0sMkJBQW1CO0FBQ25CTixrQkFBVSxHQUFHLEtBQWIsQ0FIVSxDQUlWO0FBQ0E7QUFDQTtBQUNILE9BUEQsTUFPTSxJQUFLRCwyQkFBMkIsR0FBQ04sa0JBQTVCLEdBQStDUixXQUEvQyxHQUEyRCxFQUE1RCxJQUFrRSxDQUFDWSxpQkFBdkUsRUFBMEY7QUFDNUY7QUFDQTtBQUNBVCw0QkFBb0IsQ0FBQyxDQUFDVywyQkFBRCxHQUE2Qk4sa0JBQTlCLENBQXBCLENBSDRGLENBSTVGOztBQUNBcUIsK0JBQXVCLENBQUMsTUFBRCxDQUF2QjtBQUNBZCxrQkFBVSxHQUFHLElBQWIsQ0FONEYsQ0FPNUY7QUFDSCxPQVJLLE1BUUQ7QUFDRDtBQUNBO0FBQ0FaLDRCQUFvQixDQUFDUyxpQkFBRCxDQUFwQixDQUhDLENBSUQ7O0FBQ0FpQiwrQkFBdUIsQ0FBQyxNQUFELENBQXZCO0FBQ0FkLGtCQUFVLEdBQUcsS0FBYjtBQUNIO0FBQ0osS0EzQkQsTUEyQk0sSUFBR1UsU0FBUyxLQUFLLE1BQWpCLEVBQXdCO0FBQzFCO0FBQ0FWLGdCQUFVLEdBQUcsS0FBYjs7QUFDQSxVQUFHRixpQkFBaUIsR0FBQyxDQUFyQixFQUF1QjtBQUNuQlMsb0JBQVksQ0FBQyxNQUFELEVBQVEsS0FBUixDQUFaLENBRG1CLENBRW5CO0FBQ0E7O0FBQ0FELDJCQUFtQjtBQUN0QixPQUxELE1BS0s7QUFDREMsb0JBQVksQ0FBQyxNQUFELEVBQVEsSUFBUixDQUFaLENBREMsQ0FFRDtBQUNBOztBQUNBbkIsNEJBQW9CLENBQUNVLGlCQUFELENBQXBCLENBSkMsQ0FLRDs7QUFDQWdCLCtCQUF1QixDQUFDLE1BQUQsQ0FBdkI7QUFDSDtBQUdKO0FBQ0osR0FqREQ7O0FBa0RBLE1BQU1NLFVBQVUsR0FBRSxTQUFaQSxVQUFZLEdBQUs7QUFDbkJwQixjQUFVLEdBQUcsS0FBYixDQURtQixDQUVuQjtBQUNBO0FBQ0E7O0FBQ0FQLHNCQUFrQixHQUFHbEIsMEJBQTBCLENBQUNpQyxPQUEzQixDQUFtQ0MsV0FBeEQsQ0FMbUIsQ0FNbkI7QUFDQTs7QUFDQSxRQUFJWSxTQUFTLEdBQUdqRCxrQkFBa0IsQ0FBQ29DLE9BQW5DO0FBQ0EsUUFBSWMsZUFBZSxHQUFHQyxNQUFNLENBQUNDLGdCQUFQLENBQXdCSCxTQUF4QixFQUFtQ0ksV0FBbkMsQ0FBK0NDLEtBQS9DLENBQXFELENBQXJELEVBQXdELENBQUMsQ0FBekQsQ0FBdEIsQ0FUbUIsQ0FVbkI7O0FBQ0FKLG1CQUFlLEdBQUNLLE1BQU0sQ0FBQ0wsZUFBRCxDQUFOLEdBQXdCLENBQXhDLENBWG1CLENBWW5COztBQUNBNUIsa0JBQWMsR0FBRzJCLFNBQVMsQ0FBQ1osV0FBVixHQUFzQmEsZUFBdkMsQ0FibUIsQ0FjbkI7QUFDQTs7QUFDQTNCLGtCQUFjLEdBQUcsQ0FBakIsQ0FoQm1CLENBaUJuQjs7QUFDQUMsdUJBQW1CLEdBQUNGLGNBQWMsR0FBQ0MsY0FBbkM7QUFDQUMsdUJBQW1CLEdBQUdILGtCQUF0QixDQW5CbUIsQ0FvQm5COztBQUNBSyxxQkFBaUIsR0FBR0YsbUJBQXBCLENBckJtQixDQXFCc0I7O0FBQ3pDQyxxQkFBaUIsR0FBRyxDQUFDRCxtQkFBckIsQ0F0Qm1CLENBc0J1QjtBQUMxQzs7QUFDQUcsK0JBQTJCLEdBQUd6QixpQkFBaUIsQ0FBQ2tDLE9BQWxCLENBQTBCQyxXQUF4RDtBQUNBRixnQkFBWSxDQUFDLE1BQUQsRUFBUSxLQUFSLENBQVo7QUFDQXFCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVo7QUFDSCxHQTNCRDs7QUE2QkEsTUFBTUMsY0FBYyxHQUFDLFNBQWZBLGNBQWUsQ0FBQ0MsT0FBRCxFQUFTQyxRQUFULEVBQW9CO0FBQ3JDO0FBQ0EsUUFBR0EsUUFBSCxFQUFZO0FBQ1JoRCxhQUFPLEdBQUNpRCxXQUFXLENBQUMsWUFBSTtBQUNwQmhDLGdCQUFRLENBQUNrQixZQUFELEVBQWMsTUFBZCxDQUFSO0FBQ0gsT0FGa0IsRUFFakIsZUFGaUIsQ0FBbkI7QUFHSDtBQUNKLEdBUEQ7O0FBUUEsTUFBTWUsbUJBQW1CLEdBQUMsU0FBcEJBLG1CQUFvQixDQUFDbEQsT0FBRCxFQUFXO0FBQ2pDO0FBQ0EsUUFBR0EsT0FBSCxFQUFXO0FBQ1BtRCxrQkFBWSxDQUFDbkQsT0FBRCxDQUFaO0FBQ0g7QUFDSixHQUxELENBM0x3QixDQWlNeEI7OztBQUNBLFdBQVVvRCxRQUFWLENBQW1CQyxTQUFuQixFQUE4QkMsVUFBOUIsRUFBMEM7QUFDdENwRCxxQkFBaUIsQ0FBQ29ELFVBQUQsQ0FBakI7QUFDSDs7QUFDRCxXQUFTQyxlQUFULEdBQTBCO0FBQ3RCLFFBQU1DLG1CQUFtQixHQUFHLEVBQTVCO0FBQ0EsUUFBTS9DLGtCQUFrQixHQUFHbEIsMEJBQTBCLENBQUNpQyxPQUEzQixDQUFtQ0MsV0FBOUQ7QUFDQSxRQUFNZixjQUFjLEdBQUd0QixrQkFBa0IsQ0FBQ29DLE9BQW5CLENBQTJCQyxXQUEzQixHQUF1QytCLG1CQUE5RDtBQUNBLFFBQU1DLHFCQUFxQixHQUFHaEQsa0JBQWtCLEdBQUVDLGNBQWxEO0FBQ0EsUUFBTWdELHVCQUF1QixHQUFHRCxxQkFBcUIsR0FBR0UsSUFBSSxDQUFDQyxLQUFMLENBQVdILHFCQUFYLENBQXhEO0FBQ0EsUUFBTUksZUFBZSxHQUFLSCx1QkFBRCxHQUEwQmhELGNBQW5EO0FBQ0EsUUFBTW9ELGNBQWMsR0FBSUQsZUFBZSxJQUFFRixJQUFJLENBQUNJLElBQUwsQ0FBVU4scUJBQVYsSUFBaUMsQ0FBbkMsQ0FBaEIsR0FBdURELG1CQUE5RTtBQUNBSixZQUFRLENBQUMsZ0NBQUQsRUFBa0NVLGNBQWxDLENBQVI7QUFDSCxHQTlNdUIsQ0ErTXhCOzs7QUFDQUUsa0RBQVMsQ0FBQyxZQUFJO0FBQ1Y7QUFDQTtBQUNBVCxtQkFBZTtBQUNmbkIsY0FBVSxHQUpBLENBS1Y7O0FBQ0FVLGtCQUFjLENBQUMsSUFBRCxFQUFNLElBQU4sQ0FBZCxDQU5VLENBT1Y7QUFDQTs7QUFDQXRELGNBQVUsQ0FBQ2dDLE9BQVgsQ0FBbUJ5QyxnQkFBbkIsQ0FBb0MsT0FBcEMsRUFBNEM7QUFBQSxhQUFJaEQsUUFBUSxDQUFDa0IsWUFBRCxFQUFjLE1BQWQsQ0FBWjtBQUFBLEtBQTVDO0FBQ0ExQyxjQUFVLENBQUMrQixPQUFYLENBQW1CeUMsZ0JBQW5CLENBQW9DLE9BQXBDLEVBQTRDO0FBQUEsYUFBSWhELFFBQVEsQ0FBQ2tCLFlBQUQsRUFBYyxNQUFkLENBQVo7QUFBQSxLQUE1QztBQUNBNUMsOEJBQTBCLENBQUNpQyxPQUEzQixDQUFtQ3lDLGdCQUFuQyxDQUFvRCxZQUFwRCxFQUFpRTtBQUFBLGFBQUlmLG1CQUFtQixDQUFDbEQsT0FBRCxDQUF2QjtBQUFBLEtBQWpFO0FBQ0FULDhCQUEwQixDQUFDaUMsT0FBM0IsQ0FBbUN5QyxnQkFBbkMsQ0FBb0QsWUFBcEQsRUFBaUU7QUFBQSxhQUFJbkIsY0FBYyxDQUFDLElBQUQsRUFBTSxJQUFOLENBQWxCO0FBQUEsS0FBakU7QUFDQVAsVUFBTSxDQUFDMEIsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBaUMsWUFBSTtBQUNqQzVDLGNBQVEsQ0FBQyxZQUFJO0FBQ1RrQyx1QkFBZTtBQUNmbkIsa0JBQVU7QUFDVmQsMkJBQW1CO0FBQ3RCLE9BSk8sQ0FBUjtBQUtILEtBTkQ7QUFPQSxXQUFPLFlBQUk7QUFDUDtBQUNBOUIsZ0JBQVUsQ0FBQ2dDLE9BQVgsQ0FBbUIwQyxtQkFBbkIsQ0FBdUMsT0FBdkMsRUFBK0M7QUFBQSxlQUFJakQsUUFBUSxDQUFDa0IsWUFBRCxFQUFjLE1BQWQsQ0FBWjtBQUFBLE9BQS9DO0FBQ0ExQyxnQkFBVSxDQUFDK0IsT0FBWCxDQUFtQjBDLG1CQUFuQixDQUF1QyxPQUF2QyxFQUErQztBQUFBLGVBQUlqRCxRQUFRLENBQUNrQixZQUFELEVBQWMsTUFBZCxDQUFaO0FBQUEsT0FBL0M7QUFDQTVDLGdDQUEwQixDQUFDaUMsT0FBM0IsQ0FBbUMwQyxtQkFBbkMsQ0FBdUQsWUFBdkQsRUFBb0U7QUFBQSxlQUFJaEIsbUJBQW1CLENBQUNsRCxPQUFELENBQXZCO0FBQUEsT0FBcEU7QUFDQVQsZ0NBQTBCLENBQUNpQyxPQUEzQixDQUFtQzBDLG1CQUFuQyxDQUF1RCxZQUF2RCxFQUFvRTtBQUFBLGVBQUlwQixjQUFjLENBQUMsSUFBRCxFQUFNLElBQU4sQ0FBbEI7QUFBQSxPQUFwRTtBQUNBUCxZQUFNLENBQUMyQixtQkFBUCxDQUEyQixRQUEzQixFQUFvQyxZQUFJO0FBQ3BDN0MsZ0JBQVEsQ0FBQyxZQUFJO0FBQ1RrQyx5QkFBZTtBQUNmbkIsb0JBQVU7QUFDVmQsNkJBQW1CO0FBQ3RCLFNBSk8sQ0FBUjtBQUtILE9BTkQ7QUFPSCxLQWJEO0FBY0gsR0FsQ1EsRUFrQ1AsRUFsQ08sQ0FBVDtBQW1DQTBDLGtEQUFTLENBQUMsWUFBSTtBQUNWO0FBQ0FHLGNBQVUsQ0FBQztBQUFBLGFBQUlwRCwyQkFBMkIsR0FBR3pCLGlCQUFpQixDQUFDa0MsT0FBbEIsQ0FBMEJDLFdBQTVEO0FBQUEsS0FBRCxFQUF5RSxHQUF6RSxDQUFWO0FBQ0gsR0FIUSxFQUdQLENBQUN4QixXQUFELENBSE8sQ0FBVDtBQUlBLE1BQUltRSxhQUFhLEdBQUUsQ0FBbkI7O0FBQ0EsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxDQUFELEVBQUs7QUFDM0JGLGlCQUFhLEdBQUNFLENBQUMsQ0FBQ0MsY0FBRixDQUFpQixDQUFqQixFQUFvQkMsT0FBbEMsQ0FEMkIsQ0FFM0I7QUFDSCxHQUhEOztBQUlBLE1BQU1DLGVBQWUsR0FBQyxTQUFoQkEsZUFBZ0IsQ0FBQ0gsQ0FBRCxFQUFLO0FBQ3ZCLFFBQUlJLFdBQVcsR0FBR0osQ0FBQyxDQUFDQyxjQUFGLENBQWlCLENBQWpCLEVBQW9CQyxPQUF0QztBQUNBLFFBQUlFLFdBQVcsS0FBR04sYUFBbEIsRUFBaUM7QUFDakMsUUFBSU0sV0FBVyxHQUFDTixhQUFaLEdBQTBCLENBQTlCLEVBQWlDakMsWUFBWSxDQUFDLE1BQUQsQ0FBWixDQUFqQyxLQUNLQSxZQUFZLENBQUMsTUFBRCxDQUFaO0FBQ1IsR0FMRDs7QUFNQSxNQUFNd0MsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0wsQ0FBRCxFQUFNO0FBQ3RCQSxLQUFDLENBQUNNLGNBQUY7QUFDSCxHQUZEOztBQUdBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBT0MsVUFBUCxFQUFxQjtBQUNyQyxRQUFJQSxVQUFKLEVBQWU7QUFDWEQsV0FBSyxDQUFDRSxTQUFOLENBQWdCQyxNQUFoQixDQUF1QixTQUF2QjtBQUNILEtBRkQsTUFFSztBQUNESCxXQUFLLENBQUNFLFNBQU4sQ0FBZ0JFLEdBQWhCLENBQW9CLFNBQXBCO0FBQ0g7QUFFSixHQVBELENBclF3QixDQTZReEI7OztBQUNBbEIsa0RBQVMsQ0FBQyxZQUFJO0FBQ1YsUUFBSW1CLE1BQU0sR0FBR0MsS0FBSyxDQUFDQyxJQUFOLENBQVdDLFFBQVEsQ0FBQ0Msc0JBQVQsQ0FBZ0MsYUFBaEMsQ0FBWCxDQUFiO0FBQ0FKLFVBQU0sQ0FBQ0ssT0FBUCxDQUFlLFVBQUNWLEtBQUQsRUFBUztBQUNwQkQsaUJBQVcsQ0FBQ0MsS0FBRCxFQUFPLEtBQVAsQ0FBWDtBQUNBQSxXQUFLLENBQUNiLGdCQUFOLENBQXVCLFdBQXZCLEVBQW1DLFVBQUNLLENBQUQ7QUFBQSxlQUFLSyxXQUFXLENBQUNMLENBQUQsQ0FBaEI7QUFBQSxPQUFuQztBQUNBUSxXQUFLLENBQUNiLGdCQUFOLENBQXVCLE1BQXZCLEVBQThCLFVBQUNLLENBQUQ7QUFBQSxlQUFLTyxXQUFXLENBQUNDLEtBQUQsRUFBTyxJQUFQLENBQWhCO0FBQUEsT0FBOUI7QUFDSCxLQUpEO0FBS0F2Riw4QkFBMEIsQ0FBQ2lDLE9BQTNCLENBQW1DeUMsZ0JBQW5DLENBQW9ELFlBQXBELEVBQWlFLFVBQUNLLENBQUQ7QUFBQSxhQUFLRCxpQkFBaUIsQ0FBQ0MsQ0FBRCxDQUF0QjtBQUFBLEtBQWpFLEVBQTJGO0FBQUNtQixhQUFPLEVBQUM7QUFBVCxLQUEzRjtBQUNBbEcsOEJBQTBCLENBQUNpQyxPQUEzQixDQUFtQ3lDLGdCQUFuQyxDQUFvRCxVQUFwRCxFQUErRCxVQUFDSyxDQUFEO0FBQUEsYUFBS0csZUFBZSxDQUFDSCxDQUFELENBQXBCO0FBQUEsS0FBL0QsRUFBdUY7QUFBQ21CLGFBQU8sRUFBQztBQUFULEtBQXZGO0FBQ0FsRyw4QkFBMEIsQ0FBQ2lDLE9BQTNCLENBQW1DeUMsZ0JBQW5DLENBQW9ELFdBQXBELEVBQWdFLFVBQUNLLENBQUQsRUFBSztBQUFDMUIsYUFBTyxDQUFDQyxHQUFSLENBQVl5QixDQUFaO0FBQWUsS0FBckYsRUFBc0Y7QUFBQ21CLGFBQU8sRUFBQztBQUFULEtBQXRGLEVBVFUsQ0FVVjtBQUNBOztBQUNBLFdBQU8sWUFBSztBQUNSbEcsZ0NBQTBCLENBQUNpQyxPQUEzQixDQUFtQzBDLG1CQUFuQyxDQUF1RCxZQUF2RCxFQUFvRSxVQUFDSSxDQUFEO0FBQUEsZUFBS0QsaUJBQWlCLENBQUNDLENBQUQsQ0FBdEI7QUFBQSxPQUFwRTtBQUNBL0UsZ0NBQTBCLENBQUNpQyxPQUEzQixDQUFtQzBDLG1CQUFuQyxDQUF1RCxVQUF2RCxFQUFrRSxVQUFDSSxDQUFEO0FBQUEsZUFBS0csZUFBZSxDQUFDSCxDQUFELENBQXBCO0FBQUEsT0FBbEUsRUFBMEY7QUFBQ21CLGVBQU8sRUFBQztBQUFULE9BQTFGO0FBQ0FOLFlBQU0sQ0FBQ0ssT0FBUCxDQUFlLFVBQUNWLEtBQUQsRUFBUztBQUNwQkEsYUFBSyxDQUFDWixtQkFBTixDQUEwQixXQUExQixFQUFzQyxVQUFDSSxDQUFEO0FBQUEsaUJBQUtLLFdBQVcsQ0FBQ0wsQ0FBRCxDQUFoQjtBQUFBLFNBQXRDO0FBQ0FRLGFBQUssQ0FBQ1osbUJBQU4sQ0FBMEIsTUFBMUIsRUFBaUMsVUFBQ0ksQ0FBRDtBQUFBLGlCQUFLTyxXQUFXLENBQUNQLENBQUQsQ0FBaEI7QUFBQSxTQUFqQztBQUNILE9BSEQsRUFIUSxDQU9SO0FBQ0E7QUFDSCxLQVREO0FBVUgsR0F0QlEsRUFzQlAsRUF0Qk8sQ0FBVDs7QUE5UXdCLG1CQXFTa0I1RSwrQ0FBUSxDQUFDLElBQUQsQ0FyUzFCO0FBQUEsTUFxU2pCZ0csaUJBclNpQjtBQUFBLE1BcVNDOUQsY0FyU0Q7O0FBQUEsbUJBc1NrQmxDLCtDQUFRLENBQUMsSUFBRCxDQXRTMUI7QUFBQSxNQXNTakJpRyxpQkF0U2lCO0FBQUEsTUFzU0M5RCxjQXRTRCxrQkF1U3hCO0FBQ0E7QUFDQTs7O0FBQ0Esc0JBQ0k7QUFBQSw0QkFDQTtBQUFLLFFBQUUsRUFBQyxZQUFSO0FBQXFCLFNBQUcsRUFBRXRDLDBCQUExQjtBQUF1RCxlQUFTLEVBQUVxRyw4RkFBQSxHQUFvQywyQkFBdEc7QUFBQSw4QkFDSTtBQUFHLFdBQUcsRUFBRW5HLFVBQVI7QUFBb0IsYUFBSyxFQUFFb0csWUFBWSxDQUFDcEcsVUFBYixDQUF3QjtBQUFDaUcsMkJBQWlCLEVBQWpCQTtBQUFELFNBQXhCLENBQTNCO0FBQTBFLGlCQUFTLEVBQUVFLDBFQUFBLEdBQWMsUUFBbkc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUdJO0FBQU0sYUFBSyxFQUFFQyxZQUFZLENBQUN2RyxpQkFBYixDQUErQjtBQUFDYSx3QkFBYyxFQUFkQTtBQUFELFNBQS9CLENBQWI7QUFBK0QsV0FBRyxFQUFFYixpQkFBcEU7QUFBdUYsaUJBQVMsRUFBRXNHLHFGQUFBLEdBQTBCLFdBQTVIO0FBQUEsK0JBQ0EsOERBQUMsdURBQUQ7QUFBWSxhQUFHLEVBQUV4RyxrQkFBakI7QUFBcUMsZ0JBQU0sRUFBRVEsTUFBN0M7QUFBcUQsa0JBQVEsRUFBRWlHLFlBQVksQ0FBQ0MsZ0JBQWIsQ0FBOEI7QUFBQ0Msc0JBQVUsRUFBVkE7QUFBRCxXQUE5QjtBQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhKLGVBTUc7QUFBRyxXQUFHLEVBQUV2RyxVQUFSO0FBQW9CLGFBQUssRUFBRXFHLFlBQVksQ0FBQ3JHLFVBQWIsQ0FBd0I7QUFBQ21HLDJCQUFpQixFQUFqQkE7QUFBRCxTQUF4QixDQUEzQjtBQUF5RSxpQkFBUyxFQUFFQywwRUFBQSxHQUFjLFFBQWxHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREEsZUFTQTtBQUFJLFFBQUUsRUFBRUEsd0VBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFUQTtBQUFBLGtCQURKO0FBYUgsQ0F2VEQ7O0dBQU16RyxhOztLQUFBQSxhO0FBd1ROLElBQU0wRyxZQUFZLEdBQUc7QUFDakJ2RyxtQkFBaUIsRUFBQztBQUFBLFFBQUVhLGNBQUYsUUFBRUEsY0FBRjtBQUFBLFdBQXFCO0FBQ25DNkYsZUFBUyxFQUFFLHFCQUFjN0YsY0FBYyxHQUFDLElBQTdCLFVBQXdDLENBQUc7QUFEbkIsS0FBckI7QUFBQSxHQUREO0FBSWpCWCxZQUFVLEVBQUM7QUFBQSxRQUFFbUcsaUJBQUYsU0FBRUEsaUJBQUY7QUFBQSxXQUF3QjtBQUMvQk0sYUFBTyxFQUFDTixpQkFBaUIsR0FBQyxjQUFELEdBQWdCO0FBRFYsS0FBeEI7QUFBQSxHQUpNO0FBT2pCTyxnQkFBYyxFQUFDO0FBQUEsUUFBRWpHLFdBQUYsU0FBRUEsV0FBRjtBQUFBLFdBQWtCO0FBQzdCSyxXQUFLLEVBQUMsT0FEdUI7QUFFN0JDLFlBQU0sRUFBQyxPQUZzQjtBQUc3QkMsWUFBTSxjQUFNUCxXQUFXLEdBQUMsQ0FBbEIsa0JBQTJCQSxXQUFXLEdBQUMsQ0FBdkM7QUFIdUIsS0FBbEI7QUFBQSxHQVBFO0FBWWpCUixZQUFVLEVBQUM7QUFBQSxRQUFFaUcsaUJBQUYsU0FBRUEsaUJBQUY7QUFBQSxXQUF3QjtBQUMvQk8sYUFBTyxFQUFDUCxpQkFBaUIsR0FBQyxjQUFELEdBQWdCO0FBRFYsS0FBeEI7QUFBQTtBQVpNLENBQXJCO0FBZ0JBLCtEQUFldkcsYUFBZixFLENBQ0c7QUFDQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zbGlkZXIuMTAyMDFkOWUwY2YwODUyNzFmY2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlUmVmLGZvcndhcmRSZWYsIHVzZUVmZmVjdCx1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vYXV0b0dhcFNsaWRlci5tb2R1bGUuc2NzcydcclxuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiXHJcbmltcG9ydCBTbGlkZXJDYXJkIGZyb20gJy4vYXV0b0dhcFNsaWRlckNhcmQnXHJcbmltcG9ydCB7aW1nQXJyRGF0YX0gZnJvbSAnLi9zbGlkZXJDYXJkRGF0YSdcclxuY29uc3QgQXV0b0dhcFNsaWRlciA9ICgpID0+IHtcclxuICAgIFxyXG4gICAgLy8gRWFjaCBzbGlkZXIgY2FyZFxyXG4gICAgY29uc3QgY2hpbGRTbGlkZXJDYXJkUmVmID0gdXNlUmVmKCk7XHJcbiAgICAvLyBQYXJlbnQgb2Ygc2xpZGVyIGNhcmRzICwgZGl2IGhvbGRpbmcgYWxsIHNsaWRlIGNhcmRzXHJcbiAgICBjb25zdCBkaXZDYXJkc0NvbnRhaW5lciA9IHVzZVJlZigpOyAgIFxyXG4gICAgLy8gU2xpZGVyIGNvbnRhaW5pbmcgY2FyZHMgY29udGFpbmVyIGFuZCBwcmV2LCBuZXh0IGJ1dHRvbnMuXHJcbiAgICBjb25zdCBhdXRvR2FwU2xpZGVyTWFpbkNvbnRhaW5lciA9IHVzZVJlZigpO1xyXG4gICAgLy8gR3JhYmJpbmcgbmV4dCBidXR0b25cclxuICAgIGNvbnN0IG5leHRCdXR0b24gPSB1c2VSZWYoKTtcclxuICAgIC8vIEdyYWJiaW5nIHByZXYgYnV0dG9uXHJcbiAgICBjb25zdCBwcmV2QnV0dG9uID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCBbaW1nQXJyLGltZ0FyclVwZHRdID0gdXNlU3RhdGUoaW1nQXJyRGF0YSlcclxuICAgIGxldCBpbWFnZVVwZGF0ZUFycj1pbWdBcnI7XHJcbiAgICBsZXQgaWQgPSAxMjtcclxuICAgIGxldCB0aW1lcklkO1xyXG4gICAgY29uc3QgW3NsaWRlTWFyZ2luLHVwZGF0ZVNsaWRlTWFyZ2luXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW3RyYW5zbGF0ZVZhbHVlLHVwZGF0ZVRyYW5zbGF0ZVZhbHVlXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3Qgc3R5bGVJbWcgPSB7XHJcbiAgICAgICAgd2lkdGg6JzIwMHB4JyxcclxuICAgICAgICBoZWlnaHQ6JzMwMHB4JyxcclxuICAgICAgICBtYXJnaW46YDAgJHtzbGlkZU1hcmdpbi8yfXB4IDAgJHtzbGlkZU1hcmdpbi8yfXB4YFxyXG4gICAgfTtcclxuICAgIC8vIEluaXRpYWxpemUgZGVmYXVsdCB2YWx1ZXNcclxuICAgIGxldCBzbGlkZXJWaXNpYmxlV2lkdGg9MDtcclxuICAgIGxldCBlYWNoU2xpZGVXaWR0aCA9IDA7XHJcbiAgICBsZXQgc2xpZGVzVG9TY3JvbGwgPSAwO1xyXG4gICAgbGV0IHNsaWRlc1RvU2Nyb2xsV2lkdGg9MDtcclxuICAgIGxldCBuZXh0UHhWYWx1ZVRvU2NybCA9IDA7IFxyXG4gICAgbGV0IHByZXZQeFZhbHVlVG9TY3JsID0gMDtcclxuICAgIGxldCBkaXZDYXJkc0NvbnRhaW5lclRvdGFsV2lkdGg9MDtcclxuICAgIC8vIERldGVjdCBpZiB3ZSByZWFjaGVkIGVuZCBvZiB0aGUgc2xpZGVzXHJcbiAgICBsZXQgZW5kT2ZTbGlkZSA9IGZhbHNlXHJcbiAgICAvLyBMb2FkYXNoIHRocm90dGxlciB0byB0aHJvdHRsZSByZXNpemUgYW5kIGlmIHVzZXIgY2xpY2tzIGJ1dHRvbiBtYW55IHRpbWVzIFxyXG4gICAgbGV0IHRocm90dGxlID0gXy50aHJvdHRsZSgoZnVuYywuLi5hcmdzKT0+IHtcclxuICAgICAgICBmdW5jKC4uLmFyZ3MpXHJcbiAgICB9LCA2MDApO1xyXG4gICAgbGV0IGRlYm91bmNlID0gXy5kZWJvdW5jZSgoZnVuYywuLi5hcmdzKT0+IHtcclxuICAgICAgICBmdW5jKC4uLmFyZ3MpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2RlaWJvdW5jJylcclxuICAgIH0sIDgwMCk7XHJcbiAgICBjb25zdCByZXNldFNsaWRlclBvc2l0aW9uID0gKCkgPT57XHJcbiAgICAgICAgLy8gZGVmYXVsdCBzbGlkZXNUb1Njcm9sbFdpZHRoOjI0MHB4XHJcbiAgICAgICAgbmV4dFB4VmFsdWVUb1NjcmwgPSAtc2xpZGVzVG9TY3JvbGxXaWR0aDsgXHJcbiAgICAgICAgcHJldlB4VmFsdWVUb1NjcmwgPSBzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4gICAgICAgIC8vIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLSR7MH1weClgO1xyXG4gICAgICAgIHVwZGF0ZVRyYW5zbGF0ZVZhbHVlKDApXHJcbiAgICAgICAgZGlzcGxheUFycm93KCdwcmV2JyxmYWxzZSlcclxuICAgICAgICBkaXZDYXJkc0NvbnRhaW5lclRvdGFsV2lkdGggPSBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoXHJcbiAgICB9XHJcbiAgICBjb25zdCBkaXNwbGF5QXJyb3c9KGRpcmVjdGlvbj0ncHJldicsdG9EaXNwbGF5PXRydWUpPT57XHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbj09PSdwcmV2Jyl7XHJcbiAgICAgICAgICAgIGlmICAoIXRvRGlzcGxheSlzaG93UHJldkJ1dHRvbihmYWxzZSlcclxuICAgICAgICAgICAgZWxzZSBzaG93UHJldkJ1dHRvbih0cnVlKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBpZiAgKCF0b0Rpc3BsYXkpc2hvd05leHRCdXR0b24oZmFsc2UpXHJcbiAgICAgICAgICAgIGVsc2Ugc2hvd05leHRCdXR0b24odHJ1ZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCB1cGRhdGVTbGlkZXJQb3NpdGlvblJlZiA9ICh1cGRhdGVyZWYpID0+e1xyXG4gICAgICAgIC8vIHRyYW5zbGF0ZVgoMCkgLT4gaW5pdGlhbCBwb3NpdGlvbiwgc3RhcnRpbmcgcG9zaXRpb25cclxuICAgICAgICAvLyB0cmFuc2xhdGVYKC0yNDBweCkgLT4gbW92ZXMgc2xpZGUgaW4gLT4gZGlyZWN0aW9uIGJ5IDI0MHB4KGVhY2ggc2xpZGUgd2lkdGggYnkgZGVmYXVsdClcclxuICAgICAgICBpZiAodXBkYXRlcmVmID09PSAnbmV4dCcpe1xyXG4gICAgICAgICAgICAvLyBtaW51cyBwb3NpdGlvbiBnb2VzIC0+IGRpcmVjdGlvbiBvbiB0cmFuc2xhdGVcclxuICAgICAgICAgICAgLy8gZXg6IHByZXZQeFZhbHVlVG9TY3JsPTI0MCxuZXh0UHhWYWx1ZVRvU2NybD0tMjQwICBhbmQgc2xpZGVzVG9TY3JvbGxXaWR0aD0yNDBcclxuICAgICAgICAgICAgcHJldlB4VmFsdWVUb1NjcmwgPSBwcmV2UHhWYWx1ZVRvU2NybC1zbGlkZXNUb1Njcm9sbFdpZHRoOyBcclxuICAgICAgICAgICAgLy8gZmlyc3QtdGltZTpwcmV2UHhWYWx1ZVRvU2NybDowXHJcbiAgICAgICAgICAgIC8vIHNlY29uZC10aW1lOnByZXZQeFZhbHVlVG9TY3JsOi0yNDBcclxuICAgICAgICAgICAgbmV4dFB4VmFsdWVUb1NjcmwgPSBuZXh0UHhWYWx1ZVRvU2NybC1zbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4gICAgICAgICAgICAvLyBmaXJzdC10aW1lOm5leHRQeFZhbHVlVG9TY3JsOi00ODBcclxuICAgICAgICAgICAgLy8gc2Vjb25kLXRpbWU6bmV4dFB4VmFsdWVUb1Njcmw6LTcyMFxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAvLyBleDogcHJldlB4VmFsdWVUb1Njcmw9LTI0MCxuZXh0UHhWYWx1ZVRvU2NybD0tNzIwICBhbmQgc2xpZGVzVG9TY3JvbGxXaWR0aD0yNDBcclxuICAgICAgICAgICAgbmV4dFB4VmFsdWVUb1NjcmwgPW5leHRQeFZhbHVlVG9TY3JsICtzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4gICAgICAgICAgICAvLyBmaXJzdC10aW1lOnByZXZQeFZhbHVlVG9TY3JsOjQ4MFxyXG4gICAgICAgICAgICAvLyBzZWNvbmQtdGltZTpwcmV2UHhWYWx1ZVRvU2NybDo2MjBcclxuICAgICAgICAgICAgcHJldlB4VmFsdWVUb1NjcmwgPSBwcmV2UHhWYWx1ZVRvU2NybCtzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4gICAgICAgICAgICAvLyBmaXJzdC10aW1lOm5leHRQeFZhbHVlVG9TY3JsOjBcclxuICAgICAgICAgICAgLy8gc2Vjb25kLXRpbWU6bmV4dFB4VmFsdWVUb1Njcmw6MjQwXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgdXBkYXRlU2xpZGVyQXJyYXkgPSAoKSA9PntcclxuICAgICAgICBjb25zdCBuZXdFbGVtZW50ID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAnc3JjJzonc3RhdGljL3BlcjEuanBnJyxcclxuICAgICAgICAgICAgICAgIGlkOmlkLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAnc3JjJzonc3RhdGljL3BlcjIuanBnJyxcclxuICAgICAgICAgICAgICAgIGlkOmlkKzFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgICAvLyBpbWdBcnIucHVzaCguLi5uZXdFbGVtZW50KVxyXG4gICAgICAgIGltYWdlVXBkYXRlQXJyID0gIGltYWdlVXBkYXRlQXJyLmNvbmNhdChuZXdFbGVtZW50KVxyXG4gICAgICAgIGltZ0FyclVwZHQoaW1hZ2VVcGRhdGVBcnIgKTtcclxuICAgICAgICBkaXZDYXJkc0NvbnRhaW5lclRvdGFsV2lkdGggPSBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoXHJcbiAgICAgICAgaWQgPSBpZCsyO1xyXG4gICAgICAgIC8vIC8vIGNvbnNvbGUubG9nKGltZ0FyckRhdGEpXHJcbiAgICAgICAgLy8gY2xpY2tIYW5kbGVyKCduZXh0JylcclxuICAgIH1cclxuICAgIGNvbnN0IGNsaWNrSGFuZGxlciA9IChkaXJlY3Rpb24pPT57IFxyXG4gICAgICAgIC8vIElmIG5leHQgYnV0dG9uIGlzIGNsaWNrZWRcclxuICAgICAgICAvLyBkaXZDYXJkc0NvbnRhaW5lclRvdGFsV2lkdGggPSBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoXHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ25leHQnKXtcclxuICAgICAgICAgICAgZGlzcGxheUFycm93KCdwcmV2Jyx0cnVlKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gSWYgcmVhY2hlZCBlbmQgb2Ygc2xpZGUgcmV0dXJuIHRvIGZpcnN0IHNsaWRlXHJcbiAgICAgICAgICAgIGlmKGVuZE9mU2xpZGUpeyAgXHJcbiAgICAgICAgICAgICAgICAvLyBSZXR1cm4gdG8gZmlyc3Qgc2xpZGUgYW5kIHJlc2V0IHBvc2l0aW9ucyBvZiBzY3JvbGwgcmVmZXJlbmNlXHJcbiAgICAgICAgICAgICAgICByZXNldFNsaWRlclBvc2l0aW9uKClcclxuICAgICAgICAgICAgICAgIGVuZE9mU2xpZGUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgLy8gZXg6IHNheSBkaXZDYXJkc0NvbnRhaW5lclRvdGFsV2lkdGggPSAyMzYwOyBhbmQgc2xpZGVyVmlzaWJsZVdpZHRoID0gMTMzNiBhbmQgbmV4dFB4VmFsdWVUb1NjcmwgPSAtMTQ0MCB0aGVuXHJcbiAgICAgICAgICAgICAgICAvLyBzbGlkZXJWaXNpYmxlV2lkdGggaXMgc2xpZGVyIHdpZHRoIHdoaWNoIGlzIHZpc2libGUgdG8gdXNlclxyXG4gICAgICAgICAgICAgICAgLy8gZGl2Q2FyZHNDb250YWluZXJUb3RhbFdpZHRoIGlzIHRvdGFsIHdpZHRoIG9mIGNvbnRhaW5lciBob2xkaW5nIGNhcmRzID0gIHZpc2libGUgYXJlYStoaWRkZW4gYXJlYVxyXG4gICAgICAgICAgICB9ZWxzZSBpZiAoKGRpdkNhcmRzQ29udGFpbmVyVG90YWxXaWR0aC1zbGlkZXJWaXNpYmxlV2lkdGgtc2xpZGVNYXJnaW4tMTApPD0gLW5leHRQeFZhbHVlVG9TY3JsKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBJZiBzbGlkZSBpcyBhYm91dCB0byByZWFjaCBsYXN0IHNsaWRlICwgbGFzdCBidXQgb25lIGNsaWNrIG9mIGVuZG9mc2xpZGVcclxuICAgICAgICAgICAgICAgIC8vIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHstZGl2Q2FyZHNDb250YWluZXJUb3RhbFdpZHRoK3NsaWRlclZpc2libGVXaWR0aH1weClgXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVUcmFuc2xhdGVWYWx1ZSgtZGl2Q2FyZHNDb250YWluZXJUb3RhbFdpZHRoK3NsaWRlclZpc2libGVXaWR0aClcclxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBzbGlkZXIgcG9zaXRpb24gcmVmZXJlbmNlLCBwYXNzICduZXh0JyB0byB1cGRhdGUgcmVmcmVuY2Ugd2l0aCByZXNwZWN0IHRvIG5leHQgYnV0dG9uIGNsaWNrXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVTbGlkZXJQb3NpdGlvblJlZignbmV4dCcpXHJcbiAgICAgICAgICAgICAgICBlbmRPZlNsaWRlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgLy8gdXBkYXRlU2xpZGVyQXJyYXkoKVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIC8vIElmIGV2ZXJ5dGhpbmcgaXMgcmlnaHQgdHJhbnNsYXRlIHRvIG5leHQgcHggdmFsdWVcclxuICAgICAgICAgICAgICAgIC8vIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHtuZXh0UHhWYWx1ZVRvU2NybH1weClgIFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlVHJhbnNsYXRlVmFsdWUobmV4dFB4VmFsdWVUb1NjcmwpXHJcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgc2xpZGVyIHBvc2l0aW9uIHJlZmVyZW5jZSwgcGFzcyAnbmV4dCcgdG8gdXBkYXRlIHJlZnJlbmNlIHdpdGggcmVzcGVjdCB0byBuZXh0IGJ1dHRvbiBjbGlja1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlU2xpZGVyUG9zaXRpb25SZWYoJ25leHQnKVxyXG4gICAgICAgICAgICAgICAgZW5kT2ZTbGlkZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZSBpZihkaXJlY3Rpb24gPT09ICdwcmV2Jyl7XHJcbiAgICAgICAgICAgIC8vIEVuZCBvZiBzbGlkZSBjYW5ub3QgYmUgcmVhY2hlZCBieSBjbGlja2luZyBwcmV2aW91cyBidXR0b25cclxuICAgICAgICAgICAgZW5kT2ZTbGlkZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIGlmKHByZXZQeFZhbHVlVG9TY3JsPjApe1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheUFycm93KCdwcmV2JyxmYWxzZSlcclxuICAgICAgICAgICAgICAgIC8vIElmIHNsaWRlciBpcyBvdmVyIGxlZnQgcmV0dXJuIHRvIGZpcnN0IHNsaWRlIGFuZCByZXNldCBwb3NpdGlvbnMgb2Ygc2Nyb2xsIHJlZmVyZW5jZVxyXG4gICAgICAgICAgICAgICAgLy8gZXg6IHNheSBieSBkZWZhdWx0IHJlZmVyZW5jZSBwcmV2UHhWYWx1ZVRvU2NybCBpcyBzZXQgdG8gMjQwcHggaGVuY2UgdGhpcyBpcyBleGVjdXRlZFxyXG4gICAgICAgICAgICAgICAgcmVzZXRTbGlkZXJQb3NpdGlvbigpXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheUFycm93KCdwcmV2Jyx0cnVlKVxyXG4gICAgICAgICAgICAgICAgLy8gSWYgZXZlcnl0aGluZyBpcyByaWdodCB0cmFuc2xhdGUgdG8gcHJldiBweCB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgLy8gZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zdHlsZS5jc3NUZXh0ID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgke3ByZXZQeFZhbHVlVG9TY3JsfXB4KWA7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVUcmFuc2xhdGVWYWx1ZShwcmV2UHhWYWx1ZVRvU2NybClcclxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBzbGlkZXIgcG9zaXRpb24gcmVmZXJlbmNlLCBwYXNzICdwcmV2JyB0byB1cGRhdGUgcmVmcmVuY2Ugd2l0aCByZXNwZWN0IHRvIG5leHQgYnV0dG9uIGNsaWNrXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVTbGlkZXJQb3NpdGlvblJlZigncHJldicpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGluaXRWYWx1ZXMgPSgpID0+e1xyXG4gICAgICAgIGVuZE9mU2xpZGUgPSBmYWxzZVxyXG4gICAgICAgIC8vIFNsaWRlciB3aWR0aCBpcyBhbiBvdXRlciBkaXYgd2hpY2ggc2hvd3MgZW50aXJlIHNsaWRlciBpZiB3ZSBzZXQgc2xpZGVyIHRvIGJlIDIwMHB4IHdpZGUtIFxyXG4gICAgICAgIC8vIC13aWR0aCBpcyBzZXQgb24gdGhpcyBkaXYgLCB3ZSBuZWVkIGl0IHRvIGNhbGN1bGF0ZSBzbGlkZXIgdmlzaWJsZSB3aWR0aCBpbiB3aGljaCBzbGlkZXIgaXMgdmlzaWJsZVxyXG4gICAgICAgIC8vIGJ5IGRlZmF1bHQgc2xpZGVyIHRha2VzIGZ1bGwgdmlld3BvcnQgd2lkdGguZXggOiAxNjAwcHhcclxuICAgICAgICBzbGlkZXJWaXNpYmxlV2lkdGggPSBhdXRvR2FwU2xpZGVyTWFpbkNvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgICAgIC8vIElmIHNsaWRlciBoYXMgbWFyZ2luIChzcGFjZSBiZXR3ZWVuIHNsaWRlciBjYXJkcyBpZiBzbGlkZXJzIGFyZSB0b3VjaCB0byBlYWNoIG90aGVyIHRoZW4gaXQgaGFzIG5vIG1hcmdpbiktIFxyXG4gICAgICAgIC8vIC1pdCBpcyByZXF1aXJlZCB0byBjYWxjdWxhdGUgaG93IG11Y2ggZG9lcyBzbGlkZXIgc2Nyb2xsc1xyXG4gICAgICAgIGxldCBlYWNoU2xpZGUgPSBjaGlsZFNsaWRlckNhcmRSZWYuY3VycmVudFxyXG4gICAgICAgIGxldCBlYWNoU2xpZGVNYXJnaW4gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlYWNoU2xpZGUpLm1hcmdpblJpZ2h0LnNsaWNlKDAsIC0yKTtcclxuICAgICAgICAvLyBDb252ZXJ0IGZyb20gc3RyaW5nIHRvIG51bWJlciBhbmQgbXVsdGlwbHkgaXQgYnkgdHdvIGJlY2F1c2UgbWFyZ2luIGlzIGFwcGxpZWQgb24gYm90aCBzaWRlc1xyXG4gICAgICAgIGVhY2hTbGlkZU1hcmdpbj1OdW1iZXIoZWFjaFNsaWRlTWFyZ2luKSoyXHJcbiAgICAgICAgLy8gRWFjaCBzbGlkZXIgY2FyZCB3aWR0aCBpcyBjYWxjdWxhdGVkIGJ5IGFkZGluZyBpdHMgb3duIHdpZHRoIHdpdGggaXRzIG93biBtYXJnaW5cclxuICAgICAgICBlYWNoU2xpZGVXaWR0aCA9IGVhY2hTbGlkZS5vZmZzZXRXaWR0aCtlYWNoU2xpZGVNYXJnaW47XHJcbiAgICAgICAgLy8gZWFjaFNsaWRlV2lkdGggPU51bWJlcihlYWNoU2xpZGVXaWR0aClcclxuICAgICAgICAvLyBOdW1iZXIgb2Ygc2xpZGVzIHRvIHNjcm9sbFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsID0gMVxyXG4gICAgICAgIC8vIE51bWJlciBvZiBzbGlkZXMgdG8gc2Nyb2xsIGluIHBpeGVscyBleDogaWYgMjQwcHhcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbFdpZHRoPWVhY2hTbGlkZVdpZHRoKnNsaWRlc1RvU2Nyb2xsO1xyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsV2lkdGggPSBzbGlkZXJWaXNpYmxlV2lkdGg7XHJcbiAgICAgICAgLy8gdG8gY2FsY3VsYXRlIGFuZCB0cmFjayBwcm9ncmVzcyBvZiBsZWZ0IGFuZCByaWdodCBzY3JvbGwgcG9zaXRpb25zXHJcbiAgICAgICAgcHJldlB4VmFsdWVUb1NjcmwgPSBzbGlkZXNUb1Njcm9sbFdpZHRoOyAvLyBleDoyNDBweFxyXG4gICAgICAgIG5leHRQeFZhbHVlVG9TY3JsID0gLXNsaWRlc1RvU2Nyb2xsV2lkdGg7IC8vIGV4Oi0yNDBweFxyXG4gICAgICAgIC8vIENhcmRzIGNvbnRhaW5lciB3aWR0aCBnZW5lcmFsbHkgZXF1YWwgdG8gZWFjaHNsaWRlcndpZHRoKnRvdGFsbnVtYmVyb2ZzbGlkZXMgaW5jbHVkaW5nIG1hcmdpbiBleDogc2F5IDIwOTBweFxyXG4gICAgICAgIGRpdkNhcmRzQ29udGFpbmVyVG90YWxXaWR0aCA9IGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQub2Zmc2V0V2lkdGhcclxuICAgICAgICBkaXNwbGF5QXJyb3coJ3ByZXYnLGZhbHNlKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidmFsdWVzIGluaXRlZFwiKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBhdXRvU2xpZGVyTW92ZT0odGltZW91dCxhdXRvcGxheSk9PntcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm1vdXNlbGVhdmVcIilcclxuICAgICAgICBpZihhdXRvcGxheSl7XHJcbiAgICAgICAgICAgIHRpbWVySWQ9c2V0SW50ZXJ2YWwoKCk9PntcclxuICAgICAgICAgICAgICAgIHRocm90dGxlKGNsaWNrSGFuZGxlciwnbmV4dCcpXHJcbiAgICAgICAgICAgIH0sMTAwMDAwMDAwMDAwMDAwKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGNsZWFyQXV0b1NsaWRlck1vdmU9KHRpbWVySWQpPT57XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJtb3VzZWVudGVyXCIpXHJcbiAgICAgICAgaWYodGltZXJJZCl7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHVzZUVmZmVjdCBmb3IgbnVtYmVyIG9mIHNsaWRlcyB0byBzaG93IHBlciBkaXZcclxuICAgIGZ1bmN0aW9uICBzZXRTdHlsZShjbGFzc05hbWUsIHN0eWxlVmFsdWUpIHtcclxuICAgICAgICB1cGRhdGVTbGlkZU1hcmdpbihzdHlsZVZhbHVlKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZU1hcmdpbigpe1xyXG4gICAgICAgIGNvbnN0IG1pbkdhcEJldHdlZW5TbGlkZXMgPSAxMFxyXG4gICAgICAgIGNvbnN0IHNsaWRlclZpc2libGVXaWR0aCA9IGF1dG9HYXBTbGlkZXJNYWluQ29udGFpbmVyLmN1cnJlbnQub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgY29uc3QgZWFjaFNsaWRlV2lkdGggPSBjaGlsZFNsaWRlckNhcmRSZWYuY3VycmVudC5vZmZzZXRXaWR0aCttaW5HYXBCZXR3ZWVuU2xpZGVzXHJcbiAgICAgICAgY29uc3Qgc2xpZGVzUGVyVmlzaWJsZVdpZHRoID0gc2xpZGVyVmlzaWJsZVdpZHRoLyhlYWNoU2xpZGVXaWR0aCk7XHJcbiAgICAgICAgY29uc3QgbWFyZ2luVG9TZXRJblBlcmNlbnRhZ2UgPSBzbGlkZXNQZXJWaXNpYmxlV2lkdGggLSBNYXRoLmZsb29yKHNsaWRlc1BlclZpc2libGVXaWR0aClcclxuICAgICAgICBjb25zdCBtYXJnaW5Ub1NldEluUHggPSAoKG1hcmdpblRvU2V0SW5QZXJjZW50YWdlKSplYWNoU2xpZGVXaWR0aClcclxuICAgICAgICBjb25zdCBtYXJnaW5QZXJTbGlkZSA9IChtYXJnaW5Ub1NldEluUHgvKE1hdGguY2VpbChzbGlkZXNQZXJWaXNpYmxlV2lkdGgpLTEpKSttaW5HYXBCZXR3ZWVuU2xpZGVzXHJcbiAgICAgICAgc2V0U3R5bGUoJ2Rpdl9fc2xpZGVyQ2FyZC0tc2xpZGVDYWx1bGF0ZScsbWFyZ2luUGVyU2xpZGUpXHJcbiAgICB9XHJcbiAgICAvLyBVc2VlZmZlY3QgZm9yIHNsaWRlciBuZXh0IGFuZCBwcmV2IGJ1dHRvblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgLy8gRXhlY3V0ZSB3aGVuIG1vdW50aW5nXHJcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSByZXF1aXJlZCB2YWx1ZXMgaW4gcGFydGljdWxhciBmdW5jdGlvblxyXG4gICAgICAgIGNhbGN1bGF0ZU1hcmdpbigpXHJcbiAgICAgICAgaW5pdFZhbHVlcygpXHJcbiAgICAgICAgLy8gZGlzcGxheUNvbnRlbnQoaW5pdHZhbHVlcylcclxuICAgICAgICBhdXRvU2xpZGVyTW92ZSgyMDAwLHRydWUpXHJcbiAgICAgICAgLy8gc2xpZGVyU3R5bGUudHJhbnNmb3JtKCc0MDBweCcpXHJcbiAgICAgICAgLy8gSGFuZGxlIGNsaWNrIGV2ZW50IGZvciBib3RoIGJ1dHRvbnNcclxuICAgICAgICBuZXh0QnV0dG9uLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT50aHJvdHRsZShjbGlja0hhbmRsZXIsJ25leHQnKSlcclxuICAgICAgICBwcmV2QnV0dG9uLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT50aHJvdHRsZShjbGlja0hhbmRsZXIsJ3ByZXYnKSlcclxuICAgICAgICBhdXRvR2FwU2xpZGVyTWFpbkNvbnRhaW5lci5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCgpPT5jbGVhckF1dG9TbGlkZXJNb3ZlKHRpbWVySWQpKVxyXG4gICAgICAgIGF1dG9HYXBTbGlkZXJNYWluQ29udGFpbmVyLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsKCk9PmF1dG9TbGlkZXJNb3ZlKDEwMDAsdHJ1ZSkgKVxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCgpPT57XHJcbiAgICAgICAgICAgIGRlYm91bmNlKCgpPT57XHJcbiAgICAgICAgICAgICAgICBjYWxjdWxhdGVNYXJnaW4oKTtcclxuICAgICAgICAgICAgICAgIGluaXRWYWx1ZXMoKTtcclxuICAgICAgICAgICAgICAgIHJlc2V0U2xpZGVyUG9zaXRpb24oKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuICgpPT57XHJcbiAgICAgICAgICAgIC8vIEV4ZWN1dGUgd2hlbiB1bm1vdW50aW5nIChjbGVhbnVwKVxyXG4gICAgICAgICAgICBuZXh0QnV0dG9uLmN1cnJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT50aHJvdHRsZShjbGlja0hhbmRsZXIsJ25leHQnKSlcclxuICAgICAgICAgICAgcHJldkJ1dHRvbi5jdXJyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+dGhyb3R0bGUoY2xpY2tIYW5kbGVyLCdwcmV2JykpICAgICAgIFxyXG4gICAgICAgICAgICBhdXRvR2FwU2xpZGVyTWFpbkNvbnRhaW5lci5jdXJyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCgpPT5jbGVhckF1dG9TbGlkZXJNb3ZlKHRpbWVySWQpKVxyXG4gICAgICAgICAgICBhdXRvR2FwU2xpZGVyTWFpbkNvbnRhaW5lci5jdXJyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCgpPT5hdXRvU2xpZGVyTW92ZSgxMDAwLHRydWUpIClcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsKCk9PntcclxuICAgICAgICAgICAgICAgIGRlYm91bmNlKCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsY3VsYXRlTWFyZ2luKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdFZhbHVlcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc2V0U2xpZGVyUG9zaXRpb24oKTtcclxuICAgICAgICAgICAgICAgIH0pOyAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9LFtdKVxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ01hcmdpbiB1cGRhdGVkJytzbGlkZU1hcmdpbik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+ZGl2Q2FyZHNDb250YWluZXJUb3RhbFdpZHRoID0gZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aCwxMDApXHJcbiAgICB9LFtzbGlkZU1hcmdpbl0pXHJcbiAgICBsZXQgdG91Y2hTdGFydFBvcyA9MDtcclxuICAgIGNvbnN0IHRvdWNoU3RhcnRIYW5kbGVyID0gKGUpPT57XHJcbiAgICAgICAgdG91Y2hTdGFydFBvcz1lLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFg7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYKSAgIFxyXG4gICAgfVxyXG4gICAgY29uc3QgdG91Y2hFbmRIYW5kbGVyPShlKT0+e1xyXG4gICAgICAgIGxldCB0b3VjaEVuZFBvcyA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WDtcclxuICAgICAgICBpZiAodG91Y2hFbmRQb3M9PT10b3VjaFN0YXJ0UG9zKSByZXR1cm5cclxuICAgICAgICBpZiAodG91Y2hFbmRQb3MtdG91Y2hTdGFydFBvcz4wKSBjbGlja0hhbmRsZXIoJ3ByZXYnKVxyXG4gICAgICAgIGVsc2UgY2xpY2tIYW5kbGVyKCduZXh0JylcclxuICAgIH1cclxuICAgIGNvbnN0IGRyYWdIYW5kbGVyID0gKGUpID0+e1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgfVxyXG4gICAgY29uc3Qgb25JbWFnZUxvYWQgPSAoaW1hZ2UsaXNJbWdSZWFkeSkgPT57XHJcbiAgICAgICAgaWYgKGlzSW1nUmVhZHkpe1xyXG4gICAgICAgICAgICBpbWFnZS5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkaW5nJylcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgaW1hZ2UuY2xhc3NMaXN0LmFkZCgnbG9hZGluZycpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLy8gdXNlRWZmZWN0IGZvciB0b3VjaCBjYXBhYmlsaXR5XHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBsZXQgaW1hZ2VzID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbWFnZUhvbGRlcicpKVxyXG4gICAgICAgIGltYWdlcy5mb3JFYWNoKChpbWFnZSk9PntcclxuICAgICAgICAgICAgb25JbWFnZUxvYWQoaW1hZ2UsZmFsc2UpXHJcbiAgICAgICAgICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsKGUpPT5kcmFnSGFuZGxlcihlKSApXHJcbiAgICAgICAgICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLChlKT0+b25JbWFnZUxvYWQoaW1hZ2UsdHJ1ZSkpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhdXRvR2FwU2xpZGVyTWFpbkNvbnRhaW5lci5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLChlKT0+dG91Y2hTdGFydEhhbmRsZXIoZSkse3Bhc3NpdmU6dHJ1ZX0pXHJcbiAgICAgICAgYXV0b0dhcFNsaWRlck1haW5Db250YWluZXIuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsKGUpPT50b3VjaEVuZEhhbmRsZXIoZSkse3Bhc3NpdmU6dHJ1ZX0gKVxyXG4gICAgICAgIGF1dG9HYXBTbGlkZXJNYWluQ29udGFpbmVyLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywoZSk9Pntjb25zb2xlLmxvZyhlKX0se3Bhc3NpdmU6dHJ1ZX0pXHJcbiAgICAgICAgLy8gY2hpbGRTbGlkZXJDYXJkUmVmLmN1cnJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywoZSk9PmRyYWdIYW5kbGVyKGUpIClcclxuICAgICAgICAvLyBhdXRvR2FwU2xpZGVyTWFpbkNvbnRhaW5lci5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsKGUpPT50b3VjaFN0YXJ0SGFuZGxlcihlKSApXHJcbiAgICAgICAgcmV0dXJuICgpPT4ge1xyXG4gICAgICAgICAgICBhdXRvR2FwU2xpZGVyTWFpbkNvbnRhaW5lci5jdXJyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLChlKT0+dG91Y2hTdGFydEhhbmRsZXIoZSkgKVxyXG4gICAgICAgICAgICBhdXRvR2FwU2xpZGVyTWFpbkNvbnRhaW5lci5jdXJyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywoZSk9PnRvdWNoRW5kSGFuZGxlcihlKSx7cGFzc2l2ZTp0cnVlfSlcclxuICAgICAgICAgICAgaW1hZ2VzLmZvckVhY2goKGltYWdlKT0+e1xyXG4gICAgICAgICAgICAgICAgaW1hZ2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywoZSk9PmRyYWdIYW5kbGVyKGUpIClcclxuICAgICAgICAgICAgICAgIGltYWdlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLChlKT0+b25JbWFnZUxvYWQoZSkpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC8vIGF1dG9HYXBTbGlkZXJNYWluQ29udGFpbmVyLmN1cnJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywoZSk9PnRvdWNoU3RhcnRIYW5kbGVyKGUpKVxyXG4gICAgICAgICAgICAvLyB0aHJvdHRsZSh0b3VjaFN0YXJ0SGFuZGxlciwyMDAwLGUpIFxyXG4gICAgICAgIH1cclxuICAgIH0sW10pXHJcbiAgICBjb25zdCBbcHJldkJ1dHRvbkRpc3BsYXksc2hvd1ByZXZCdXR0b25dPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFtuZXh0QnV0dG9uRGlzcGxheSxzaG93TmV4dEJ1dHRvbl09IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgLy8gY29uc3QgbGVmdFN0eWxlID0ge2Rpc3BsYXk6cHJldkJ1dHRvbkRpc3BsYXk/XCJpbmxpbmUtYmxvY2tcIjpcIm5vbmVcIn1cclxuICAgIC8vIGNvbnN0IHJpZ2h0U3R5bGUgPSB7ZGlzcGxheTpuZXh0QnV0dG9uRGlzcGxheT9cImlubGluZS1idHJhbnNsYXRlWCh0cmFuc2xhdGVWYWx1ZSlsb2NrXCI6XCJub25lXCJ9XHJcbiAgICAvLyBjb25zdCBzbGlkZXJTdHlsZSA9IHt0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7dHJhbnNsYXRlVmFsdWUrJ3B4J30pYCB8fCAnMCd9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPGRpdiBpZD1cInZpc2libGVEaXZcIiByZWY9e2F1dG9HYXBTbGlkZXJNYWluQ29udGFpbmVyfSAgY2xhc3NOYW1lPXtzdHlsZXMuYXV0b0dhcFNsaWRlck1haW5Db250YWluZXIgKyAnIGF1dG9HYXBNYWluQ29udGFpbmVyRGl2ICd9PlxyXG4gICAgICAgICAgICA8aSByZWY9e3ByZXZCdXR0b259IHN0eWxlPXtzbGlkZXJTdHlsZXMucHJldkJ1dHRvbih7cHJldkJ1dHRvbkRpc3BsYXl9KX0gIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbisnIHByZXYgJ30+UHJldjwvaT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgIHN0eWxlPXtzbGlkZXJTdHlsZXMuZGl2Q2FyZHNDb250YWluZXIoe3RyYW5zbGF0ZVZhbHVlfSl9IHJlZj17ZGl2Q2FyZHNDb250YWluZXJ9IGNsYXNzTmFtZT17c3R5bGVzLmRpdkNhcmRzQ29udGFpbmVyKyAnIGltZ0NvbXAgJ30+XHJcbiAgICAgICAgICAgIDxTbGlkZXJDYXJkIHJlZj17Y2hpbGRTbGlkZXJDYXJkUmVmfSBpbWdBcnI9e2ltZ0Fycn0gc3R5bGVJbWc9e3NsaWRlclN0eWxlcy5zbGlkZUNhcmRhclN0eWxlKHtjYXJkTWFyZ2lufSl9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDxpIHJlZj17bmV4dEJ1dHRvbn0gc3R5bGU9e3NsaWRlclN0eWxlcy5uZXh0QnV0dG9uKHtuZXh0QnV0dG9uRGlzcGxheX0pfSBjbGFzc05hbWU9e3N0eWxlcy5idXR0b24rJyBuZXh0ICd9Pk5leHQ8L2k+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHAgIGlkPXtzdHlsZXNbJ2lkZWEnXX0gPmhleTwvcD5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcbmNvbnN0IHNsaWRlclN0eWxlcyA9IHtcclxuICAgIGRpdkNhcmRzQ29udGFpbmVyOih7dHJhbnNsYXRlVmFsdWV9KT0+KHtcclxuICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7dHJhbnNsYXRlVmFsdWUrJ3B4J30pYCB8fCAnMCcsXHJcbiAgICB9KSxcclxuICAgIG5leHRCdXR0b246KHtuZXh0QnV0dG9uRGlzcGxheX0pPT4oe1xyXG4gICAgICAgIGRpc3BsYXk6bmV4dEJ1dHRvbkRpc3BsYXk/XCJpbmxpbmUtYmxvY2tcIjpcIm5vbmVcIlxyXG4gICAgfSksXHJcbiAgICBzbGlkZUNhcmRTdHlsZTooe3NsaWRlTWFyZ2lufSk9Pih7XHJcbiAgICAgICAgd2lkdGg6JzIwMHB4JyxcclxuICAgICAgICBoZWlnaHQ6JzMwMHB4JyxcclxuICAgICAgICBtYXJnaW46YDAgJHtzbGlkZU1hcmdpbi8yfXB4IDAgJHtzbGlkZU1hcmdpbi8yfXB4YFxyXG4gICAgfSksXHJcbiAgICBwcmV2QnV0dG9uOih7cHJldkJ1dHRvbkRpc3BsYXl9KT0+KHtcclxuICAgICAgICBkaXNwbGF5OnByZXZCdXR0b25EaXNwbGF5P1wiaW5saW5lLWJsb2NrXCI6XCJub25lXCJcclxuICAgIH0pXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQXV0b0dhcFNsaWRlcjtcclxuICAgLy8gc2V0VGltZW91dCgoKT0+e1xyXG4gICAgLy8gICAgIGlkPWlkKzI7XHJcbiAgICAvLyAgICAgaW1nQXJyVXBkdChbLi4uaW1nU3RhdGUsICAge1xyXG4gICAgLy8gICAgICAgICAnc3JjJzonc3RhdGljL3BlcjEuanBnJyxcclxuICAgIC8vICAgICAgICAgaWQ6aWQsXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICAgICdzcmMnOidzdGF0aWMvcGVyMi5qcGcnLFxyXG4gICAgLy8gICAgICAgICBpZDppZCsxLFxyXG4gICAgLy8gICAgIH1dKVxyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGlkKVxyXG4gICAgICAgIFxyXG4gICAgLy8gfSwxMDAwMClcclxuLy8gZWxzZSBpZihsZWZ0PiAtc2xpZGVzVG9TY3JvbGxXaWR0aCl7XHJcbi8vICAgICBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0kezB9cHgpYDtcclxuLy8gICAgIG5leHRQeFZhbHVlVG9TY3JsID0gLXNsaWRlc1RvU2Nyb2xsV2lkdGg7IFxyXG4vLyAgICAgcHJldlB4VmFsdWVUb1NjcmwgPSBzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4vLyB9XHJcbi8vIGNvbnN0IGNsaWNrSGFuZGxlciA9IChkaXJlY3Rpb24pPT57IFxyXG4vLyAgICAgY29uc3QgbGVmdCA9IGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdFxyXG4vLyAgICAgY29uc29sZS5sb2cobmV4dFB4VmFsdWVUb1NjcmwsLWRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQub2Zmc2V0V2lkdGgrc2xpZGVyVmlzaWJsZVdpZHRoKVxyXG4vLyAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ25leHQnKXtcclxuICAgICAgICBcclxuLy8gICAgICAgICBpZihuZXh0UHhWYWx1ZVRvU2NybCwtZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aCtzbGlkZXJWaXNpYmxlV2lkdGgpe1xyXG4vLyAgICAgICAgICAgICBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0kezB9cHgpYDtcclxuLy8gICAgICAgICAgICAgbmV4dFB4VmFsdWVUb1NjcmwgPSAtc2xpZGVzVG9TY3JvbGxXaWR0aDsgXHJcbi8vICAgICAgICAgICAgIHByZXZQeFZhbHVlVG9TY3JsID0gc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuLy8gICAgICAgICB9ZWxzZSBpZiAoZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aC1zbGlkZXJWaXNpYmxlV2lkdGg8IC1uZXh0UHhWYWx1ZVRvU2NybCkge1xyXG4vLyAgICAgICAgICAgICBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR7LWRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQub2Zmc2V0V2lkdGgrc2xpZGVyVmlzaWJsZVdpZHRofXB4KWBcclxuLy8gICAgICAgICAgICAgbmV4dFB4VmFsdWVUb1NjcmwgPSAtZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aCtzbGlkZXJWaXNpYmxlV2lkdGhcclxuLy8gICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgXHJcbi8vICAgICAgICAgICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHtuZXh0UHhWYWx1ZVRvU2NybH1weClgXHJcbi8vICAgICAgICAgICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc2Nyb2xsTGVmdCA9IHNsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbi8vICAgICAgICAgICAgIHByZXZQeFZhbHVlVG9TY3JsID0gcHJldlB4VmFsdWVUb1Njcmwtc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuLy8gICAgICAgICAgICAgbmV4dFB4VmFsdWVUb1NjcmwgPSBuZXh0UHhWYWx1ZVRvU2NybC1zbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4vLyAgICAgICAgIH1cclxuICAgICAgICBcclxuLy8gICAgIH1lbHNlIGlmKGRpcmVjdGlvbiA9PT0gJ3ByZXYnKXtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhwcmV2UHhWYWx1ZVRvU2NybClcclxuLy8gICAgICAgICBjb25zdCBsZWZ0ID0gZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xyXG4vLyAgICAgICAgIGlmKHByZXZQeFZhbHVlVG9TY3JsPjApe1xyXG4vLyAgICAgICAgICAgICBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0kezB9cHgpYDtcclxuLy8gICAgICAgICAgICAgbmV4dFB4VmFsdWVUb1NjcmwgPSAtc2xpZGVzVG9TY3JvbGxXaWR0aDsgXHJcbi8vICAgICAgICAgICAgIHByZXZQeFZhbHVlVG9TY3JsID0gc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuLy8gICAgICAgICB9ZWxzZXtcclxuLy8gICAgICAgICAgICAgZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zdHlsZS5jc3NUZXh0ID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgke3ByZXZQeFZhbHVlVG9TY3JsfXB4KWA7XHJcbi8vICAgICAgICAgICAgIG5leHRQeFZhbHVlVG9TY3JsID1uZXh0UHhWYWx1ZVRvU2NybCArc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuLy8gICAgICAgICAgICAgcHJldlB4VmFsdWVUb1NjcmwgPSBwcmV2UHhWYWx1ZVRvU2NybCtzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4vLyAgICAgICAgIH1cclxuICAgICAgICBcclxuLy8gICAgIH1cclxuLy8gLy8gfVxyXG4vLyBjb25zdCBsZWZ0ID0gZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xyXG4vLyBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnNjcm9sbExlZnQgPSBzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG5cclxuLy8gbGV0IGl0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjbGFzc05hbWUpO1xyXG4vLyBmb3IgKHZhciBpPTA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xyXG4vLyAgIGlmIChpKzE9PT0oaXRlbXMubGVuZ3RoKSlpdGVtc1tpXS5zdHlsZS5tYXJnaW5SaWdodCA9ICdhdXRvJ1xyXG4vLyB9XHJcblxyXG4vLyBpbml0VmFsdWVzKClcclxuLy8gYXN5bmMgZnVuY3Rpb24gIHNldFN0eWxlKGNsYXNzTmFtZSwgc3R5bGVWYWx1ZSkge1xyXG4vLyAgICAgYXdhaXQgdXBkYXRlU2xpZGVNYXJnaW4oc3R5bGVWYWx1ZSk7XHJcblxyXG4vLyAgICAgaW5pdFZhbHVlcygpXHJcbi8vIH0iXSwic291cmNlUm9vdCI6IiJ9