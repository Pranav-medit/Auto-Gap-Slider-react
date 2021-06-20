self["webpackHotUpdate_N_E"]("pages/slider",{

/***/ "./components/slickSlider.js":
/*!***********************************!*\
  !*** ./components/slickSlider.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slickSlider.module.scss */ "./components/slickSlider.module.scss");
/* harmony import */ var _slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\prana\\Documents\\VSCode\\React\\react hooks\\hook1\\components\\slickSlider.js",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();




var Img = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(_c = _s(function (_ref, childSliderCardRef) {
  _s();

  var styleImg = _ref.styleImg,
      imgArr = _ref.imgArr;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var id = 11;
  }, []); // let imageSlide = useRef(null);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: imgArr.map(function (src, index) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        ref: childSliderCardRef,
        style: styleImg,
        className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Img) + ' div div__sliderCard div__sliderCard--slideCalulate ',
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          loading: "lazy",
          style: {
            width: 'inherit',
            objectFit: 'cover',
            height: '100%'
          },
          src: src.src,
          className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().sliderImg) + ' imageHolder ',
          alt: ""
        }, src.id, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 25
        }, _this)
      }, src.id, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 21
      }, _this);
    })
  }, void 0, false);
}, "OD7bBpZva5O2jO+Puf00hKivP7c="));
_c2 = Img;

var SlickSlider = function SlickSlider() {
  _s2();

  var imgArrData = [{
    'src': 'static/s1.jpg',
    id: 1
  }, {
    'src': 'static/s2.jpg',
    id: 2
  }, {
    'src': 'static/s3.jpg',
    id: 3
  }, {
    'src': 'static/s4.jpg',
    id: 4
  }, {
    'src': 'static/s5.jpg',
    id: 5
  }, {
    'src': 'static/s6.jpg',
    id: 6
  }, {
    'src': 'static/s7.jpg',
    id: 7
  }, {
    'src': 'static/s8.jpg',
    id: 8
  }, {
    'src': 'static/s9.jpg',
    id: 9
  }, {
    'src': 'static/s10.jpg',
    id: 10
  }];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(imgArrData),
      imgArr = _useState[0],
      imgArrUpdt = _useState[1];

  var imageUpdateArr = imgArr;
  var id = 12;
  var timerId;
  var styleImg = {
    width: '200px',
    height: '300px'
  };

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),
      dummy = _useState2[0],
      du = _useState2[1]; // Each slider card


  var childSliderCardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(); // Parent of slider cards , div holding all slide cards

  var divCardsContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(); // Slider containing cards container and prev, next buttons.

  var slickSliderMainContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(); // Initialize default values

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
  }, 500);

  var debounce = lodash__WEBPACK_IMPORTED_MODULE_2___default().debounce(function (func) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    func.apply(void 0, args); // console.log('deibounc')
  }, 800);

  var resetSliderPosition = function resetSliderPosition() {
    // default slidesToScrollWidth:240px
    nextPxValueToScrl = -slidesToScrollWidth;
    prevPxValueToScrl = slidesToScrollWidth;
    divCardsContainer.current.style.cssText = "transform: translateX(-".concat(0, "px)");
    displayArrow('prev', false);
    divCardsContainerTotalWidth = divCardsContainer.current.offsetWidth;
  };

  var displayArrow = function displayArrow() {
    var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'prev';
    var toDisplay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (!toDisplay) document.getElementsByClassName(direction)[0].style.display = "none";else document.getElementsByClassName(direction)[0].style.display = "inline-block";
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

  var sliderCardsToShow = function sliderCardsToShow() {
    var numberOfSlidesPerView = 6;
    var card = document.getElementsByClassName('div div__sliderCard div__sliderCard--slideCalulate');
  };

  var clickHandler = function clickHandler(direction) {
    // If next button is clicked
    if (direction === 'next') {
      displayArrow('prev', true); // If reached end of slide return to first slide

      if (endOfSlide) {
        // Return to first slide and reset positions of scroll reference
        resetSliderPosition();
        endOfSlide = false; // ex: say divCardsContainerTotalWidth = 2360; and sliderVisibleWidth = 1336 and nextPxValueToScrl = -1440 then
        // sliderVisibleWidth is slider width which is visible to user
        // divCardsContainerTotalWidth is total width of container holding cards =  visible area+hidden area
      } else if (divCardsContainerTotalWidth - sliderVisibleWidth < -nextPxValueToScrl) {
        // If slide is about to reach last slide , last but one click of endofslide
        divCardsContainer.current.style.cssText = "transform: translateX(".concat(-divCardsContainerTotalWidth + sliderVisibleWidth, "px)"); // Update slider position reference, pass 'next' to update refrence with respect to next button click

        updateSliderPositionRef('next');
        endOfSlide = true; // updateSliderArray()
      } else {
        // If everything is right translate to next px value
        divCardsContainer.current.style.cssText = "transform: translateX(".concat(nextPxValueToScrl, "px)"); // Update slider position reference, pass 'next' to update refrence with respect to next button click

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

        divCardsContainer.current.style.cssText = "transform: translateX(".concat(prevPxValueToScrl, "px)"); // Update slider position reference, pass 'prev' to update refrence with respect to next button click

        updateSliderPositionRef('prev');
      }
    }
  };

  var initValues = function initValues() {
    endOfSlide = false; // Slider width is an outer div which shows entire slider if we set slider to be 200px wide- 
    // -width is set on this div , we need it to calculate slider visible width in which slider is visible
    // by default slider takes full viewport width.ex : 1600px

    sliderVisibleWidth = slickSliderMainContainer.current.offsetWidth; // If slider has margin (space between slider cards if sliders are touch to each other then it has no margin)- 
    // -it is required to calculate how much does slider scrolls

    var eachSlide = document.getElementsByClassName('div__sliderCard--slideCalulate')[0];
    var eachSlideMargin = window.getComputedStyle(eachSlide).marginRight.slice(0, -2); // Convert from string to number and multiply it by two because margin is applied on both sides

    eachSlideMargin = Number(eachSlideMargin); // Each slider card width is calculated by adding its own width with its own margin

    eachSlideWidth = eachSlide.offsetWidth + eachSlideMargin; // eachSlideWidth =Number(eachSlideWidth)
    // Number of slides to scroll

    slidesToScroll = 1; // Number of slides to scroll in pixels ex: if 240px

    slidesToScrollWidth = eachSlideWidth * slidesToScroll; // to calculate and track progress of left and right scroll positions

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


  function setStyle(className, styleValue) {
    var items = document.getElementsByClassName(className);

    for (var i = 0; i < items.length; i++) {
      items[i].style.margin = "0 ".concat(styleValue / 2, "px 0 ").concat(styleValue / 2, "px");
      if (i + 1 === items.length) items[i].style.marginRight = 0;
    }
  }

  function calculateMargin() {
    var minGapBetweenSlides = 10;
    var sliderVisibleWidth = slickSliderMainContainer.current.offsetWidth;
    var eachSlideWidth = childSliderCardRef.current.offsetWidth + minGapBetweenSlides;
    var slidesPerVisibleWidth = sliderVisibleWidth / eachSlideWidth;
    var marginToSetInPercentage = slidesPerVisibleWidth - Math.floor(slidesPerVisibleWidth);
    var marginToSetInPx = marginToSetInPercentage * eachSlideWidth;
    var marginPerSlide = marginToSetInPx / (Math.ceil(slidesPerVisibleWidth) - 1) + minGapBetweenSlides;
    setStyle('div__sliderCard--slideCalulate', Math.ceil(marginPerSlide));
    console.log(marginPerSlide);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    calculateMargin();
  }, []); // Useeffect for slider next and prev button

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    // Execute when mounting
    // Initialize required values in particular function
    calculateMargin();
    initValues();
    autoSliderMove(2000, true); // Capture next button by class name

    var nextBtn = document.getElementsByClassName('next')[0]; // Capture previous button by class name

    var prevBtn = document.getElementsByClassName('prev')[0]; // Handle click event for both buttons

    nextBtn.addEventListener('click', function () {
      return throttle(clickHandler, 'next');
    });
    prevBtn.addEventListener('click', function () {
      return throttle(clickHandler, 'prev');
    });
    slickSliderMainContainer.current.addEventListener('mouseenter', function () {
      return clearAutoSliderMove(timerId);
    });
    slickSliderMainContainer.current.addEventListener('mouseleave', function () {
      return autoSliderMove(1000, true);
    });
    window.addEventListener('resize', function () {
      debounce(calculateMargin);
      debounce(initValues);
    });
    return function () {
      // Execute when unmounting (cleanup)
      nextBtn.removeEventListener('click', function () {
        return throttle(clickHandler, 'next');
      });
      prevBtn.removeEventListener('click', function () {
        return throttle(clickHandler, 'prev');
      });
      slickSliderMainContainer.current.removeEventListener('mouseenter', function () {
        return clearAutoSliderMove(timerId);
      });
      slickSliderMainContainer.current.removeEventListener('mouseleave', function () {
        return autoSliderMove(1000, true);
      });
      window.addEventListener('resize', function () {
        initValues();
      });
    };
  }, []);
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
  }; // useEffect for touch capability


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var images = Array.from(document.getElementsByClassName('imageHolder'));
    images.forEach(function (image) {
      image.addEventListener('dragstart', function (e) {
        return dragHandler(e);
      });
    });
    slickSliderMainContainer.current.addEventListener('touchstart', function (e) {
      return touchStartHandler(e);
    });
    slickSliderMainContainer.current.addEventListener('touchend', function (e) {
      return touchEndHandler(e);
    }); // childSliderCardRef.current.removeEventListener('dragstart',(e)=>dragHandler(e) )
    // slickSliderMainContainer.current.addEventListener('touchmove',(e)=>touchStartHandler(e) )

    return function () {
      slickSliderMainContainer.current.removeEventListener('touchstart', function (e) {
        return touchStartHandler(e);
      });
      slickSliderMainContainer.current.removeEventListener('touchend', function (e) {
        return touchEndHandler(e);
      });
      images.forEach(function (image) {
        image.removeEventListener('dragstart', function (e) {
          return dragHandler(e);
        });
      }); // slickSliderMainContainer.current.removeEventListener('touchmove',(e)=>touchStartHandler(e))
      // throttle(touchStartHandler,2000,e) 
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    id: "visibleDiv",
    ref: slickSliderMainContainer,
    className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Cslick) + ' slickMainContainerDiv ',
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
      className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().button) + ' prev ',
      children: "Prev"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      ref: divCardsContainer,
      className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().slick) + ' imgComp ',
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Img, {
        ref: childSliderCardRef,
        imgArr: imgArr,
        styleImg: styleImg
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 337,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
      className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().button) + ' next ',
      children: "Next"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 12
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 333,
    columnNumber: 9
  }, _this);
};

