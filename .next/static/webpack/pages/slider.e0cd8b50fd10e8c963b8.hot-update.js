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
  }, {
    'src': 'https://picsum.photos/200/300',
    id: 11
  }, {
    'src': 'https://picsum.photos/1200/2300',
    id: 12
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
        // displayArrow('prev',false)
        // If slider is over left return to first slide and reset positions of scroll reference
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

    eachSlideMargin = Number(eachSlideMargin) * 2; // Each slider card width is calculated by adding its own width with its own margin

    eachSlideWidth = eachSlide.offsetWidth + eachSlideMargin; // eachSlideWidth =Number(eachSlideWidth)
    // Number of slides to scroll

    slidesToScroll = 1; // Number of slides to scroll in pixels ex: if 240px

    slidesToScrollWidth = eachSlideWidth * slidesToScroll;
    slidesToScrollWidth = sliderVisibleWidth; // to calculate and track progress of left and right scroll positions

    prevPxValueToScrl = slidesToScrollWidth; // ex:240px

    nextPxValueToScrl = -slidesToScrollWidth; // ex:-240px
    // Cards container width generally equal to eachsliderwidth*totalnumberofslides including margin ex: say 2090px

    divCardsContainerTotalWidth = divCardsContainer.current.offsetWidth; // displayArrow('prev',false)
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
      if (i + 1 === items.length) items[i].style.marginRight = 'auto';
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
  } // Useeffect for slider next and prev button


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    console.log('Use ', childSliderCardRef); // Execute when mounting
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
      debounce(function () {
        calculateMargin();
        initValues();
        resetSliderPosition();
      });
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
        debounce(function () {
          calculateMargin();
          initValues();
          resetSliderPosition();
        });
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
    slickSliderMainContainer.current.addEventListener('touchstart', function (e) {
      return touchStartHandler(e);
    }, {
      passive: true
    });
    slickSliderMainContainer.current.addEventListener('touchend', function (e) {
      return touchEndHandler(e);
    }, {
      passive: true
    }); // childSliderCardRef.current.removeEventListener('dragstart',(e)=>dragHandler(e) )
    // slickSliderMainContainer.current.addEventListener('touchmove',(e)=>touchStartHandler(e) )

    return function () {
      slickSliderMainContainer.current.removeEventListener('touchstart', function (e) {
        return touchStartHandler(e);
      });
      slickSliderMainContainer.current.removeEventListener('touchend', function (e) {
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
      lineNumber: 358,
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
        lineNumber: 361,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
      className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().button) + ' next ',
      children: "Next"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 12
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 357,
    columnNumber: 9
  }, _this);
};

_s2(SlickSlider, "wNCySV8PzX3f5UnsIgIU7/d8Tdc=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zbGlja1NsaWRlci5qcyJdLCJuYW1lcyI6WyJJbWciLCJmb3J3YXJkUmVmIiwiY2hpbGRTbGlkZXJDYXJkUmVmIiwic3R5bGVJbWciLCJpbWdBcnIiLCJ1c2VFZmZlY3QiLCJpZCIsIm1hcCIsInNyYyIsImluZGV4Iiwic3R5bGVzIiwid2lkdGgiLCJvYmplY3RGaXQiLCJoZWlnaHQiLCJTbGlja1NsaWRlciIsImltZ0FyckRhdGEiLCJ1c2VTdGF0ZSIsImltZ0FyclVwZHQiLCJpbWFnZVVwZGF0ZUFyciIsInRpbWVySWQiLCJkdW1teSIsImR1IiwidXNlUmVmIiwiZGl2Q2FyZHNDb250YWluZXIiLCJzbGlja1NsaWRlck1haW5Db250YWluZXIiLCJzbGlkZXJWaXNpYmxlV2lkdGgiLCJlYWNoU2xpZGVXaWR0aCIsInNsaWRlc1RvU2Nyb2xsIiwic2xpZGVzVG9TY3JvbGxXaWR0aCIsIm5leHRQeFZhbHVlVG9TY3JsIiwicHJldlB4VmFsdWVUb1NjcmwiLCJkaXZDYXJkc0NvbnRhaW5lclRvdGFsV2lkdGgiLCJlbmRPZlNsaWRlIiwidGhyb3R0bGUiLCJfIiwiZnVuYyIsImFyZ3MiLCJkZWJvdW5jZSIsInJlc2V0U2xpZGVyUG9zaXRpb24iLCJjdXJyZW50Iiwic3R5bGUiLCJjc3NUZXh0IiwiZGlzcGxheUFycm93Iiwib2Zmc2V0V2lkdGgiLCJkaXJlY3Rpb24iLCJ0b0Rpc3BsYXkiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJkaXNwbGF5IiwidXBkYXRlU2xpZGVyUG9zaXRpb25SZWYiLCJ1cGRhdGVyZWYiLCJ1cGRhdGVTbGlkZXJBcnJheSIsIm5ld0VsZW1lbnQiLCJjb25jYXQiLCJjbGlja0hhbmRsZXIiLCJpbml0VmFsdWVzIiwiZWFjaFNsaWRlIiwiZWFjaFNsaWRlTWFyZ2luIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIm1hcmdpblJpZ2h0Iiwic2xpY2UiLCJOdW1iZXIiLCJhdXRvU2xpZGVyTW92ZSIsInRpbWVvdXQiLCJhdXRvcGxheSIsInNldEludGVydmFsIiwiY2xlYXJBdXRvU2xpZGVyTW92ZSIsImNsZWFyVGltZW91dCIsInNldFN0eWxlIiwiY2xhc3NOYW1lIiwic3R5bGVWYWx1ZSIsIml0ZW1zIiwiaSIsImxlbmd0aCIsIm1hcmdpbiIsImNhbGN1bGF0ZU1hcmdpbiIsIm1pbkdhcEJldHdlZW5TbGlkZXMiLCJzbGlkZXNQZXJWaXNpYmxlV2lkdGgiLCJtYXJnaW5Ub1NldEluUGVyY2VudGFnZSIsIk1hdGgiLCJmbG9vciIsIm1hcmdpblRvU2V0SW5QeCIsIm1hcmdpblBlclNsaWRlIiwiY2VpbCIsImNvbnNvbGUiLCJsb2ciLCJuZXh0QnRuIiwicHJldkJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidG91Y2hTdGFydFBvcyIsInRvdWNoU3RhcnRIYW5kbGVyIiwiZSIsImNoYW5nZWRUb3VjaGVzIiwiY2xpZW50WCIsInRvdWNoRW5kSGFuZGxlciIsInRvdWNoRW5kUG9zIiwiZHJhZ0hhbmRsZXIiLCJwcmV2ZW50RGVmYXVsdCIsIm9uSW1hZ2VMb2FkIiwiaW1hZ2UiLCJpc0ltZ1JlYWR5IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiaW1hZ2VzIiwiQXJyYXkiLCJmcm9tIiwiZm9yRWFjaCIsInBhc3NpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEdBQUcsZ0JBQUdDLGlEQUFVLFNBQUMsZ0JBQW1CQyxrQkFBbkIsRUFBeUM7QUFBQTs7QUFBQSxNQUF2Q0MsUUFBdUMsUUFBdkNBLFFBQXVDO0FBQUEsTUFBOUJDLE1BQThCLFFBQTlCQSxNQUE4QjtBQUc1REMsa0RBQVMsQ0FBQyxZQUFJO0FBQ2QsUUFBSUMsRUFBRSxHQUFHLEVBQVQ7QUFHQyxHQUpRLEVBSVAsRUFKTyxDQUFULENBSDRELENBUzVEOztBQUNBLHNCQUNJO0FB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QTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2xpZGVyLmUwY2Q4YjUwZmQxMGU4Yzk2M2I4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVJlZixmb3J3YXJkUmVmLCB1c2VFZmZlY3QsdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3NsaWNrU2xpZGVyLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCJcclxuXHJcbmNvbnN0IEltZyA9IGZvcndhcmRSZWYoKHtzdHlsZUltZyxpbWdBcnJ9LGNoaWxkU2xpZGVyQ2FyZFJlZikgPT57XHJcbiAgICBcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBsZXQgaWQgPSAxMTtcclxuIFxyXG5cclxuICAgIH0sW10pXHJcbiAgICBcclxuICAgIC8vIGxldCBpbWFnZVNsaWRlID0gdXNlUmVmKG51bGwpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7aW1nQXJyLm1hcCgoc3JjLGluZGV4KT0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17c3JjLmlkfSAgcmVmPXtjaGlsZFNsaWRlckNhcmRSZWZ9IHN0eWxlPXtzdHlsZUltZ30gIGNsYXNzTmFtZT17c3R5bGVzLkltZysnIGRpdiBkaXZfX3NsaWRlckNhcmQgZGl2X19zbGlkZXJDYXJkLS1zbGlkZUNhbHVsYXRlICd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGtleT17c3JjLmlkfSBsb2FkaW5nPSdsYXp5JyBzdHlsZT17e3dpZHRoOidpbmhlcml0JyxvYmplY3RGaXQ6J2NvdmVyJyxoZWlnaHQ6JzEwMCUnfX0gc3JjPXtzcmMuc3JjfSAgIGNsYXNzTmFtZT17c3R5bGVzLnNsaWRlckltZyArICcgaW1hZ2VIb2xkZXIgJ30gIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59KVxyXG5jb25zdCBTbGlja1NsaWRlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGltZ0FyckRhdGEgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3MxLmpwZycsXHJcbiAgICAgICAgICAgIGlkOjEsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczIuanBnJyxcclxuICAgICAgICAgICAgaWQ6MixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zMy5qcGcnLFxyXG4gICAgICAgICAgICBpZDozLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3M0LmpwZycsXHJcbiAgICAgICAgICAgIGlkOjQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczUuanBnJyxcclxuICAgICAgICAgICAgaWQ6NSxcclxuICAgICAgICB9LHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zNi5qcGcnLFxyXG4gICAgICAgICAgICBpZDo2LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3M3LmpwZycsXHJcbiAgICAgICAgICAgIGlkOjcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczguanBnJyxcclxuICAgICAgICAgICAgaWQ6OCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zOS5qcGcnLFxyXG4gICAgICAgICAgICBpZDo5LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3MxMC5qcGcnLFxyXG4gICAgICAgICAgICBpZDoxMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J2h0dHBzOi8vcGljc3VtLnBob3Rvcy8yMDAvMzAwJyxcclxuICAgICAgICAgICAgaWQ6MTEsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidodHRwczovL3BpY3N1bS5waG90b3MvMTIwMC8yMzAwJyxcclxuICAgICAgICAgICAgaWQ6MTIsXHJcbiAgICAgICAgfSxcclxuICAgIFxyXG4gICAgXVxyXG4gICAgY29uc3QgW2ltZ0FycixpbWdBcnJVcGR0XSA9IHVzZVN0YXRlKGltZ0FyckRhdGEpXHJcbiAgICBsZXQgaW1hZ2VVcGRhdGVBcnI9aW1nQXJyO1xyXG4gICAgbGV0IGlkID0gMTI7XHJcbiAgICBsZXQgdGltZXJJZDtcclxuICAgIGNvbnN0IHN0eWxlSW1nID0ge1xyXG4gICAgICAgIHdpZHRoOicyMDBweCcsXHJcbiAgICAgICAgaGVpZ2h0OiczMDBweCdcclxuICAgIH07XHJcbiAgICBsZXQgW2R1bW15LGR1XSA9IHVzZVN0YXRlKCk7XHJcbiAgICAvLyBFYWNoIHNsaWRlciBjYXJkXHJcbiAgICBjb25zdCBjaGlsZFNsaWRlckNhcmRSZWYgPSB1c2VSZWYoKTtcclxuICAgIC8vIFBhcmVudCBvZiBzbGlkZXIgY2FyZHMgLCBkaXYgaG9sZGluZyBhbGwgc2xpZGUgY2FyZHNcclxuICAgIGNvbnN0IGRpdkNhcmRzQ29udGFpbmVyID0gdXNlUmVmKCk7XHJcbiAgICAvLyBTbGlkZXIgY29udGFpbmluZyBjYXJkcyBjb250YWluZXIgYW5kIHByZXYsIG5leHQgYnV0dG9ucy5cclxuICAgIGNvbnN0IHNsaWNrU2xpZGVyTWFpbkNvbnRhaW5lciA9IHVzZVJlZigpO1xyXG4gICAgLy8gSW5pdGlhbGl6ZSBkZWZhdWx0IHZhbHVlc1xyXG4gICAgbGV0IHNsaWRlclZpc2libGVXaWR0aD0wO1xyXG4gICAgbGV0IGVhY2hTbGlkZVdpZHRoID0gMDtcclxuICAgIGxldCBzbGlkZXNUb1Njcm9sbCA9IDA7XHJcbiAgICBsZXQgc2xpZGVzVG9TY3JvbGxXaWR0aD0wO1xyXG4gICAgbGV0IG5leHRQeFZhbHVlVG9TY3JsID0gMDsgXHJcbiAgICBsZXQgcHJldlB4VmFsdWVUb1NjcmwgPSAwO1xyXG4gICAgbGV0IGRpdkNhcmRzQ29udGFpbmVyVG90YWxXaWR0aD0wO1xyXG5cclxuICAgIC8vIERldGVjdCBpZiB3ZSByZWFjaGVkIGVuZCBvZiB0aGUgc2xpZGVzXHJcbiAgICBsZXQgZW5kT2ZTbGlkZSA9IGZhbHNlXHJcbiAgICAvLyBMb2FkYXNoIHRocm90dGxlciB0byB0aHJvdHRsZSByZXNpemUgYW5kIGlmIHVzZXIgY2xpY2tzIGJ1dHRvbiBtYW55IHRpbWVzIFxyXG4gICAgbGV0IHRocm90dGxlID0gXy50aHJvdHRsZSgoZnVuYywuLi5hcmdzKT0+IHtcclxuICAgICAgICBmdW5jKC4uLmFyZ3MpXHJcbiAgICB9LCA1MDApO1xyXG4gICAgbGV0IGRlYm91bmNlID0gXy5kZWJvdW5jZSgoZnVuYywuLi5hcmdzKT0+IHtcclxuICAgICAgICBmdW5jKC4uLmFyZ3MpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2RlaWJvdW5jJylcclxuICAgIH0sIDgwMCk7XHJcbiAgICBjb25zdCByZXNldFNsaWRlclBvc2l0aW9uID0gKCkgPT57XHJcbiAgICAgICAgLy8gZGVmYXVsdCBzbGlkZXNUb1Njcm9sbFdpZHRoOjI0MHB4XHJcbiAgICAgICAgbmV4dFB4VmFsdWVUb1NjcmwgPSAtc2xpZGVzVG9TY3JvbGxXaWR0aDsgXHJcbiAgICAgICAgcHJldlB4VmFsdWVUb1NjcmwgPSBzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4gICAgICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLSR7MH1weClgO1xyXG4gICAgICAgIGRpc3BsYXlBcnJvdygncHJldicsZmFsc2UpXHJcbiAgICAgICAgZGl2Q2FyZHNDb250YWluZXJUb3RhbFdpZHRoID0gZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aFxyXG4gICAgfVxyXG4gICAgY29uc3QgZGlzcGxheUFycm93PShkaXJlY3Rpb249J3ByZXYnLHRvRGlzcGxheT10cnVlKT0+e1xyXG4gICAgICAgIGlmICAoIXRvRGlzcGxheSlkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGRpcmVjdGlvbilbMF0uc3R5bGUuZGlzcGxheT1cIm5vbmVcIlxyXG4gICAgICAgIGVsc2UgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShkaXJlY3Rpb24pWzBdLnN0eWxlLmRpc3BsYXk9XCJpbmxpbmUtYmxvY2tcIlxyXG4gICAgfVxyXG4gICAgY29uc3QgdXBkYXRlU2xpZGVyUG9zaXRpb25SZWYgPSAodXBkYXRlcmVmKSA9PntcclxuICAgICAgICAvLyB0cmFuc2xhdGVYKDApIC0+IGluaXRpYWwgcG9zaXRpb24sIHN0YXJ0aW5nIHBvc2l0aW9uXHJcbiAgICAgICAgLy8gdHJhbnNsYXRlWCgtMjQwcHgpIC0+IG1vdmVzIHNsaWRlIGluIC0+IGRpcmVjdGlvbiBieSAyNDBweChlYWNoIHNsaWRlIHdpZHRoIGJ5IGRlZmF1bHQpXHJcbiAgICAgICAgaWYgKHVwZGF0ZXJlZiA9PT0gJ25leHQnKXtcclxuICAgICAgICAgICAgLy8gbWludXMgcG9zaXRpb24gZ29lcyAtPiBkaXJlY3Rpb24gb24gdHJhbnNsYXRlXHJcbiAgICAgICAgICAgIC8vIGV4OiBwcmV2UHhWYWx1ZVRvU2NybD0yNDAsbmV4dFB4VmFsdWVUb1Njcmw9LTI0MCAgYW5kIHNsaWRlc1RvU2Nyb2xsV2lkdGg9MjQwXHJcbiAgICAgICAgICAgIHByZXZQeFZhbHVlVG9TY3JsID0gcHJldlB4VmFsdWVUb1Njcmwtc2xpZGVzVG9TY3JvbGxXaWR0aDsgXHJcbiAgICAgICAgICAgIC8vIGZpcnN0LXRpbWU6cHJldlB4VmFsdWVUb1Njcmw6MFxyXG4gICAgICAgICAgICAvLyBzZWNvbmQtdGltZTpwcmV2UHhWYWx1ZVRvU2NybDotMjQwXHJcbiAgICAgICAgICAgIG5leHRQeFZhbHVlVG9TY3JsID0gbmV4dFB4VmFsdWVUb1Njcmwtc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuICAgICAgICAgICAgLy8gZmlyc3QtdGltZTpuZXh0UHhWYWx1ZVRvU2NybDotNDgwXHJcbiAgICAgICAgICAgIC8vIHNlY29uZC10aW1lOm5leHRQeFZhbHVlVG9TY3JsOi03MjBcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgLy8gZXg6IHByZXZQeFZhbHVlVG9TY3JsPS0yNDAsbmV4dFB4VmFsdWVUb1Njcmw9LTcyMCAgYW5kIHNsaWRlc1RvU2Nyb2xsV2lkdGg9MjQwXHJcbiAgICAgICAgICAgIG5leHRQeFZhbHVlVG9TY3JsID1uZXh0UHhWYWx1ZVRvU2NybCArc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuICAgICAgICAgICAgLy8gZmlyc3QtdGltZTpwcmV2UHhWYWx1ZVRvU2NybDo0ODBcclxuICAgICAgICAgICAgLy8gc2Vjb25kLXRpbWU6cHJldlB4VmFsdWVUb1Njcmw6NjIwXHJcbiAgICAgICAgICAgIHByZXZQeFZhbHVlVG9TY3JsID0gcHJldlB4VmFsdWVUb1Njcmwrc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuICAgICAgICAgICAgLy8gZmlyc3QtdGltZTpuZXh0UHhWYWx1ZVRvU2NybDowXHJcbiAgICAgICAgICAgIC8vIHNlY29uZC10aW1lOm5leHRQeFZhbHVlVG9TY3JsOjI0MFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHVwZGF0ZVNsaWRlckFycmF5ID0gKCkgPT57XHJcbiAgICAgICAgY29uc3QgbmV3RWxlbWVudCA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9wZXIxLmpwZycsXHJcbiAgICAgICAgICAgICAgICBpZDppZCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9wZXIyLmpwZycsXHJcbiAgICAgICAgICAgICAgICBpZDppZCsxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgICAgLy8gaW1nQXJyLnB1c2goLi4ubmV3RWxlbWVudClcclxuICAgICAgICBpbWFnZVVwZGF0ZUFyciA9ICBpbWFnZVVwZGF0ZUFyci5jb25jYXQobmV3RWxlbWVudClcclxuICAgICAgICBpbWdBcnJVcGR0KGltYWdlVXBkYXRlQXJyICk7XHJcbiAgICAgICAgZGl2Q2FyZHNDb250YWluZXJUb3RhbFdpZHRoID0gZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aFxyXG4gICAgICAgIGlkID0gaWQrMjtcclxuICAgICAgICAvLyAvLyBjb25zb2xlLmxvZyhpbWdBcnJEYXRhKVxyXG4gICAgICAgIC8vIGNsaWNrSGFuZGxlcignbmV4dCcpXHJcbiAgICB9XHJcbiAgICBjb25zdCBjbGlja0hhbmRsZXIgPSAoZGlyZWN0aW9uKT0+eyBcclxuICAgICAgICBcclxuICAgICAgICAvLyBJZiBuZXh0IGJ1dHRvbiBpcyBjbGlja2VkXHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ25leHQnKXtcclxuICAgICAgICAgICAgZGlzcGxheUFycm93KCdwcmV2Jyx0cnVlKVxyXG4gICAgICAgICAgICAvLyBJZiByZWFjaGVkIGVuZCBvZiBzbGlkZSByZXR1cm4gdG8gZmlyc3Qgc2xpZGVcclxuICAgICAgICAgICAgaWYoZW5kT2ZTbGlkZSl7ICBcclxuICAgICAgICAgICAgICAgIC8vIFJldHVybiB0byBmaXJzdCBzbGlkZSBhbmQgcmVzZXQgcG9zaXRpb25zIG9mIHNjcm9sbCByZWZlcmVuY2VcclxuICAgICAgICAgICAgICAgIHJlc2V0U2xpZGVyUG9zaXRpb24oKVxyXG4gICAgICAgICAgICAgICAgZW5kT2ZTbGlkZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAvLyBleDogc2F5IGRpdkNhcmRzQ29udGFpbmVyVG90YWxXaWR0aCA9IDIzNjA7IGFuZCBzbGlkZXJWaXNpYmxlV2lkdGggPSAxMzM2IGFuZCBuZXh0UHhWYWx1ZVRvU2NybCA9IC0xNDQwIHRoZW5cclxuICAgICAgICAgICAgICAgIC8vIHNsaWRlclZpc2libGVXaWR0aCBpcyBzbGlkZXIgd2lkdGggd2hpY2ggaXMgdmlzaWJsZSB0byB1c2VyXHJcbiAgICAgICAgICAgICAgICAvLyBkaXZDYXJkc0NvbnRhaW5lclRvdGFsV2lkdGggaXMgdG90YWwgd2lkdGggb2YgY29udGFpbmVyIGhvbGRpbmcgY2FyZHMgPSAgdmlzaWJsZSBhcmVhK2hpZGRlbiBhcmVhXHJcbiAgICAgICAgICAgIH1lbHNlIGlmICgoZGl2Q2FyZHNDb250YWluZXJUb3RhbFdpZHRoLXNsaWRlclZpc2libGVXaWR0aCk8IC1uZXh0UHhWYWx1ZVRvU2NybCkge1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgc2xpZGUgaXMgYWJvdXQgdG8gcmVhY2ggbGFzdCBzbGlkZSAsIGxhc3QgYnV0IG9uZSBjbGljayBvZiBlbmRvZnNsaWRlXHJcbiAgICAgICAgICAgICAgICBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR7LWRpdkNhcmRzQ29udGFpbmVyVG90YWxXaWR0aCtzbGlkZXJWaXNpYmxlV2lkdGh9cHgpYFxyXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIHNsaWRlciBwb3NpdGlvbiByZWZlcmVuY2UsIHBhc3MgJ25leHQnIHRvIHVwZGF0ZSByZWZyZW5jZSB3aXRoIHJlc3BlY3QgdG8gbmV4dCBidXR0b24gY2xpY2tcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVNsaWRlclBvc2l0aW9uUmVmKCduZXh0JylcclxuICAgICAgICAgICAgICAgIGVuZE9mU2xpZGUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAvLyB1cGRhdGVTbGlkZXJBcnJheSgpXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgZXZlcnl0aGluZyBpcyByaWdodCB0cmFuc2xhdGUgdG8gbmV4dCBweCB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zdHlsZS5jc3NUZXh0ID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgke25leHRQeFZhbHVlVG9TY3JsfXB4KWBcclxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBzbGlkZXIgcG9zaXRpb24gcmVmZXJlbmNlLCBwYXNzICduZXh0JyB0byB1cGRhdGUgcmVmcmVuY2Ugd2l0aCByZXNwZWN0IHRvIG5leHQgYnV0dG9uIGNsaWNrXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVTbGlkZXJQb3NpdGlvblJlZignbmV4dCcpXHJcbiAgICAgICAgICAgICAgICBlbmRPZlNsaWRlID0gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNlIGlmKGRpcmVjdGlvbiA9PT0gJ3ByZXYnKXtcclxuICAgICAgICAgICAgLy8gRW5kIG9mIHNsaWRlIGNhbm5vdCBiZSByZWFjaGVkIGJ5IGNsaWNraW5nIHByZXZpb3VzIGJ1dHRvblxyXG4gICAgICAgICAgICBlbmRPZlNsaWRlID0gZmFsc2VcclxuICAgICAgICAgICAgaWYocHJldlB4VmFsdWVUb1Njcmw+MCl7XHJcbiAgICAgICAgICAgICAgICAvLyBkaXNwbGF5QXJyb3coJ3ByZXYnLGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgLy8gSWYgc2xpZGVyIGlzIG92ZXIgbGVmdCByZXR1cm4gdG8gZmlyc3Qgc2xpZGUgYW5kIHJlc2V0IHBvc2l0aW9ucyBvZiBzY3JvbGwgcmVmZXJlbmNlXHJcbiAgICAgICAgICAgICAgICAvLyBleDogc2F5IGJ5IGRlZmF1bHQgcmVmZXJlbmNlIHByZXZQeFZhbHVlVG9TY3JsIGlzIHNldCB0byAyNDBweCBoZW5jZSB0aGlzIGlzIGV4ZWN1dGVkXHJcbiAgICAgICAgICAgICAgICByZXNldFNsaWRlclBvc2l0aW9uKClcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5QXJyb3coJ3ByZXYnLHRydWUpXHJcbiAgICAgICAgICAgICAgICAvLyBJZiBldmVyeXRoaW5nIGlzIHJpZ2h0IHRyYW5zbGF0ZSB0byBwcmV2IHB4IHZhbHVlXHJcbiAgICAgICAgICAgICAgICBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR7cHJldlB4VmFsdWVUb1Njcmx9cHgpYDtcclxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBzbGlkZXIgcG9zaXRpb24gcmVmZXJlbmNlLCBwYXNzICdwcmV2JyB0byB1cGRhdGUgcmVmcmVuY2Ugd2l0aCByZXNwZWN0IHRvIG5leHQgYnV0dG9uIGNsaWNrXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVTbGlkZXJQb3NpdGlvblJlZigncHJldicpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGluaXRWYWx1ZXMgPSgpID0+e1xyXG4gICAgICAgIGVuZE9mU2xpZGUgPSBmYWxzZVxyXG4gICAgICAgIC8vIFNsaWRlciB3aWR0aCBpcyBhbiBvdXRlciBkaXYgd2hpY2ggc2hvd3MgZW50aXJlIHNsaWRlciBpZiB3ZSBzZXQgc2xpZGVyIHRvIGJlIDIwMHB4IHdpZGUtIFxyXG4gICAgICAgIC8vIC13aWR0aCBpcyBzZXQgb24gdGhpcyBkaXYgLCB3ZSBuZWVkIGl0IHRvIGNhbGN1bGF0ZSBzbGlkZXIgdmlzaWJsZSB3aWR0aCBpbiB3aGljaCBzbGlkZXIgaXMgdmlzaWJsZVxyXG4gICAgICAgIC8vIGJ5IGRlZmF1bHQgc2xpZGVyIHRha2VzIGZ1bGwgdmlld3BvcnQgd2lkdGguZXggOiAxNjAwcHhcclxuICAgICAgICBzbGlkZXJWaXNpYmxlV2lkdGggPSBzbGlja1NsaWRlck1haW5Db250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aDtcclxuICAgICAgICAvLyBJZiBzbGlkZXIgaGFzIG1hcmdpbiAoc3BhY2UgYmV0d2VlbiBzbGlkZXIgY2FyZHMgaWYgc2xpZGVycyBhcmUgdG91Y2ggdG8gZWFjaCBvdGhlciB0aGVuIGl0IGhhcyBubyBtYXJnaW4pLSBcclxuICAgICAgICAvLyAtaXQgaXMgcmVxdWlyZWQgdG8gY2FsY3VsYXRlIGhvdyBtdWNoIGRvZXMgc2xpZGVyIHNjcm9sbHNcclxuICAgICAgICBsZXQgZWFjaFNsaWRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGl2X19zbGlkZXJDYXJkLS1zbGlkZUNhbHVsYXRlJylbMF1cclxuICAgICAgICBsZXQgZWFjaFNsaWRlTWFyZ2luID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWFjaFNsaWRlKS5tYXJnaW5SaWdodC5zbGljZSgwLCAtMik7XHJcbiAgICAgICAgLy8gQ29udmVydCBmcm9tIHN0cmluZyB0byBudW1iZXIgYW5kIG11bHRpcGx5IGl0IGJ5IHR3byBiZWNhdXNlIG1hcmdpbiBpcyBhcHBsaWVkIG9uIGJvdGggc2lkZXNcclxuICAgICAgICBlYWNoU2xpZGVNYXJnaW49TnVtYmVyKGVhY2hTbGlkZU1hcmdpbikqMlxyXG4gICAgICAgIC8vIEVhY2ggc2xpZGVyIGNhcmQgd2lkdGggaXMgY2FsY3VsYXRlZCBieSBhZGRpbmcgaXRzIG93biB3aWR0aCB3aXRoIGl0cyBvd24gbWFyZ2luXHJcbiAgICAgICAgZWFjaFNsaWRlV2lkdGggPSBlYWNoU2xpZGUub2Zmc2V0V2lkdGgrZWFjaFNsaWRlTWFyZ2luO1xyXG4gICAgICAgIC8vIGVhY2hTbGlkZVdpZHRoID1OdW1iZXIoZWFjaFNsaWRlV2lkdGgpXHJcbiAgICAgICAgLy8gTnVtYmVyIG9mIHNsaWRlcyB0byBzY3JvbGxcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbCA9IDFcclxuICAgICAgICAvLyBOdW1iZXIgb2Ygc2xpZGVzIHRvIHNjcm9sbCBpbiBwaXhlbHMgZXg6IGlmIDI0MHB4XHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGxXaWR0aD1lYWNoU2xpZGVXaWR0aCpzbGlkZXNUb1Njcm9sbDtcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbFdpZHRoID0gc2xpZGVyVmlzaWJsZVdpZHRoO1xyXG4gICAgICAgIC8vIHRvIGNhbGN1bGF0ZSBhbmQgdHJhY2sgcHJvZ3Jlc3Mgb2YgbGVmdCBhbmQgcmlnaHQgc2Nyb2xsIHBvc2l0aW9uc1xyXG4gICAgICAgIHByZXZQeFZhbHVlVG9TY3JsID0gc2xpZGVzVG9TY3JvbGxXaWR0aDsgLy8gZXg6MjQwcHhcclxuICAgICAgICBuZXh0UHhWYWx1ZVRvU2NybCA9IC1zbGlkZXNUb1Njcm9sbFdpZHRoOyAvLyBleDotMjQwcHhcclxuICAgICAgICAvLyBDYXJkcyBjb250YWluZXIgd2lkdGggZ2VuZXJhbGx5IGVxdWFsIHRvIGVhY2hzbGlkZXJ3aWR0aCp0b3RhbG51bWJlcm9mc2xpZGVzIGluY2x1ZGluZyBtYXJnaW4gZXg6IHNheSAyMDkwcHhcclxuICAgICAgICBkaXZDYXJkc0NvbnRhaW5lclRvdGFsV2lkdGggPSBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoXHJcbiAgICAgICAgLy8gZGlzcGxheUFycm93KCdwcmV2JyxmYWxzZSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgYXV0b1NsaWRlck1vdmU9KHRpbWVvdXQsYXV0b3BsYXkpPT57XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJtb3VzZWxlYXZlXCIpXHJcbiAgICAgICAgaWYoYXV0b3BsYXkpe1xyXG4gICAgICAgICAgICB0aW1lcklkPXNldEludGVydmFsKCgpPT57XHJcbiAgICAgICAgICAgICAgICB0aHJvdHRsZShjbGlja0hhbmRsZXIsJ25leHQnKVxyXG4gICAgICAgICAgICB9LDEwMDAwMDAwMDAwMDAwMClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBjbGVhckF1dG9TbGlkZXJNb3ZlPSh0aW1lcklkKT0+e1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibW91c2VlbnRlclwiKVxyXG4gICAgICAgIGlmKHRpbWVySWQpe1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXJJZClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyB1c2VFZmZlY3QgZm9yIG51bWJlciBvZiBzbGlkZXMgdG8gc2hvdyBwZXIgZGl2XHJcbiAgICBmdW5jdGlvbiBzZXRTdHlsZShjbGFzc05hbWUsIHN0eWxlVmFsdWUpIHtcclxuICAgICAgICBsZXQgaXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgZm9yICh2YXIgaT0wOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGl0ZW1zW2ldLnN0eWxlLm1hcmdpbiA9IGAwICR7c3R5bGVWYWx1ZS8yfXB4IDAgJHtzdHlsZVZhbHVlLzJ9cHhgXHJcbiAgICAgICAgICBpZiAoaSsxPT09KGl0ZW1zLmxlbmd0aCkpaXRlbXNbaV0uc3R5bGUubWFyZ2luUmlnaHQgPSAnYXV0bydcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVNYXJnaW4oKXtcclxuICAgICAgICBjb25zdCBtaW5HYXBCZXR3ZWVuU2xpZGVzID0gMTBcclxuICAgICAgICBjb25zdCBzbGlkZXJWaXNpYmxlV2lkdGggPSBzbGlja1NsaWRlck1haW5Db250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aDtcclxuICAgICAgICBjb25zdCBlYWNoU2xpZGVXaWR0aCA9IGNoaWxkU2xpZGVyQ2FyZFJlZi5jdXJyZW50Lm9mZnNldFdpZHRoK21pbkdhcEJldHdlZW5TbGlkZXNcclxuICAgICAgICBjb25zdCBzbGlkZXNQZXJWaXNpYmxlV2lkdGggPSBzbGlkZXJWaXNpYmxlV2lkdGgvKGVhY2hTbGlkZVdpZHRoKTtcclxuICAgICAgICBjb25zdCBtYXJnaW5Ub1NldEluUGVyY2VudGFnZSA9IHNsaWRlc1BlclZpc2libGVXaWR0aCAtIE1hdGguZmxvb3Ioc2xpZGVzUGVyVmlzaWJsZVdpZHRoKVxyXG4gICAgICAgIGNvbnN0IG1hcmdpblRvU2V0SW5QeCA9ICgobWFyZ2luVG9TZXRJblBlcmNlbnRhZ2UpKmVhY2hTbGlkZVdpZHRoKVxyXG4gICAgICAgIGNvbnN0IG1hcmdpblBlclNsaWRlID0gKG1hcmdpblRvU2V0SW5QeC8oTWF0aC5jZWlsKHNsaWRlc1BlclZpc2libGVXaWR0aCktMSkpK21pbkdhcEJldHdlZW5TbGlkZXNcclxuICAgICAgICBzZXRTdHlsZSgnZGl2X19zbGlkZXJDYXJkLS1zbGlkZUNhbHVsYXRlJyxNYXRoLmNlaWwobWFyZ2luUGVyU2xpZGUpKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKChtYXJnaW5QZXJTbGlkZSkpXHJcbiAgICB9XHJcbiAgICAvLyBVc2VlZmZlY3QgZm9yIHNsaWRlciBuZXh0IGFuZCBwcmV2IGJ1dHRvblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1VzZSAnLGNoaWxkU2xpZGVyQ2FyZFJlZilcclxuICAgICAgICAvLyBFeGVjdXRlIHdoZW4gbW91bnRpbmdcclxuICAgICAgICAvLyBJbml0aWFsaXplIHJlcXVpcmVkIHZhbHVlcyBpbiBwYXJ0aWN1bGFyIGZ1bmN0aW9uXHJcbiAgICAgICAgY2FsY3VsYXRlTWFyZ2luKClcclxuICAgICAgICBpbml0VmFsdWVzKClcclxuICAgICAgICBhdXRvU2xpZGVyTW92ZSgyMDAwLHRydWUpXHJcbiAgICAgICAgLy8gQ2FwdHVyZSBuZXh0IGJ1dHRvbiBieSBjbGFzcyBuYW1lXHJcbiAgICAgICAgY29uc3QgbmV4dEJ0biAgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduZXh0JylbMF1cclxuICAgICAgICAvLyBDYXB0dXJlIHByZXZpb3VzIGJ1dHRvbiBieSBjbGFzcyBuYW1lXHJcbiAgICAgICAgY29uc3QgcHJldkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3ByZXYnKVswXVxyXG4gICAgICAgIC8vIEhhbmRsZSBjbGljayBldmVudCBmb3IgYm90aCBidXR0b25zXHJcbiAgICAgICAgbmV4dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PnRocm90dGxlKGNsaWNrSGFuZGxlciwnbmV4dCcpKVxyXG4gICAgICAgIHByZXZCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT50aHJvdHRsZShjbGlja0hhbmRsZXIsJ3ByZXYnKSlcclxuICAgICAgICBzbGlja1NsaWRlck1haW5Db250YWluZXIuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywoKT0+Y2xlYXJBdXRvU2xpZGVyTW92ZSh0aW1lcklkKSlcclxuICAgICAgICBzbGlja1NsaWRlck1haW5Db250YWluZXIuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywoKT0+YXV0b1NsaWRlck1vdmUoMTAwMCx0cnVlKSApXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsKCk9PntcclxuICAgICAgICAgICAgZGVib3VuY2UoKCk9PntcclxuICAgICAgICAgICAgICAgIGNhbGN1bGF0ZU1hcmdpbigpO1xyXG4gICAgICAgICAgICAgICAgaW5pdFZhbHVlcygpO1xyXG4gICAgICAgICAgICAgICAgcmVzZXRTbGlkZXJQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gKCk9PntcclxuICAgICAgICAgICAgLy8gRXhlY3V0ZSB3aGVuIHVubW91bnRpbmcgKGNsZWFudXApXHJcbiAgICAgICAgICAgIG5leHRCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT50aHJvdHRsZShjbGlja0hhbmRsZXIsJ25leHQnKSlcclxuICAgICAgICAgICAgcHJldkJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PnRocm90dGxlKGNsaWNrSGFuZGxlciwncHJldicpKSAgICAgICBcclxuICAgICAgICAgICAgc2xpY2tTbGlkZXJNYWluQ29udGFpbmVyLmN1cnJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsKCk9PmNsZWFyQXV0b1NsaWRlck1vdmUodGltZXJJZCkpXHJcbiAgICAgICAgICAgIHNsaWNrU2xpZGVyTWFpbkNvbnRhaW5lci5jdXJyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCgpPT5hdXRvU2xpZGVyTW92ZSgxMDAwLHRydWUpIClcclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsKCk9PntcclxuICAgICAgICAgICAgICAgIGRlYm91bmNlKCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsY3VsYXRlTWFyZ2luKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdFZhbHVlcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc2V0U2xpZGVyUG9zaXRpb24oKTtcclxuICAgICAgICAgICAgICAgIH0pOyAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9LFtdKVxyXG4gICAgbGV0IHRvdWNoU3RhcnRQb3MgPTA7XHJcbiAgICBjb25zdCB0b3VjaFN0YXJ0SGFuZGxlciA9IChlKT0+e1xyXG4gICAgICAgIHRvdWNoU3RhcnRQb3M9ZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCkgICBcclxuICAgIH1cclxuICAgIGNvbnN0IHRvdWNoRW5kSGFuZGxlcj0oZSk9PntcclxuICAgICAgICBsZXQgdG91Y2hFbmRQb3MgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFg7XHJcbiAgICAgICAgaWYgKHRvdWNoRW5kUG9zPT09dG91Y2hTdGFydFBvcykgcmV0dXJuXHJcbiAgICAgICAgaWYgKHRvdWNoRW5kUG9zLXRvdWNoU3RhcnRQb3M+MCkgY2xpY2tIYW5kbGVyKCdwcmV2JylcclxuICAgICAgICBlbHNlIGNsaWNrSGFuZGxlcignbmV4dCcpXHJcbiAgICB9XHJcbiAgICBjb25zdCBkcmFnSGFuZGxlciA9IChlKSA9PntcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIH1cclxuICAgIGNvbnN0IG9uSW1hZ2VMb2FkID0gKGltYWdlLGlzSW1nUmVhZHkpID0+e1xyXG4gICAgICAgIGlmIChpc0ltZ1JlYWR5KXtcclxuICAgICAgICAgICAgaW1hZ2UuY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGluZycpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoJ2xvYWRpbmcnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIC8vIHVzZUVmZmVjdCBmb3IgdG91Y2ggY2FwYWJpbGl0eVxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgbGV0IGltYWdlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW1hZ2VIb2xkZXInKSlcclxuICAgICAgICBpbWFnZXMuZm9yRWFjaCgoaW1hZ2UpPT57XHJcbiAgICAgICAgICAgIG9uSW1hZ2VMb2FkKGltYWdlLGZhbHNlKVxyXG4gICAgICAgICAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLChlKT0+ZHJhZ0hhbmRsZXIoZSkgKVxyXG4gICAgICAgICAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywoZSk9Pm9uSW1hZ2VMb2FkKGltYWdlLHRydWUpKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgc2xpY2tTbGlkZXJNYWluQ29udGFpbmVyLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsKGUpPT50b3VjaFN0YXJ0SGFuZGxlcihlKSx7cGFzc2l2ZTp0cnVlfSlcclxuICAgICAgICBzbGlja1NsaWRlck1haW5Db250YWluZXIuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsKGUpPT50b3VjaEVuZEhhbmRsZXIoZSkse3Bhc3NpdmU6dHJ1ZX0gKVxyXG4gICAgICAgIC8vIGNoaWxkU2xpZGVyQ2FyZFJlZi5jdXJyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsKGUpPT5kcmFnSGFuZGxlcihlKSApXHJcbiAgICAgICAgLy8gc2xpY2tTbGlkZXJNYWluQ29udGFpbmVyLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywoZSk9PnRvdWNoU3RhcnRIYW5kbGVyKGUpIClcclxuICAgICAgICByZXR1cm4gKCk9PiB7XHJcbiAgICAgICAgICAgIHNsaWNrU2xpZGVyTWFpbkNvbnRhaW5lci5jdXJyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLChlKT0+dG91Y2hTdGFydEhhbmRsZXIoZSkgKVxyXG4gICAgICAgICAgICBzbGlja1NsaWRlck1haW5Db250YWluZXIuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsKGUpPT50b3VjaEVuZEhhbmRsZXIoZSkse3Bhc3NpdmU6dHJ1ZX0pXHJcbiAgICAgICAgICAgIGltYWdlcy5mb3JFYWNoKChpbWFnZSk9PntcclxuICAgICAgICAgICAgICAgIGltYWdlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsKGUpPT5kcmFnSGFuZGxlcihlKSApXHJcbiAgICAgICAgICAgICAgICBpbWFnZS5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywoZSk9Pm9uSW1hZ2VMb2FkKGUpKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAvLyBzbGlja1NsaWRlck1haW5Db250YWluZXIuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLChlKT0+dG91Y2hTdGFydEhhbmRsZXIoZSkpXHJcbiAgICAgICAgICAgIC8vIHRocm90dGxlKHRvdWNoU3RhcnRIYW5kbGVyLDIwMDAsZSkgXHJcbiAgICAgICAgfVxyXG4gICAgfSxbXSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cInZpc2libGVEaXZcIiByZWY9e3NsaWNrU2xpZGVyTWFpbkNvbnRhaW5lcn0gIGNsYXNzTmFtZT17c3R5bGVzLkNzbGljayArICcgc2xpY2tNYWluQ29udGFpbmVyRGl2ICd9PlxyXG4gICAgICAgICAgICA8aSAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uKycgcHJldiAnfT5QcmV2PC9pPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiByZWY9e2RpdkNhcmRzQ29udGFpbmVyfSBjbGFzc05hbWU9e3N0eWxlcy5zbGljaysgJyBpbWdDb21wICd9PlxyXG4gICAgICAgICAgICA8SW1nIHJlZj17Y2hpbGRTbGlkZXJDYXJkUmVmfSBpbWdBcnI9e2ltZ0Fycn0gc3R5bGVJbWc9e3N0eWxlSW1nfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8aSAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uKycgbmV4dCAnfT5OZXh0PC9pPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsaWNrU2xpZGVyO1xyXG4gICAvLyBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAvLyAgICAgaWQ9aWQrMjtcclxuICAgIC8vICAgICBpbWdBcnJVcGR0KFsuLi5pbWdTdGF0ZSwgICB7XHJcbiAgICAvLyAgICAgICAgICdzcmMnOidzdGF0aWMvcGVyMS5qcGcnLFxyXG4gICAgLy8gICAgICAgICBpZDppZCxcclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgICAgJ3NyYyc6J3N0YXRpYy9wZXIyLmpwZycsXHJcbiAgICAvLyAgICAgICAgIGlkOmlkKzEsXHJcbiAgICAvLyAgICAgfV0pXHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coaWQpXHJcbiAgICAgICAgXHJcbiAgICAvLyB9LDEwMDAwKVxyXG4vLyBlbHNlIGlmKGxlZnQ+IC1zbGlkZXNUb1Njcm9sbFdpZHRoKXtcclxuLy8gICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLSR7MH1weClgO1xyXG4vLyAgICAgbmV4dFB4VmFsdWVUb1NjcmwgPSAtc2xpZGVzVG9TY3JvbGxXaWR0aDsgXHJcbi8vICAgICBwcmV2UHhWYWx1ZVRvU2NybCA9IHNsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbi8vIH1cclxuLy8gY29uc3QgY2xpY2tIYW5kbGVyID0gKGRpcmVjdGlvbik9PnsgXHJcbi8vICAgICBjb25zdCBsZWZ0ID0gZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0XHJcbi8vICAgICBjb25zb2xlLmxvZyhuZXh0UHhWYWx1ZVRvU2NybCwtZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aCtzbGlkZXJWaXNpYmxlV2lkdGgpXHJcbi8vICAgICBpZiAoZGlyZWN0aW9uID09PSAnbmV4dCcpe1xyXG4gICAgICAgIFxyXG4vLyAgICAgICAgIGlmKG5leHRQeFZhbHVlVG9TY3JsLC1kaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoK3NsaWRlclZpc2libGVXaWR0aCl7XHJcbi8vICAgICAgICAgICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLSR7MH1weClgO1xyXG4vLyAgICAgICAgICAgICBuZXh0UHhWYWx1ZVRvU2NybCA9IC1zbGlkZXNUb1Njcm9sbFdpZHRoOyBcclxuLy8gICAgICAgICAgICAgcHJldlB4VmFsdWVUb1NjcmwgPSBzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4vLyAgICAgICAgIH1lbHNlIGlmIChkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoLXNsaWRlclZpc2libGVXaWR0aDwgLW5leHRQeFZhbHVlVG9TY3JsKSB7XHJcbi8vICAgICAgICAgICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHstZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aCtzbGlkZXJWaXNpYmxlV2lkdGh9cHgpYFxyXG4vLyAgICAgICAgICAgICBuZXh0UHhWYWx1ZVRvU2NybCA9IC1kaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoK3NsaWRlclZpc2libGVXaWR0aFxyXG4vLyAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBcclxuLy8gICAgICAgICAgICAgZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zdHlsZS5jc3NUZXh0ID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgke25leHRQeFZhbHVlVG9TY3JsfXB4KWBcclxuLy8gICAgICAgICAgICAgZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zY3JvbGxMZWZ0ID0gc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuLy8gICAgICAgICAgICAgcHJldlB4VmFsdWVUb1NjcmwgPSBwcmV2UHhWYWx1ZVRvU2NybC1zbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4vLyAgICAgICAgICAgICBuZXh0UHhWYWx1ZVRvU2NybCA9IG5leHRQeFZhbHVlVG9TY3JsLXNsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbi8vICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4vLyAgICAgfWVsc2UgaWYoZGlyZWN0aW9uID09PSAncHJldicpe1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKHByZXZQeFZhbHVlVG9TY3JsKVxyXG4vLyAgICAgICAgIGNvbnN0IGxlZnQgPSBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcbi8vICAgICAgICAgaWYocHJldlB4VmFsdWVUb1Njcmw+MCl7XHJcbi8vICAgICAgICAgICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLSR7MH1weClgO1xyXG4vLyAgICAgICAgICAgICBuZXh0UHhWYWx1ZVRvU2NybCA9IC1zbGlkZXNUb1Njcm9sbFdpZHRoOyBcclxuLy8gICAgICAgICAgICAgcHJldlB4VmFsdWVUb1NjcmwgPSBzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4vLyAgICAgICAgIH1lbHNle1xyXG4vLyAgICAgICAgICAgICBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR7cHJldlB4VmFsdWVUb1Njcmx9cHgpYDtcclxuLy8gICAgICAgICAgICAgbmV4dFB4VmFsdWVUb1NjcmwgPW5leHRQeFZhbHVlVG9TY3JsICtzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4vLyAgICAgICAgICAgICBwcmV2UHhWYWx1ZVRvU2NybCA9IHByZXZQeFZhbHVlVG9TY3JsK3NsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbi8vICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4vLyAgICAgfVxyXG4vLyAvLyB9XHJcbi8vIGNvbnN0IGxlZnQgPSBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcbi8vIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc2Nyb2xsTGVmdCA9IHNsaWRlc1RvU2Nyb2xsV2lkdGg7Il0sInNvdXJjZVJvb3QiOiIifQ==