_s2(SlickSlider, "UkQGg05oRtD1JGeJ6n6f9zhZBts=");

_c3 = SlickSlider;
/* harmony default export */ __webpack_exports__["default"] = (SlickSlider); // setTimeout(()=>{
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

var _c, _c2, _c3;

$RefreshReg$(_c, "Img$forwardRef");
$RefreshReg$(_c2, "Img");
$RefreshReg$(_c3, "SlickSlider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zbGlja1NsaWRlci5qcyJdLCJuYW1lcyI6WyJJbWciLCJmb3J3YXJkUmVmIiwiY2hpbGRTbGlkZXJDYXJkUmVmIiwic3R5bGVJbWciLCJpbWdBcnIiLCJ1c2VFZmZlY3QiLCJpZCIsIm1hcCIsInNyYyIsImluZGV4Iiwic3R5bGVzIiwid2lkdGgiLCJvYmplY3RGaXQiLCJoZWlnaHQiLCJTbGlja1NsaWRlciIsImltZ0FyckRhdGEiLCJ1c2VTdGF0ZSIsImltZ0FyclVwZHQiLCJpbWFnZVVwZGF0ZUFyciIsInRpbWVySWQiLCJkdW1teSIsImR1IiwidXNlUmVmIiwiZGl2Q2FyZHNDb250YWluZXIiLCJzbGlja1NsaWRlck1haW5Db250YWluZXIiLCJzbGlkZXJWaXNpYmxlV2lkdGgiLCJlYWNoU2xpZGVXaWR0aCIsInNsaWRlc1RvU2Nyb2xsIiwic2xpZGVzVG9TY3JvbGxXaWR0aCIsIm5leHRQeFZhbHVlVG9TY3JsIiwicHJldlB4VmFsdWVUb1NjcmwiLCJkaXZDYXJkc0NvbnRhaW5lclRvdGFsV2lkdGgiLCJlbmRPZlNsaWRlIiwidGhyb3R0bGUiLCJfIiwiZnVuYyIsImFyZ3MiLCJkZWJvdW5jZSIsInJlc2V0U2xpZGVyUG9zaXRpb24iLCJjdXJyZW50Iiwic3R5bGUiLCJjc3NUZXh0IiwiZGlzcGxheUFycm93Iiwib2Zmc2V0V2lkdGgiLCJkaXJlY3Rpb24iLCJ0b0Rpc3BsYXkiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJkaXNwbGF5IiwidXBkYXRlU2xpZGVyUG9zaXRpb25SZWYiLCJ1cGRhdGVyZWYiLCJ1cGRhdGVTbGlkZXJBcnJheSIsIm5ld0VsZW1lbnQiLCJjb25jYXQiLCJzbGlkZXJDYXJkc1RvU2hvdyIsIm51bWJlck9mU2xpZGVzUGVyVmlldyIsImNhcmQiLCJjbGlja0hhbmRsZXIiLCJpbml0VmFsdWVzIiwiZWFjaFNsaWRlIiwiZWFjaFNsaWRlTWFyZ2luIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIm1hcmdpblJpZ2h0Iiwic2xpY2UiLCJOdW1iZXIiLCJhdXRvU2xpZGVyTW92ZSIsInRpbWVvdXQiLCJhdXRvcGxheSIsInNldEludGVydmFsIiwiY2xlYXJBdXRvU2xpZGVyTW92ZSIsImNsZWFyVGltZW91dCIsInNldFN0eWxlIiwiY2xhc3NOYW1lIiwic3R5bGVWYWx1ZSIsIml0ZW1zIiwiaSIsImxlbmd0aCIsIm1hcmdpbiIsImNhbGN1bGF0ZU1hcmdpbiIsIm1pbkdhcEJldHdlZW5TbGlkZXMiLCJzbGlkZXNQZXJWaXNpYmxlV2lkdGgiLCJtYXJnaW5Ub1NldEluUGVyY2VudGFnZSIsIk1hdGgiLCJmbG9vciIsIm1hcmdpblRvU2V0SW5QeCIsIm1hcmdpblBlclNsaWRlIiwiY2VpbCIsImNvbnNvbGUiLCJsb2ciLCJuZXh0QnRuIiwicHJldkJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidG91Y2hTdGFydFBvcyIsInRvdWNoU3RhcnRIYW5kbGVyIiwiZSIsImNoYW5nZWRUb3VjaGVzIiwiY2xpZW50WCIsInRvdWNoRW5kSGFuZGxlciIsInRvdWNoRW5kUG9zIiwiZHJhZ0hhbmRsZXIiLCJwcmV2ZW50RGVmYXVsdCIsImltYWdlcyIsIkFycmF5IiwiZnJvbSIsImZvckVhY2giLCJpbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsR0FBRyxnQkFBR0MsaURBQVUsU0FBQyxnQkFBbUJDLGtCQUFuQixFQUF5QztBQUFBOztBQUFBLE1BQXZDQyxRQUF1QyxRQUF2Q0EsUUFBdUM7QUFBQSxNQUE5QkMsTUFBOEIsUUFBOUJBLE1BQThCO0FBRzVEQyxrREFBUyxDQUFDLFlBQUk7QUFDZCxRQUFJQyxFQUFFLEdBQUcsRUFBVDtBQUdDLEdBSlEsRUFJUCxFQUpPLENBQVQsQ0FINEQsQ0FTNUQ7O0FBQ0Esc0JBQ0k7QUFBQSxjQUNLRixNQUFN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QUE7QUFBQSxhQU5IO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBVUgsQ0EzVEQ7O0lBQU1JLFc7O01BQUFBLFc7QUE2VE4sK0RBQWVBLFdBQWYsRSxDQUNHO0FBQ0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2xpZGVyLmJiMzgzOWRlODIzZjE4YjYxN2NkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVJlZixmb3J3YXJkUmVmLCB1c2VFZmZlY3QsdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3NsaWNrU2xpZGVyLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCJcclxuXHJcbmNvbnN0IEltZyA9IGZvcndhcmRSZWYoKHtzdHlsZUltZyxpbWdBcnJ9LGNoaWxkU2xpZGVyQ2FyZFJlZikgPT57XHJcbiAgICBcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBsZXQgaWQgPSAxMTtcclxuIFxyXG5cclxuICAgIH0sW10pXHJcbiAgICBcclxuICAgIC8vIGxldCBpbWFnZVNsaWRlID0gdXNlUmVmKG51bGwpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7aW1nQXJyLm1hcCgoc3JjLGluZGV4KT0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17c3JjLmlkfSAgcmVmPXtjaGlsZFNsaWRlckNhcmRSZWZ9IHN0eWxlPXtzdHlsZUltZ30gIGNsYXNzTmFtZT17c3R5bGVzLkltZysnIGRpdiBkaXZfX3NsaWRlckNhcmQgZGl2X19zbGlkZXJDYXJkLS1zbGlkZUNhbHVsYXRlICd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGtleT17c3JjLmlkfSBsb2FkaW5nPSdsYXp5JyBzdHlsZT17e3dpZHRoOidpbmhlcml0JyxvYmplY3RGaXQ6J2NvdmVyJyxoZWlnaHQ6JzEwMCUnfX0gc3JjPXtzcmMuc3JjfSAgIGNsYXNzTmFtZT17c3R5bGVzLnNsaWRlckltZyArICcgaW1hZ2VIb2xkZXIgJ30gIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59KVxyXG5jb25zdCBTbGlja1NsaWRlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGltZ0FyckRhdGEgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3MxLmpwZycsXHJcbiAgICAgICAgICAgIGlkOjEsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczIuanBnJyxcclxuICAgICAgICAgICAgaWQ6MixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zMy5qcGcnLFxyXG4gICAgICAgICAgICBpZDozLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3M0LmpwZycsXHJcbiAgICAgICAgICAgIGlkOjQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczUuanBnJyxcclxuICAgICAgICAgICAgaWQ6NSxcclxuICAgICAgICB9LHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zNi5qcGcnLFxyXG4gICAgICAgICAgICBpZDo2LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3M3LmpwZycsXHJcbiAgICAgICAgICAgIGlkOjcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczguanBnJyxcclxuICAgICAgICAgICAgaWQ6OCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zOS5qcGcnLFxyXG4gICAgICAgICAgICBpZDo5LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3MxMC5qcGcnLFxyXG4gICAgICAgICAgICBpZDoxMCxcclxuICAgICAgICB9LFxyXG4gICAgXHJcbiAgICBdXHJcbiAgICBjb25zdCBbaW1nQXJyLGltZ0FyclVwZHRdID0gdXNlU3RhdGUoaW1nQXJyRGF0YSlcclxuICAgIGxldCBpbWFnZVVwZGF0ZUFycj1pbWdBcnI7XHJcbiAgICBsZXQgaWQgPSAxMjtcclxuICAgIGxldCB0aW1lcklkO1xyXG4gICAgY29uc3Qgc3R5bGVJbWcgPSB7XHJcbiAgICAgICAgd2lkdGg6JzIwMHB4JyxcclxuICAgICAgICBoZWlnaHQ6JzMwMHB4J1xyXG4gICAgfTtcclxuICAgIGxldCBbZHVtbXksZHVdID0gdXNlU3RhdGUoKTtcclxuICAgIC8vIEVhY2ggc2xpZGVyIGNhcmRcclxuICAgIGNvbnN0IGNoaWxkU2xpZGVyQ2FyZFJlZiA9IHVzZVJlZigpO1xyXG4gICAgLy8gUGFyZW50IG9mIHNsaWRlciBjYXJkcyAsIGRpdiBob2xkaW5nIGFsbCBzbGlkZSBjYXJkc1xyXG4gICAgY29uc3QgZGl2Q2FyZHNDb250YWluZXIgPSB1c2VSZWYoKTtcclxuICAgIC8vIFNsaWRlciBjb250YWluaW5nIGNhcmRzIGNvbnRhaW5lciBhbmQgcHJldiwgbmV4dCBidXR0b25zLlxyXG4gICAgY29uc3Qgc2xpY2tTbGlkZXJNYWluQ29udGFpbmVyID0gdXNlUmVmKCk7XHJcbiAgICAvLyBJbml0aWFsaXplIGRlZmF1bHQgdmFsdWVzXHJcbiAgICBsZXQgc2xpZGVyVmlzaWJsZVdpZHRoPTA7XHJcbiAgICBsZXQgZWFjaFNsaWRlV2lkdGggPSAwO1xyXG4gICAgbGV0IHNsaWRlc1RvU2Nyb2xsID0gMDtcclxuICAgIGxldCBzbGlkZXNUb1Njcm9sbFdpZHRoPTA7XHJcbiAgICBsZXQgbmV4dFB4VmFsdWVUb1NjcmwgPSAwOyBcclxuICAgIGxldCBwcmV2UHhWYWx1ZVRvU2NybCA9IDA7XHJcbiAgICBsZXQgZGl2Q2FyZHNDb250YWluZXJUb3RhbFdpZHRoPTA7XHJcblxyXG4gICAgLy8gRGV0ZWN0IGlmIHdlIHJlYWNoZWQgZW5kIG9mIHRoZSBzbGlkZXNcclxuICAgIGxldCBlbmRPZlNsaWRlID0gZmFsc2VcclxuICAgIC8vIExvYWRhc2ggdGhyb3R0bGVyIHRvIHRocm90dGxlIHJlc2l6ZSBhbmQgaWYgdXNlciBjbGlja3MgYnV0dG9uIG1hbnkgdGltZXMgXHJcbiAgICBsZXQgdGhyb3R0bGUgPSBfLnRocm90dGxlKChmdW5jLC4uLmFyZ3MpPT4ge1xyXG4gICAgICAgIGZ1bmMoLi4uYXJncylcclxuICAgIH0sIDUwMCk7XHJcbiAgICBsZXQgZGVib3VuY2UgPSBfLmRlYm91bmNlKChmdW5jLC4uLmFyZ3MpPT4ge1xyXG4gICAgICAgIGZ1bmMoLi4uYXJncylcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnZGVpYm91bmMnKVxyXG4gICAgfSwgODAwKTtcclxuICAgIGNvbnN0IHJlc2V0U2xpZGVyUG9zaXRpb24gPSAoKSA9PntcclxuICAgICAgICAvLyBkZWZhdWx0IHNsaWRlc1RvU2Nyb2xsV2lkdGg6MjQwcHhcclxuICAgICAgICBuZXh0UHhWYWx1ZVRvU2NybCA9IC1zbGlkZXNUb1Njcm9sbFdpZHRoOyBcclxuICAgICAgICBwcmV2UHhWYWx1ZVRvU2NybCA9IHNsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbiAgICAgICAgZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zdHlsZS5jc3NUZXh0ID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtJHswfXB4KWA7XHJcbiAgICAgICAgZGlzcGxheUFycm93KCdwcmV2JyxmYWxzZSlcclxuICAgICAgICBkaXZDYXJkc0NvbnRhaW5lclRvdGFsV2lkdGggPSBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoXHJcbiAgICB9XHJcbiAgICBjb25zdCBkaXNwbGF5QXJyb3c9KGRpcmVjdGlvbj0ncHJldicsdG9EaXNwbGF5PXRydWUpPT57XHJcbiAgICAgICAgaWYgICghdG9EaXNwbGF5KWRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoZGlyZWN0aW9uKVswXS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiXHJcbiAgICAgICAgZWxzZSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGRpcmVjdGlvbilbMF0uc3R5bGUuZGlzcGxheT1cImlubGluZS1ibG9ja1wiXHJcbiAgICB9XHJcbiAgICBjb25zdCB1cGRhdGVTbGlkZXJQb3NpdGlvblJlZiA9ICh1cGRhdGVyZWYpID0+e1xyXG4gICAgICAgIC8vIHRyYW5zbGF0ZVgoMCkgLT4gaW5pdGlhbCBwb3NpdGlvbiwgc3RhcnRpbmcgcG9zaXRpb25cclxuICAgICAgICAvLyB0cmFuc2xhdGVYKC0yNDBweCkgLT4gbW92ZXMgc2xpZGUgaW4gLT4gZGlyZWN0aW9uIGJ5IDI0MHB4KGVhY2ggc2xpZGUgd2lkdGggYnkgZGVmYXVsdClcclxuICAgICAgICBpZiAodXBkYXRlcmVmID09PSAnbmV4dCcpe1xyXG4gICAgICAgICAgICAvLyBtaW51cyBwb3NpdGlvbiBnb2VzIC0+IGRpcmVjdGlvbiBvbiB0cmFuc2xhdGVcclxuICAgICAgICAgICAgLy8gZXg6IHByZXZQeFZhbHVlVG9TY3JsPTI0MCxuZXh0UHhWYWx1ZVRvU2NybD0tMjQwICBhbmQgc2xpZGVzVG9TY3JvbGxXaWR0aD0yNDBcclxuICAgICAgICAgICAgcHJldlB4VmFsdWVUb1NjcmwgPSBwcmV2UHhWYWx1ZVRvU2NybC1zbGlkZXNUb1Njcm9sbFdpZHRoOyBcclxuICAgICAgICAgICAgLy8gZmlyc3QtdGltZTpwcmV2UHhWYWx1ZVRvU2NybDowXHJcbiAgICAgICAgICAgIC8vIHNlY29uZC10aW1lOnByZXZQeFZhbHVlVG9TY3JsOi0yNDBcclxuICAgICAgICAgICAgbmV4dFB4VmFsdWVUb1NjcmwgPSBuZXh0UHhWYWx1ZVRvU2NybC1zbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4gICAgICAgICAgICAvLyBmaXJzdC10aW1lOm5leHRQeFZhbHVlVG9TY3JsOi00ODBcclxuICAgICAgICAgICAgLy8gc2Vjb25kLXRpbWU6bmV4dFB4VmFsdWVUb1Njcmw6LTcyMFxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAvLyBleDogcHJldlB4VmFsdWVUb1Njcmw9LTI0MCxuZXh0UHhWYWx1ZVRvU2NybD0tNzIwICBhbmQgc2xpZGVzVG9TY3JvbGxXaWR0aD0yNDBcclxuICAgICAgICAgICAgbmV4dFB4VmFsdWVUb1NjcmwgPW5leHRQeFZhbHVlVG9TY3JsICtzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4gICAgICAgICAgICAvLyBmaXJzdC10aW1lOnByZXZQeFZhbHVlVG9TY3JsOjQ4MFxyXG4gICAgICAgICAgICAvLyBzZWNvbmQtdGltZTpwcmV2UHhWYWx1ZVRvU2NybDo2MjBcclxuICAgICAgICAgICAgcHJldlB4VmFsdWVUb1NjcmwgPSBwcmV2UHhWYWx1ZVRvU2NybCtzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4gICAgICAgICAgICAvLyBmaXJzdC10aW1lOm5leHRQeFZhbHVlVG9TY3JsOjBcclxuICAgICAgICAgICAgLy8gc2Vjb25kLXRpbWU6bmV4dFB4VmFsdWVUb1Njcmw6MjQwXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgdXBkYXRlU2xpZGVyQXJyYXkgPSAoKSA9PntcclxuICAgICAgICBjb25zdCBuZXdFbGVtZW50ID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAnc3JjJzonc3RhdGljL3BlcjEuanBnJyxcclxuICAgICAgICAgICAgICAgIGlkOmlkLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAnc3JjJzonc3RhdGljL3BlcjIuanBnJyxcclxuICAgICAgICAgICAgICAgIGlkOmlkKzFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgICAvLyBpbWdBcnIucHVzaCguLi5uZXdFbGVtZW50KVxyXG4gICAgICAgIGltYWdlVXBkYXRlQXJyID0gIGltYWdlVXBkYXRlQXJyLmNvbmNhdChuZXdFbGVtZW50KVxyXG4gICAgICAgIGltZ0FyclVwZHQoaW1hZ2VVcGRhdGVBcnIgKTtcclxuICAgICAgICBkaXZDYXJkc0NvbnRhaW5lclRvdGFsV2lkdGggPSBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoXHJcbiAgICAgICAgaWQgPSBpZCsyO1xyXG4gICAgICAgIC8vIC8vIGNvbnNvbGUubG9nKGltZ0FyckRhdGEpXHJcbiAgICAgICAgLy8gY2xpY2tIYW5kbGVyKCduZXh0JylcclxuICAgIH1cclxuICAgIGNvbnN0IHNsaWRlckNhcmRzVG9TaG93ID0gKCkgPT57XHJcbiAgICAgICAgY29uc3QgbnVtYmVyT2ZTbGlkZXNQZXJWaWV3ID0gNjtcclxuICAgICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGl2IGRpdl9fc2xpZGVyQ2FyZCBkaXZfX3NsaWRlckNhcmQtLXNsaWRlQ2FsdWxhdGUnKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGNsaWNrSGFuZGxlciA9IChkaXJlY3Rpb24pPT57IFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIElmIG5leHQgYnV0dG9uIGlzIGNsaWNrZWRcclxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAnbmV4dCcpe1xyXG4gICAgICAgICAgICBkaXNwbGF5QXJyb3coJ3ByZXYnLHRydWUpXHJcbiAgICAgICAgICAgIC8vIElmIHJlYWNoZWQgZW5kIG9mIHNsaWRlIHJldHVybiB0byBmaXJzdCBzbGlkZVxyXG4gICAgICAgICAgICBpZihlbmRPZlNsaWRlKXsgIFxyXG4gICAgICAgICAgICAgICAgLy8gUmV0dXJuIHRvIGZpcnN0IHNsaWRlIGFuZCByZXNldCBwb3NpdGlvbnMgb2Ygc2Nyb2xsIHJlZmVyZW5jZVxyXG4gICAgICAgICAgICAgICAgcmVzZXRTbGlkZXJQb3NpdGlvbigpXHJcbiAgICAgICAgICAgICAgICBlbmRPZlNsaWRlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIC8vIGV4OiBzYXkgZGl2Q2FyZHNDb250YWluZXJUb3RhbFdpZHRoID0gMjM2MDsgYW5kIHNsaWRlclZpc2libGVXaWR0aCA9IDEzMzYgYW5kIG5leHRQeFZhbHVlVG9TY3JsID0gLTE0NDAgdGhlblxyXG4gICAgICAgICAgICAgICAgLy8gc2xpZGVyVmlzaWJsZVdpZHRoIGlzIHNsaWRlciB3aWR0aCB3aGljaCBpcyB2aXNpYmxlIHRvIHVzZXJcclxuICAgICAgICAgICAgICAgIC8vIGRpdkNhcmRzQ29udGFpbmVyVG90YWxXaWR0aCBpcyB0b3RhbCB3aWR0aCBvZiBjb250YWluZXIgaG9sZGluZyBjYXJkcyA9ICB2aXNpYmxlIGFyZWEraGlkZGVuIGFyZWFcclxuICAgICAgICAgICAgfWVsc2UgaWYgKChkaXZDYXJkc0NvbnRhaW5lclRvdGFsV2lkdGgtc2xpZGVyVmlzaWJsZVdpZHRoKTwgLW5leHRQeFZhbHVlVG9TY3JsKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBJZiBzbGlkZSBpcyBhYm91dCB0byByZWFjaCBsYXN0IHNsaWRlICwgbGFzdCBidXQgb25lIGNsaWNrIG9mIGVuZG9mc2xpZGVcclxuICAgICAgICAgICAgICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHstZGl2Q2FyZHNDb250YWluZXJUb3RhbFdpZHRoK3NsaWRlclZpc2libGVXaWR0aH1weClgXHJcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgc2xpZGVyIHBvc2l0aW9uIHJlZmVyZW5jZSwgcGFzcyAnbmV4dCcgdG8gdXBkYXRlIHJlZnJlbmNlIHdpdGggcmVzcGVjdCB0byBuZXh0IGJ1dHRvbiBjbGlja1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlU2xpZGVyUG9zaXRpb25SZWYoJ25leHQnKVxyXG4gICAgICAgICAgICAgICAgZW5kT2ZTbGlkZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIC8vIHVwZGF0ZVNsaWRlckFycmF5KClcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAvLyBJZiBldmVyeXRoaW5nIGlzIHJpZ2h0IHRyYW5zbGF0ZSB0byBuZXh0IHB4IHZhbHVlXHJcbiAgICAgICAgICAgICAgICBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR7bmV4dFB4VmFsdWVUb1Njcmx9cHgpYFxyXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIHNsaWRlciBwb3NpdGlvbiByZWZlcmVuY2UsIHBhc3MgJ25leHQnIHRvIHVwZGF0ZSByZWZyZW5jZSB3aXRoIHJlc3BlY3QgdG8gbmV4dCBidXR0b24gY2xpY2tcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVNsaWRlclBvc2l0aW9uUmVmKCduZXh0JylcclxuICAgICAgICAgICAgICAgIGVuZE9mU2xpZGUgPSBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2UgaWYoZGlyZWN0aW9uID09PSAncHJldicpe1xyXG4gICAgICAgICAgICAvLyBFbmQgb2Ygc2xpZGUgY2Fubm90IGJlIHJlYWNoZWQgYnkgY2xpY2tpbmcgcHJldmlvdXMgYnV0dG9uXHJcbiAgICAgICAgICAgIGVuZE9mU2xpZGUgPSBmYWxzZVxyXG4gICAgICAgICAgICBpZihwcmV2UHhWYWx1ZVRvU2NybD4wKXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlBcnJvdygncHJldicsZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAvLyBJZiBzbGlkZXIgaXMgb3ZlciBsZWZ0IHJldHVybiB0byBmaXJzdCBzbGlkZSBhbmQgcmVzZXQgcG9zaXRpb25zIG9mIHNjcm9sbCByZWZlcmVuY2VcclxuICAgICAgICAgICAgICAgIC8vIGV4OiBzYXkgYnkgZGVmYXVsdCByZWZlcmVuY2UgcHJldlB4VmFsdWVUb1NjcmwgaXMgc2V0IHRvIDI0MHB4IGhlbmNlIHRoaXMgaXMgZXhlY3V0ZWRcclxuICAgICAgICAgICAgICAgIHJlc2V0U2xpZGVyUG9zaXRpb24oKVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlBcnJvdygncHJldicsdHJ1ZSlcclxuICAgICAgICAgICAgICAgIC8vIElmIGV2ZXJ5dGhpbmcgaXMgcmlnaHQgdHJhbnNsYXRlIHRvIHByZXYgcHggdmFsdWVcclxuICAgICAgICAgICAgICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHtwcmV2UHhWYWx1ZVRvU2NybH1weClgO1xyXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIHNsaWRlciBwb3NpdGlvbiByZWZlcmVuY2UsIHBhc3MgJ3ByZXYnIHRvIHVwZGF0ZSByZWZyZW5jZSB3aXRoIHJlc3BlY3QgdG8gbmV4dCBidXR0b24gY2xpY2tcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVNsaWRlclBvc2l0aW9uUmVmKCdwcmV2JylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgaW5pdFZhbHVlcyA9KCkgPT57XHJcbiAgICAgICAgZW5kT2ZTbGlkZSA9IGZhbHNlXHJcbiAgICAgICAgLy8gU2xpZGVyIHdpZHRoIGlzIGFuIG91dGVyIGRpdiB3aGljaCBzaG93cyBlbnRpcmUgc2xpZGVyIGlmIHdlIHNldCBzbGlkZXIgdG8gYmUgMjAwcHggd2lkZS0gXHJcbiAgICAgICAgLy8gLXdpZHRoIGlzIHNldCBvbiB0aGlzIGRpdiAsIHdlIG5lZWQgaXQgdG8gY2FsY3VsYXRlIHNsaWRlciB2aXNpYmxlIHdpZHRoIGluIHdoaWNoIHNsaWRlciBpcyB2aXNpYmxlXHJcbiAgICAgICAgLy8gYnkgZGVmYXVsdCBzbGlkZXIgdGFrZXMgZnVsbCB2aWV3cG9ydCB3aWR0aC5leCA6IDE2MDBweFxyXG4gICAgICAgIHNsaWRlclZpc2libGVXaWR0aCA9IHNsaWNrU2xpZGVyTWFpbkNvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgICAgIC8vIElmIHNsaWRlciBoYXMgbWFyZ2luIChzcGFjZSBiZXR3ZWVuIHNsaWRlciBjYXJkcyBpZiBzbGlkZXJzIGFyZSB0b3VjaCB0byBlYWNoIG90aGVyIHRoZW4gaXQgaGFzIG5vIG1hcmdpbiktIFxyXG4gICAgICAgIC8vIC1pdCBpcyByZXF1aXJlZCB0byBjYWxjdWxhdGUgaG93IG11Y2ggZG9lcyBzbGlkZXIgc2Nyb2xsc1xyXG4gICAgICAgIGxldCBlYWNoU2xpZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkaXZfX3NsaWRlckNhcmQtLXNsaWRlQ2FsdWxhdGUnKVswXVxyXG4gICAgICAgIGxldCBlYWNoU2xpZGVNYXJnaW4gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlYWNoU2xpZGUpLm1hcmdpblJpZ2h0LnNsaWNlKDAsIC0yKTtcclxuICAgICAgICAvLyBDb252ZXJ0IGZyb20gc3RyaW5nIHRvIG51bWJlciBhbmQgbXVsdGlwbHkgaXQgYnkgdHdvIGJlY2F1c2UgbWFyZ2luIGlzIGFwcGxpZWQgb24gYm90aCBzaWRlc1xyXG4gICAgICAgIGVhY2hTbGlkZU1hcmdpbj1OdW1iZXIoZWFjaFNsaWRlTWFyZ2luKVxyXG4gICAgICAgIC8vIEVhY2ggc2xpZGVyIGNhcmQgd2lkdGggaXMgY2FsY3VsYXRlZCBieSBhZGRpbmcgaXRzIG93biB3aWR0aCB3aXRoIGl0cyBvd24gbWFyZ2luXHJcbiAgICAgICAgZWFjaFNsaWRlV2lkdGggPSBlYWNoU2xpZGUub2Zmc2V0V2lkdGgrZWFjaFNsaWRlTWFyZ2luO1xyXG4gICAgICAgIC8vIGVhY2hTbGlkZVdpZHRoID1OdW1iZXIoZWFjaFNsaWRlV2lkdGgpXHJcbiAgICAgICAgLy8gTnVtYmVyIG9mIHNsaWRlcyB0byBzY3JvbGxcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbCA9IDFcclxuICAgICAgICAvLyBOdW1iZXIgb2Ygc2xpZGVzIHRvIHNjcm9sbCBpbiBwaXhlbHMgZXg6IGlmIDI0MHB4XHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGxXaWR0aD1lYWNoU2xpZGVXaWR0aCpzbGlkZXNUb1Njcm9sbDtcclxuICAgICAgICAvLyB0byBjYWxjdWxhdGUgYW5kIHRyYWNrIHByb2dyZXNzIG9mIGxlZnQgYW5kIHJpZ2h0IHNjcm9sbCBwb3NpdGlvbnNcclxuICAgICAgICBwcmV2UHhWYWx1ZVRvU2NybCA9IHNsaWRlc1RvU2Nyb2xsV2lkdGg7IC8vIGV4OjI0MHB4XHJcbiAgICAgICAgbmV4dFB4VmFsdWVUb1NjcmwgPSAtc2xpZGVzVG9TY3JvbGxXaWR0aDsgLy8gZXg6LTI0MHB4XHJcbiAgICAgICAgLy8gQ2FyZHMgY29udGFpbmVyIHdpZHRoIGdlbmVyYWxseSBlcXVhbCB0byBlYWNoc2xpZGVyd2lkdGgqdG90YWxudW1iZXJvZnNsaWRlcyBpbmNsdWRpbmcgbWFyZ2luIGV4OiBzYXkgMjA5MHB4XHJcbiAgICAgICAgZGl2Q2FyZHNDb250YWluZXJUb3RhbFdpZHRoID0gZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aFxyXG4gICAgICAgIGRpc3BsYXlBcnJvdygncHJldicsZmFsc2UpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGF1dG9TbGlkZXJNb3ZlPSh0aW1lb3V0LGF1dG9wbGF5KT0+e1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibW91c2VsZWF2ZVwiKVxyXG4gICAgICAgIGlmKGF1dG9wbGF5KXtcclxuICAgICAgICAgICAgdGltZXJJZD1zZXRJbnRlcnZhbCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhyb3R0bGUoY2xpY2tIYW5kbGVyLCduZXh0JylcclxuICAgICAgICAgICAgfSwxMDAwMDAwMDAwMDAwMDApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgY2xlYXJBdXRvU2xpZGVyTW92ZT0odGltZXJJZCk9PntcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm1vdXNlZW50ZXJcIilcclxuICAgICAgICBpZih0aW1lcklkKXtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gdXNlRWZmZWN0IGZvciBudW1iZXIgb2Ygc2xpZGVzIHRvIHNob3cgcGVyIGRpdlxyXG4gICAgZnVuY3Rpb24gc2V0U3R5bGUoY2xhc3NOYW1lLCBzdHlsZVZhbHVlKSB7XHJcbiAgICAgICAgbGV0IGl0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjbGFzc05hbWUpO1xyXG4gICAgICAgIGZvciAodmFyIGk9MDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBpdGVtc1tpXS5zdHlsZS5tYXJnaW4gPSBgMCAke3N0eWxlVmFsdWUvMn1weCAwICR7c3R5bGVWYWx1ZS8yfXB4YFxyXG4gICAgICAgICAgaWYgKGkrMT09PShpdGVtcy5sZW5ndGgpKWl0ZW1zW2ldLnN0eWxlLm1hcmdpblJpZ2h0ID0gMFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZU1hcmdpbigpe1xyXG4gICAgICAgIGNvbnN0IG1pbkdhcEJldHdlZW5TbGlkZXMgPSAxMFxyXG4gICAgICAgIGNvbnN0IHNsaWRlclZpc2libGVXaWR0aCA9IHNsaWNrU2xpZGVyTWFpbkNvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgICAgIGNvbnN0IGVhY2hTbGlkZVdpZHRoID0gY2hpbGRTbGlkZXJDYXJkUmVmLmN1cnJlbnQub2Zmc2V0V2lkdGgrbWluR2FwQmV0d2VlblNsaWRlc1xyXG4gICAgICAgIGNvbnN0IHNsaWRlc1BlclZpc2libGVXaWR0aCA9IHNsaWRlclZpc2libGVXaWR0aC8oZWFjaFNsaWRlV2lkdGgpO1xyXG4gICAgICAgIGNvbnN0IG1hcmdpblRvU2V0SW5QZXJjZW50YWdlID0gc2xpZGVzUGVyVmlzaWJsZVdpZHRoIC0gTWF0aC5mbG9vcihzbGlkZXNQZXJWaXNpYmxlV2lkdGgpXHJcbiAgICAgICAgY29uc3QgbWFyZ2luVG9TZXRJblB4ID0gKChtYXJnaW5Ub1NldEluUGVyY2VudGFnZSkqZWFjaFNsaWRlV2lkdGgpXHJcbiAgICAgICAgY29uc3QgbWFyZ2luUGVyU2xpZGUgPSAobWFyZ2luVG9TZXRJblB4LyhNYXRoLmNlaWwoc2xpZGVzUGVyVmlzaWJsZVdpZHRoKS0xKSkrbWluR2FwQmV0d2VlblNsaWRlc1xyXG4gICAgICAgIHNldFN0eWxlKCdkaXZfX3NsaWRlckNhcmQtLXNsaWRlQ2FsdWxhdGUnLE1hdGguY2VpbChtYXJnaW5QZXJTbGlkZSkpXHJcbiAgICAgICAgY29uc29sZS5sb2coKG1hcmdpblBlclNsaWRlKSlcclxuICAgIH1cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGNhbGN1bGF0ZU1hcmdpbigpXHJcbiAgICB9LFtdKSBcclxuICAgIC8vIFVzZWVmZmVjdCBmb3Igc2xpZGVyIG5leHQgYW5kIHByZXYgYnV0dG9uXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICAvLyBFeGVjdXRlIHdoZW4gbW91bnRpbmdcclxuICAgICAgICAvLyBJbml0aWFsaXplIHJlcXVpcmVkIHZhbHVlcyBpbiBwYXJ0aWN1bGFyIGZ1bmN0aW9uXHJcbiAgICAgICAgY2FsY3VsYXRlTWFyZ2luKClcclxuICAgICAgICBpbml0VmFsdWVzKClcclxuICAgICAgICBhdXRvU2xpZGVyTW92ZSgyMDAwLHRydWUpXHJcbiAgICAgICAgLy8gQ2FwdHVyZSBuZXh0IGJ1dHRvbiBieSBjbGFzcyBuYW1lXHJcbiAgICAgICAgY29uc3QgbmV4dEJ0biAgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduZXh0JylbMF1cclxuICAgICAgICAvLyBDYXB0dXJlIHByZXZpb3VzIGJ1dHRvbiBieSBjbGFzcyBuYW1lXHJcbiAgICAgICAgY29uc3QgcHJldkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3ByZXYnKVswXVxyXG4gICAgICAgIC8vIEhhbmRsZSBjbGljayBldmVudCBmb3IgYm90aCBidXR0b25zXHJcbiAgICAgICAgbmV4dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PnRocm90dGxlKGNsaWNrSGFuZGxlciwnbmV4dCcpKVxyXG4gICAgICAgIHByZXZCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT50aHJvdHRsZShjbGlja0hhbmRsZXIsJ3ByZXYnKSlcclxuICAgICAgICBzbGlja1NsaWRlck1haW5Db250YWluZXIuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywoKT0+Y2xlYXJBdXRvU2xpZGVyTW92ZSh0aW1lcklkKSlcclxuICAgICAgICBzbGlja1NsaWRlck1haW5Db250YWluZXIuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywoKT0+YXV0b1NsaWRlck1vdmUoMTAwMCx0cnVlKSApXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsKCk9PntcclxuICAgICAgICAgICAgZGVib3VuY2UoY2FsY3VsYXRlTWFyZ2luKTtkZWJvdW5jZShpbml0VmFsdWVzKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiAoKT0+e1xyXG4gICAgICAgICAgICAvLyBFeGVjdXRlIHdoZW4gdW5tb3VudGluZyAoY2xlYW51cClcclxuICAgICAgICAgICAgbmV4dEJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PnRocm90dGxlKGNsaWNrSGFuZGxlciwnbmV4dCcpKVxyXG4gICAgICAgICAgICBwcmV2QnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+dGhyb3R0bGUoY2xpY2tIYW5kbGVyLCdwcmV2JykpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzbGlja1NsaWRlck1haW5Db250YWluZXIuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywoKT0+Y2xlYXJBdXRvU2xpZGVyTW92ZSh0aW1lcklkKSlcclxuICAgICAgICAgICAgc2xpY2tTbGlkZXJNYWluQ29udGFpbmVyLmN1cnJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsKCk9PmF1dG9TbGlkZXJNb3ZlKDEwMDAsdHJ1ZSkgKVxyXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywoKT0+e1xyXG4gICAgICAgICAgICAgICAgaW5pdFZhbHVlcygpXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0sW10pXHJcbiAgICBsZXQgdG91Y2hTdGFydFBvcyA9MDtcclxuICAgIGNvbnN0IHRvdWNoU3RhcnRIYW5kbGVyID0gKGUpPT57XHJcbiAgICAgICAgdG91Y2hTdGFydFBvcz1lLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFg7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYKSAgIFxyXG4gICAgfVxyXG4gICAgY29uc3QgdG91Y2hFbmRIYW5kbGVyPShlKT0+e1xyXG4gICAgICAgIGxldCB0b3VjaEVuZFBvcyA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WDtcclxuICAgICAgICBpZiAodG91Y2hFbmRQb3M9PT10b3VjaFN0YXJ0UG9zKSByZXR1cm5cclxuICAgICAgICBpZiAodG91Y2hFbmRQb3MtdG91Y2hTdGFydFBvcz4wKSBjbGlja0hhbmRsZXIoJ3ByZXYnKVxyXG4gICAgICAgIGVsc2UgY2xpY2tIYW5kbGVyKCduZXh0JylcclxuICAgIH1cclxuICAgIGNvbnN0IGRyYWdIYW5kbGVyID0gKGUpID0+e1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgfVxyXG4gICAgLy8gdXNlRWZmZWN0IGZvciB0b3VjaCBjYXBhYmlsaXR5XHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBsZXQgaW1hZ2VzID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbWFnZUhvbGRlcicpKVxyXG4gICAgICAgIGltYWdlcy5mb3JFYWNoKChpbWFnZSk9PntpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLChlKT0+ZHJhZ0hhbmRsZXIoZSkgKX0pXHJcbiAgICAgICAgc2xpY2tTbGlkZXJNYWluQ29udGFpbmVyLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsKGUpPT50b3VjaFN0YXJ0SGFuZGxlcihlKSlcclxuICAgICAgICBzbGlja1NsaWRlck1haW5Db250YWluZXIuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsKGUpPT50b3VjaEVuZEhhbmRsZXIoZSkgKVxyXG4gICAgICAgIC8vIGNoaWxkU2xpZGVyQ2FyZFJlZi5jdXJyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsKGUpPT5kcmFnSGFuZGxlcihlKSApXHJcbiAgICAgICAgLy8gc2xpY2tTbGlkZXJNYWluQ29udGFpbmVyLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywoZSk9PnRvdWNoU3RhcnRIYW5kbGVyKGUpIClcclxuICAgICAgICByZXR1cm4gKCk9PiB7XHJcbiAgICAgICAgICAgIHNsaWNrU2xpZGVyTWFpbkNvbnRhaW5lci5jdXJyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLChlKT0+dG91Y2hTdGFydEhhbmRsZXIoZSkgKVxyXG4gICAgICAgICAgICBzbGlja1NsaWRlck1haW5Db250YWluZXIuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsKGUpPT50b3VjaEVuZEhhbmRsZXIoZSkpXHJcbiAgICAgICAgICAgIGltYWdlcy5mb3JFYWNoKChpbWFnZSk9PntpbWFnZS5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLChlKT0+ZHJhZ0hhbmRsZXIoZSkgKX0pXHJcbiAgICAgICAgICAgIC8vIHNsaWNrU2xpZGVyTWFpbkNvbnRhaW5lci5jdXJyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsKGUpPT50b3VjaFN0YXJ0SGFuZGxlcihlKSlcclxuICAgICAgICAgICAgLy8gdGhyb3R0bGUodG91Y2hTdGFydEhhbmRsZXIsMjAwMCxlKSBcclxuICAgICAgICB9XHJcbiAgICB9LFtdKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGlkPVwidmlzaWJsZURpdlwiIHJlZj17c2xpY2tTbGlkZXJNYWluQ29udGFpbmVyfSAgY2xhc3NOYW1lPXtzdHlsZXMuQ3NsaWNrICsgJyBzbGlja01haW5Db250YWluZXJEaXYgJ30+XHJcbiAgICAgICAgICAgIDxpICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b24rJyBwcmV2ICd9PlByZXY8L2k+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IHJlZj17ZGl2Q2FyZHNDb250YWluZXJ9IGNsYXNzTmFtZT17c3R5bGVzLnNsaWNrKyAnIGltZ0NvbXAgJ30+XHJcbiAgICAgICAgICAgIDxJbWcgcmVmPXtjaGlsZFNsaWRlckNhcmRSZWZ9IGltZ0Fycj17aW1nQXJyfSBzdHlsZUltZz17c3R5bGVJbWd9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDxpICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b24rJyBuZXh0ICd9Pk5leHQ8L2k+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2xpY2tTbGlkZXI7XHJcbiAgIC8vIHNldFRpbWVvdXQoKCk9PntcclxuICAgIC8vICAgICBpZD1pZCsyO1xyXG4gICAgLy8gICAgIGltZ0FyclVwZHQoWy4uLmltZ1N0YXRlLCAgIHtcclxuICAgIC8vICAgICAgICAgJ3NyYyc6J3N0YXRpYy9wZXIxLmpwZycsXHJcbiAgICAvLyAgICAgICAgIGlkOmlkLFxyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgICAge1xyXG4gICAgLy8gICAgICAgICAnc3JjJzonc3RhdGljL3BlcjIuanBnJyxcclxuICAgIC8vICAgICAgICAgaWQ6aWQrMSxcclxuICAgIC8vICAgICB9XSlcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhpZClcclxuICAgICAgICBcclxuICAgIC8vIH0sMTAwMDApXHJcbi8vIGVsc2UgaWYobGVmdD4gLXNsaWRlc1RvU2Nyb2xsV2lkdGgpe1xyXG4vLyAgICAgZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zdHlsZS5jc3NUZXh0ID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtJHswfXB4KWA7XHJcbi8vICAgICBuZXh0UHhWYWx1ZVRvU2NybCA9IC1zbGlkZXNUb1Njcm9sbFdpZHRoOyBcclxuLy8gICAgIHByZXZQeFZhbHVlVG9TY3JsID0gc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuLy8gfVxyXG4vLyBjb25zdCBjbGlja0hhbmRsZXIgPSAoZGlyZWN0aW9uKT0+eyBcclxuLy8gICAgIGNvbnN0IGxlZnQgPSBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnRcclxuLy8gICAgIGNvbnNvbGUubG9nKG5leHRQeFZhbHVlVG9TY3JsLC1kaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoK3NsaWRlclZpc2libGVXaWR0aClcclxuLy8gICAgIGlmIChkaXJlY3Rpb24gPT09ICduZXh0Jyl7XHJcbiAgICAgICAgXHJcbi8vICAgICAgICAgaWYobmV4dFB4VmFsdWVUb1NjcmwsLWRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQub2Zmc2V0V2lkdGgrc2xpZGVyVmlzaWJsZVdpZHRoKXtcclxuLy8gICAgICAgICAgICAgZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zdHlsZS5jc3NUZXh0ID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtJHswfXB4KWA7XHJcbi8vICAgICAgICAgICAgIG5leHRQeFZhbHVlVG9TY3JsID0gLXNsaWRlc1RvU2Nyb2xsV2lkdGg7IFxyXG4vLyAgICAgICAgICAgICBwcmV2UHhWYWx1ZVRvU2NybCA9IHNsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbi8vICAgICAgICAgfWVsc2UgaWYgKGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQub2Zmc2V0V2lkdGgtc2xpZGVyVmlzaWJsZVdpZHRoPCAtbmV4dFB4VmFsdWVUb1NjcmwpIHtcclxuLy8gICAgICAgICAgICAgZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zdHlsZS5jc3NUZXh0ID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgkey1kaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoK3NsaWRlclZpc2libGVXaWR0aH1weClgXHJcbi8vICAgICAgICAgICAgIG5leHRQeFZhbHVlVG9TY3JsID0gLWRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQub2Zmc2V0V2lkdGgrc2xpZGVyVmlzaWJsZVdpZHRoXHJcbi8vICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIFxyXG4vLyAgICAgICAgICAgICBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR7bmV4dFB4VmFsdWVUb1Njcmx9cHgpYFxyXG4vLyAgICAgICAgICAgICBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnNjcm9sbExlZnQgPSBzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4vLyAgICAgICAgICAgICBwcmV2UHhWYWx1ZVRvU2NybCA9IHByZXZQeFZhbHVlVG9TY3JsLXNsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbi8vICAgICAgICAgICAgIG5leHRQeFZhbHVlVG9TY3JsID0gbmV4dFB4VmFsdWVUb1Njcmwtc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuLy8gICAgICAgICB9XHJcbiAgICAgICAgXHJcbi8vICAgICB9ZWxzZSBpZihkaXJlY3Rpb24gPT09ICdwcmV2Jyl7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2cocHJldlB4VmFsdWVUb1NjcmwpXHJcbi8vICAgICAgICAgY29uc3QgbGVmdCA9IGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcclxuLy8gICAgICAgICBpZihwcmV2UHhWYWx1ZVRvU2NybD4wKXtcclxuLy8gICAgICAgICAgICAgZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zdHlsZS5jc3NUZXh0ID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtJHswfXB4KWA7XHJcbi8vICAgICAgICAgICAgIG5leHRQeFZhbHVlVG9TY3JsID0gLXNsaWRlc1RvU2Nyb2xsV2lkdGg7IFxyXG4vLyAgICAgICAgICAgICBwcmV2UHhWYWx1ZVRvU2NybCA9IHNsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbi8vICAgICAgICAgfWVsc2V7XHJcbi8vICAgICAgICAgICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHtwcmV2UHhWYWx1ZVRvU2NybH1weClgO1xyXG4vLyAgICAgICAgICAgICBuZXh0UHhWYWx1ZVRvU2NybCA9bmV4dFB4VmFsdWVUb1NjcmwgK3NsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbi8vICAgICAgICAgICAgIHByZXZQeFZhbHVlVG9TY3JsID0gcHJldlB4VmFsdWVUb1Njcmwrc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuLy8gICAgICAgICB9XHJcbiAgICAgICAgXHJcbi8vICAgICB9XHJcbi8vIC8vIH1cclxuLy8gY29uc3QgbGVmdCA9IGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcclxuLy8gZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zY3JvbGxMZWZ0ID0gc2xpZGVzVG9TY3JvbGxXaWR0aDsiXSwic291cmNlUm9vdCI6IiJ9