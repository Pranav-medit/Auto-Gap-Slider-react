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
          style: {},
          src: src.src,
          className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().sliderImg) + ' imageHolder ',
          alt: ""
        }, src.id, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 25
        }, _this)
      }, src.id, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
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

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1),
      cardMargin = _useState2[0],
      updateCardMargin = _useState2[1];

  var styleImg = {
    width: '200px',
    height: '300px',
    margin: "0 ".concat(cardMargin / 2, "px 0 ").concat(cardMargin / 2, "px")
  };

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),
      dummy = _useState3[0],
      du = _useState3[1]; // Each slider card


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

    if (direction === 'prev') {
      if (!toDisplay) showLeftArrow(false);else showLeftArrow(true);
    } else {
      if (!toDisplay) showRightArrow(false);else showRightArrow(true);
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
    debugger;
    divCardsContainerTotalWidth = divCardsContainer.current.offsetWidth; // If next button is clicked

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

    debugger;
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
    updateCardMargin(styleValue);

    for (var i = 0; i < items.length; i++) {
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
    initValues();
  } // Useeffect for slider next and prev button


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    console.log('Use ', childSliderCardRef); // Execute when mounting
    // Initialize required values in particular function

    calculateMargin();
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

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
      leftArrowDisplay = _useState4[0],
      showLeftArrow = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
      rightArrowDisplay = _useState5[0],
      showRightArrow = _useState5[1];

  var leftStyle = {
    display: leftArrowDisplay ? "inline-block" : "none"
  };
  var rightStyle = {
    display: rightArrowDisplay ? "inline-block" : "none"
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      id: "visibleDiv",
      ref: slickSliderMainContainer,
      className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Cslick) + ' slickMainContainerDiv ',
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        style: leftStyle,
        className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().button) + ' prev ',
        children: "Prev"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 375,
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
          lineNumber: 378,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 377,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().button) + ' next ',
        children: "Next"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 380,
        columnNumber: 12
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      style: rightStyle,
      id: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().idea),
      children: "hey"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 9
    }, _this)]
  }, void 0, true);
};

_s2(SlickSlider, "YaUQdYGTrkP+usgJWVwkpd7eeaE=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zbGlja1NsaWRlci5qcyJdLCJuYW1lcyI6WyJJbWciLCJmb3J3YXJkUmVmIiwiY2hpbGRTbGlkZXJDYXJkUmVmIiwic3R5bGVJbWciLCJpbWdBcnIiLCJ1c2VFZmZlY3QiLCJpZCIsIm1hcCIsInNyYyIsImluZGV4Iiwic3R5bGVzIiwiU2xpY2tTbGlkZXIiLCJpbWdBcnJEYXRhIiwidXNlU3RhdGUiLCJpbWdBcnJVcGR0IiwiaW1hZ2VVcGRhdGVBcnIiLCJ0aW1lcklkIiwiY2FyZE1hcmdpbiIsInVwZGF0ZUNhcmRNYXJnaW4iLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpbiIsImR1bW15IiwiZHUiLCJ1c2VSZWYiLCJkaXZDYXJkc0NvbnRhaW5lciIsInNsaWNrU2xpZGVyTWFpbkNvbnRhaW5lciIsInNsaWRlclZpc2libGVXaWR0aCIsImVhY2hTbGlkZVdpZHRoIiwic2xpZGVzVG9TY3JvbGwiLCJzbGlkZXNUb1Njcm9sbFdpZHRoIiwibmV4dFB4VmFsdWVUb1NjcmwiLCJwcmV2UHhWYWx1ZVRvU2NybCIsImRpdkNhcmRzQ29udGFpbmVyVG90YWxXaWR0aCIsImVuZE9mU2xpZGUiLCJ0aHJvdHRsZSIsIl8iLCJmdW5jIiwiYXJncyIsImRlYm91bmNlIiwicmVzZXRTbGlkZXJQb3NpdGlvbiIsImN1cnJlbnQiLCJzdHlsZSIsImNzc1RleHQiLCJkaXNwbGF5QXJyb3ciLCJvZmZzZXRXaWR0aCIsImRpcmVjdGlvbiIsInRvRGlzcGxheSIsInNob3dMZWZ0QXJyb3ciLCJzaG93UmlnaHRBcnJvdyIsInVwZGF0ZVNsaWRlclBvc2l0aW9uUmVmIiwidXBkYXRlcmVmIiwidXBkYXRlU2xpZGVyQXJyYXkiLCJuZXdFbGVtZW50IiwiY29uY2F0IiwiY2xpY2tIYW5kbGVyIiwiaW5pdFZhbHVlcyIsImVhY2hTbGlkZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImVhY2hTbGlkZU1hcmdpbiIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJtYXJnaW5SaWdodCIsInNsaWNlIiwiTnVtYmVyIiwiYXV0b1NsaWRlck1vdmUiLCJ0aW1lb3V0IiwiYXV0b3BsYXkiLCJzZXRJbnRlcnZhbCIsImNsZWFyQXV0b1NsaWRlck1vdmUiLCJjbGVhclRpbWVvdXQiLCJzZXRTdHlsZSIsImNsYXNzTmFtZSIsInN0eWxlVmFsdWUiLCJpdGVtcyIsImkiLCJsZW5ndGgiLCJjYWxjdWxhdGVNYXJnaW4iLCJtaW5HYXBCZXR3ZWVuU2xpZGVzIiwic2xpZGVzUGVyVmlzaWJsZVdpZHRoIiwibWFyZ2luVG9TZXRJblBlcmNlbnRhZ2UiLCJNYXRoIiwiZmxvb3IiLCJtYXJnaW5Ub1NldEluUHgiLCJtYXJnaW5QZXJTbGlkZSIsImNlaWwiLCJjb25zb2xlIiwibG9nIiwibmV4dEJ0biIsInByZXZCdG4iLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRvdWNoU3RhcnRQb3MiLCJ0b3VjaFN0YXJ0SGFuZGxlciIsImUiLCJjaGFuZ2VkVG91Y2hlcyIsImNsaWVudFgiLCJ0b3VjaEVuZEhhbmRsZXIiLCJ0b3VjaEVuZFBvcyIsImRyYWdIYW5kbGVyIiwicHJldmVudERlZmF1bHQiLCJvbkltYWdlTG9hZCIsImltYWdlIiwiaXNJbWdSZWFkeSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImltYWdlcyIsIkFycmF5IiwiZnJvbSIsImZvckVhY2giLCJwYXNzaXZlIiwibGVmdEFycm93RGlzcGxheSIsInJpZ2h0QXJyb3dEaXNwbGF5IiwibGVmdFN0eWxlIiwiZGlzcGxheSIsInJpZ2h0U3R5bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsR0FBRyxnQkFBR0MsaURBQVUsU0FBQyxnQkFBbUJDLGtCQUFuQixFQUF5QztBQUFBOztBQUFBLE1BQXZDQyxRQUF1QyxRQUF2Q0EsUUFBdUM7QUFBQSxNQUE5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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBR0k7QUFBSyxXQUFHLEVBQUVlLGlCQUFWO0FBQTZCLGlCQUFTLEVBQUVmLHVFQUFBLEdBQWMsV0FBdEQ7QUFBQSwrQkFDQSw4REFBQyxHQUFEO0FBQUssYUFBRyxFQUFFUixrQkFBVjtBQUE4QixnQkFBTSxFQUFFRSxNQUF0QztBQUE4QyxrQkFBUSxFQUFFRDtBQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhKLGVBTUc7QUFBSSxpQkFBUyxFQUFFTyx3RUFBQSxHQUFjLFFBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREEsZUFTQTtBQUFHLFdBQUssRUFBRTJHLFVBQVY7QUFBc0IsUUFBRSxFQUFFM0csc0VBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEE7QUFBQSxrQkFESjtBQWFILENBcldEOztJQUFNQyxXOztNQUFBQSxXO0FBdVdOLCtEQUFlQSxXQUFmLEUsQ0FDRztBQUNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NsaWRlci4wZmZjMDkwNzM1ZTQzNTU2ZTg2Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VSZWYsZm9yd2FyZFJlZiwgdXNlRWZmZWN0LHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zbGlja1NsaWRlci5tb2R1bGUuc2NzcydcclxuaW1wb3J0ICcuL3NsaWNrU2xpZGVyLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIlxyXG5cclxuY29uc3QgSW1nID0gZm9yd2FyZFJlZigoe3N0eWxlSW1nLGltZ0Fycn0sY2hpbGRTbGlkZXJDYXJkUmVmKSA9PntcclxuICAgIFxyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgIGxldCBpZCA9IDExO1xyXG4gXHJcblxyXG4gICAgfSxbXSlcclxuICAgIFxyXG4gICAgLy8gbGV0IGltYWdlU2xpZGUgPSB1c2VSZWYobnVsbCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtpbWdBcnIubWFwKChzcmMsaW5kZXgpPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtzcmMuaWR9ICByZWY9e2NoaWxkU2xpZGVyQ2FyZFJlZn0gc3R5bGU9e3N0eWxlSW1nfSAgY2xhc3NOYW1lPXtzdHlsZXMuSW1nKycgZGl2IGRpdl9fc2xpZGVyQ2FyZCBkaXZfX3NsaWRlckNhcmQtLXNsaWRlQ2FsdWxhdGUgJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcga2V5PXtzcmMuaWR9IGxvYWRpbmc9J2xhenknIHN0eWxlPXt7fX0gc3JjPXtzcmMuc3JjfSAgIGNsYXNzTmFtZT17c3R5bGVzLnNsaWRlckltZyArICcgaW1hZ2VIb2xkZXIgJ30gIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59KVxyXG5jb25zdCBTbGlja1NsaWRlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGltZ0FyckRhdGEgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3MxLmpwZycsXHJcbiAgICAgICAgICAgIGlkOjEsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczIuanBnJyxcclxuICAgICAgICAgICAgaWQ6MixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zMy5qcGcnLFxyXG4gICAgICAgICAgICBpZDozLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3M0LmpwZycsXHJcbiAgICAgICAgICAgIGlkOjQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczUuanBnJyxcclxuICAgICAgICAgICAgaWQ6NSxcclxuICAgICAgICB9LHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zNi5qcGcnLFxyXG4gICAgICAgICAgICBpZDo2LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3M3LmpwZycsXHJcbiAgICAgICAgICAgIGlkOjcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczguanBnJyxcclxuICAgICAgICAgICAgaWQ6OCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zOS5qcGcnLFxyXG4gICAgICAgICAgICBpZDo5LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3MxMC5qcGcnLFxyXG4gICAgICAgICAgICBpZDoxMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J2h0dHBzOi8vcGljc3VtLnBob3Rvcy8yMDAvMzAwJyxcclxuICAgICAgICAgICAgaWQ6MTEsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidodHRwczovL3BpY3N1bS5waG90b3MvMTIwMC8yMzAwJyxcclxuICAgICAgICAgICAgaWQ6MTIsXHJcbiAgICAgICAgfSxcclxuICAgIFxyXG4gICAgXVxyXG4gICAgY29uc3QgW2ltZ0FycixpbWdBcnJVcGR0XSA9IHVzZVN0YXRlKGltZ0FyckRhdGEpXHJcbiAgICBsZXQgaW1hZ2VVcGRhdGVBcnI9aW1nQXJyO1xyXG4gICAgbGV0IGlkID0gMTI7XHJcbiAgICBsZXQgdGltZXJJZDtcclxuICAgIGNvbnN0IFtjYXJkTWFyZ2luLHVwZGF0ZUNhcmRNYXJnaW5dID0gdXNlU3RhdGUoMSk7XHJcbiAgICBjb25zdCBzdHlsZUltZyA9IHtcclxuICAgICAgICB3aWR0aDonMjAwcHgnLFxyXG4gICAgICAgIGhlaWdodDonMzAwcHgnLFxyXG4gICAgICAgIG1hcmdpbjpgMCAke2NhcmRNYXJnaW4vMn1weCAwICR7Y2FyZE1hcmdpbi8yfXB4YFxyXG4gICAgfTtcclxuICAgIGxldCBbZHVtbXksZHVdID0gdXNlU3RhdGUoKTtcclxuICAgIC8vIEVhY2ggc2xpZGVyIGNhcmRcclxuICAgIGNvbnN0IGNoaWxkU2xpZGVyQ2FyZFJlZiA9IHVzZVJlZigpO1xyXG4gICAgLy8gUGFyZW50IG9mIHNsaWRlciBjYXJkcyAsIGRpdiBob2xkaW5nIGFsbCBzbGlkZSBjYXJkc1xyXG4gICAgY29uc3QgZGl2Q2FyZHNDb250YWluZXIgPSB1c2VSZWYoKTtcclxuICAgIC8vIFNsaWRlciBjb250YWluaW5nIGNhcmRzIGNvbnRhaW5lciBhbmQgcHJldiwgbmV4dCBidXR0b25zLlxyXG4gICAgY29uc3Qgc2xpY2tTbGlkZXJNYWluQ29udGFpbmVyID0gdXNlUmVmKCk7XHJcbiAgICAvLyBJbml0aWFsaXplIGRlZmF1bHQgdmFsdWVzXHJcbiAgICBsZXQgc2xpZGVyVmlzaWJsZVdpZHRoPTA7XHJcbiAgICBsZXQgZWFjaFNsaWRlV2lkdGggPSAwO1xyXG4gICAgbGV0IHNsaWRlc1RvU2Nyb2xsID0gMDtcclxuICAgIGxldCBzbGlkZXNUb1Njcm9sbFdpZHRoPTA7XHJcbiAgICBsZXQgbmV4dFB4VmFsdWVUb1NjcmwgPSAwOyBcclxuICAgIGxldCBwcmV2UHhWYWx1ZVRvU2NybCA9IDA7XHJcbiAgICBsZXQgZGl2Q2FyZHNDb250YWluZXJUb3RhbFdpZHRoPTA7XHJcblxyXG4gICAgLy8gRGV0ZWN0IGlmIHdlIHJlYWNoZWQgZW5kIG9mIHRoZSBzbGlkZXNcclxuICAgIGxldCBlbmRPZlNsaWRlID0gZmFsc2VcclxuICAgIC8vIExvYWRhc2ggdGhyb3R0bGVyIHRvIHRocm90dGxlIHJlc2l6ZSBhbmQgaWYgdXNlciBjbGlja3MgYnV0dG9uIG1hbnkgdGltZXMgXHJcbiAgICBsZXQgdGhyb3R0bGUgPSBfLnRocm90dGxlKChmdW5jLC4uLmFyZ3MpPT4ge1xyXG4gICAgICAgIGZ1bmMoLi4uYXJncylcclxuICAgIH0sIDUwMCk7XHJcbiAgICBsZXQgZGVib3VuY2UgPSBfLmRlYm91bmNlKChmdW5jLC4uLmFyZ3MpPT4ge1xyXG4gICAgICAgIGZ1bmMoLi4uYXJncylcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnZGVpYm91bmMnKVxyXG4gICAgfSwgODAwKTtcclxuICAgIGNvbnN0IHJlc2V0U2xpZGVyUG9zaXRpb24gPSAoKSA9PntcclxuICAgICAgICAvLyBkZWZhdWx0IHNsaWRlc1RvU2Nyb2xsV2lkdGg6MjQwcHhcclxuICAgICAgICBuZXh0UHhWYWx1ZVRvU2NybCA9IC1zbGlkZXNUb1Njcm9sbFdpZHRoOyBcclxuICAgICAgICBwcmV2UHhWYWx1ZVRvU2NybCA9IHNsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbiAgICAgICAgZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zdHlsZS5jc3NUZXh0ID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtJHswfXB4KWA7XHJcbiAgICAgICAgZGlzcGxheUFycm93KCdwcmV2JyxmYWxzZSlcclxuICAgICAgICBkaXZDYXJkc0NvbnRhaW5lclRvdGFsV2lkdGggPSBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoXHJcbiAgICB9XHJcbiAgICBjb25zdCBkaXNwbGF5QXJyb3c9KGRpcmVjdGlvbj0ncHJldicsdG9EaXNwbGF5PXRydWUpPT57XHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbj09PSdwcmV2Jyl7XHJcbiAgICAgICAgICAgIGlmICAoIXRvRGlzcGxheSlzaG93TGVmdEFycm93KGZhbHNlKVxyXG4gICAgICAgICAgICBlbHNlIHNob3dMZWZ0QXJyb3codHJ1ZSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgaWYgICghdG9EaXNwbGF5KXNob3dSaWdodEFycm93KGZhbHNlKVxyXG4gICAgICAgICAgICBlbHNlIHNob3dSaWdodEFycm93KHRydWUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgdXBkYXRlU2xpZGVyUG9zaXRpb25SZWYgPSAodXBkYXRlcmVmKSA9PntcclxuICAgICAgICAvLyB0cmFuc2xhdGVYKDApIC0+IGluaXRpYWwgcG9zaXRpb24sIHN0YXJ0aW5nIHBvc2l0aW9uXHJcbiAgICAgICAgLy8gdHJhbnNsYXRlWCgtMjQwcHgpIC0+IG1vdmVzIHNsaWRlIGluIC0+IGRpcmVjdGlvbiBieSAyNDBweChlYWNoIHNsaWRlIHdpZHRoIGJ5IGRlZmF1bHQpXHJcbiAgICAgICAgaWYgKHVwZGF0ZXJlZiA9PT0gJ25leHQnKXtcclxuICAgICAgICAgICAgLy8gbWludXMgcG9zaXRpb24gZ29lcyAtPiBkaXJlY3Rpb24gb24gdHJhbnNsYXRlXHJcbiAgICAgICAgICAgIC8vIGV4OiBwcmV2UHhWYWx1ZVRvU2NybD0yNDAsbmV4dFB4VmFsdWVUb1Njcmw9LTI0MCAgYW5kIHNsaWRlc1RvU2Nyb2xsV2lkdGg9MjQwXHJcbiAgICAgICAgICAgIHByZXZQeFZhbHVlVG9TY3JsID0gcHJldlB4VmFsdWVUb1Njcmwtc2xpZGVzVG9TY3JvbGxXaWR0aDsgXHJcbiAgICAgICAgICAgIC8vIGZpcnN0LXRpbWU6cHJldlB4VmFsdWVUb1Njcmw6MFxyXG4gICAgICAgICAgICAvLyBzZWNvbmQtdGltZTpwcmV2UHhWYWx1ZVRvU2NybDotMjQwXHJcbiAgICAgICAgICAgIG5leHRQeFZhbHVlVG9TY3JsID0gbmV4dFB4VmFsdWVUb1Njcmwtc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuICAgICAgICAgICAgLy8gZmlyc3QtdGltZTpuZXh0UHhWYWx1ZVRvU2NybDotNDgwXHJcbiAgICAgICAgICAgIC8vIHNlY29uZC10aW1lOm5leHRQeFZhbHVlVG9TY3JsOi03MjBcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgLy8gZXg6IHByZXZQeFZhbHVlVG9TY3JsPS0yNDAsbmV4dFB4VmFsdWVUb1Njcmw9LTcyMCAgYW5kIHNsaWRlc1RvU2Nyb2xsV2lkdGg9MjQwXHJcbiAgICAgICAgICAgIG5leHRQeFZhbHVlVG9TY3JsID1uZXh0UHhWYWx1ZVRvU2NybCArc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuICAgICAgICAgICAgLy8gZmlyc3QtdGltZTpwcmV2UHhWYWx1ZVRvU2NybDo0ODBcclxuICAgICAgICAgICAgLy8gc2Vjb25kLXRpbWU6cHJldlB4VmFsdWVUb1Njcmw6NjIwXHJcbiAgICAgICAgICAgIHByZXZQeFZhbHVlVG9TY3JsID0gcHJldlB4VmFsdWVUb1Njcmwrc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuICAgICAgICAgICAgLy8gZmlyc3QtdGltZTpuZXh0UHhWYWx1ZVRvU2NybDowXHJcbiAgICAgICAgICAgIC8vIHNlY29uZC10aW1lOm5leHRQeFZhbHVlVG9TY3JsOjI0MFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHVwZGF0ZVNsaWRlckFycmF5ID0gKCkgPT57XHJcbiAgICAgICAgY29uc3QgbmV3RWxlbWVudCA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9wZXIxLmpwZycsXHJcbiAgICAgICAgICAgICAgICBpZDppZCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9wZXIyLmpwZycsXHJcbiAgICAgICAgICAgICAgICBpZDppZCsxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgICAgLy8gaW1nQXJyLnB1c2goLi4ubmV3RWxlbWVudClcclxuICAgICAgICBpbWFnZVVwZGF0ZUFyciA9ICBpbWFnZVVwZGF0ZUFyci5jb25jYXQobmV3RWxlbWVudClcclxuICAgICAgICBpbWdBcnJVcGR0KGltYWdlVXBkYXRlQXJyICk7XHJcbiAgICAgICAgZGl2Q2FyZHNDb250YWluZXJUb3RhbFdpZHRoID0gZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aFxyXG4gICAgICAgIGlkID0gaWQrMjtcclxuICAgICAgICAvLyAvLyBjb25zb2xlLmxvZyhpbWdBcnJEYXRhKVxyXG4gICAgICAgIC8vIGNsaWNrSGFuZGxlcignbmV4dCcpXHJcbiAgICB9XHJcbiAgICBjb25zdCBjbGlja0hhbmRsZXIgPSAoZGlyZWN0aW9uKT0+eyBcclxuICAgICAgICBkZWJ1Z2dlclxyXG4gICAgICAgIGRpdkNhcmRzQ29udGFpbmVyVG90YWxXaWR0aCA9IGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQub2Zmc2V0V2lkdGhcclxuICAgICAgICAvLyBJZiBuZXh0IGJ1dHRvbiBpcyBjbGlja2VkXHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ25leHQnKXtcclxuICAgICAgICAgICAgZGlzcGxheUFycm93KCdwcmV2Jyx0cnVlKVxyXG4gICAgICAgICAgICAvLyBJZiByZWFjaGVkIGVuZCBvZiBzbGlkZSByZXR1cm4gdG8gZmlyc3Qgc2xpZGVcclxuICAgICAgICAgICAgaWYoZW5kT2ZTbGlkZSl7ICBcclxuICAgICAgICAgICAgICAgIC8vIFJldHVybiB0byBmaXJzdCBzbGlkZSBhbmQgcmVzZXQgcG9zaXRpb25zIG9mIHNjcm9sbCByZWZlcmVuY2VcclxuICAgICAgICAgICAgICAgIHJlc2V0U2xpZGVyUG9zaXRpb24oKVxyXG4gICAgICAgICAgICAgICAgZW5kT2ZTbGlkZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAvLyBleDogc2F5IGRpdkNhcmRzQ29udGFpbmVyVG90YWxXaWR0aCA9IDIzNjA7IGFuZCBzbGlkZXJWaXNpYmxlV2lkdGggPSAxMzM2IGFuZCBuZXh0UHhWYWx1ZVRvU2NybCA9IC0xNDQwIHRoZW5cclxuICAgICAgICAgICAgICAgIC8vIHNsaWRlclZpc2libGVXaWR0aCBpcyBzbGlkZXIgd2lkdGggd2hpY2ggaXMgdmlzaWJsZSB0byB1c2VyXHJcbiAgICAgICAgICAgICAgICAvLyBkaXZDYXJkc0NvbnRhaW5lclRvdGFsV2lkdGggaXMgdG90YWwgd2lkdGggb2YgY29udGFpbmVyIGhvbGRpbmcgY2FyZHMgPSAgdmlzaWJsZSBhcmVhK2hpZGRlbiBhcmVhXHJcbiAgICAgICAgICAgIH1lbHNlIGlmICgoZGl2Q2FyZHNDb250YWluZXJUb3RhbFdpZHRoLXNsaWRlclZpc2libGVXaWR0aCk8IC1uZXh0UHhWYWx1ZVRvU2NybCkge1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgc2xpZGUgaXMgYWJvdXQgdG8gcmVhY2ggbGFzdCBzbGlkZSAsIGxhc3QgYnV0IG9uZSBjbGljayBvZiBlbmRvZnNsaWRlXHJcbiAgICAgICAgICAgICAgICBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR7LWRpdkNhcmRzQ29udGFpbmVyVG90YWxXaWR0aCtzbGlkZXJWaXNpYmxlV2lkdGh9cHgpYFxyXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIHNsaWRlciBwb3NpdGlvbiByZWZlcmVuY2UsIHBhc3MgJ25leHQnIHRvIHVwZGF0ZSByZWZyZW5jZSB3aXRoIHJlc3BlY3QgdG8gbmV4dCBidXR0b24gY2xpY2tcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVNsaWRlclBvc2l0aW9uUmVmKCduZXh0JylcclxuICAgICAgICAgICAgICAgIGVuZE9mU2xpZGUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAvLyB1cGRhdGVTbGlkZXJBcnJheSgpXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgZXZlcnl0aGluZyBpcyByaWdodCB0cmFuc2xhdGUgdG8gbmV4dCBweCB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zdHlsZS5jc3NUZXh0ID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgke25leHRQeFZhbHVlVG9TY3JsfXB4KWBcclxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBzbGlkZXIgcG9zaXRpb24gcmVmZXJlbmNlLCBwYXNzICduZXh0JyB0byB1cGRhdGUgcmVmcmVuY2Ugd2l0aCByZXNwZWN0IHRvIG5leHQgYnV0dG9uIGNsaWNrXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVTbGlkZXJQb3NpdGlvblJlZignbmV4dCcpXHJcbiAgICAgICAgICAgICAgICBlbmRPZlNsaWRlID0gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNlIGlmKGRpcmVjdGlvbiA9PT0gJ3ByZXYnKXtcclxuICAgICAgICAgICAgLy8gRW5kIG9mIHNsaWRlIGNhbm5vdCBiZSByZWFjaGVkIGJ5IGNsaWNraW5nIHByZXZpb3VzIGJ1dHRvblxyXG4gICAgICAgICAgICBlbmRPZlNsaWRlID0gZmFsc2VcclxuICAgICAgICAgICAgaWYocHJldlB4VmFsdWVUb1Njcmw+MCl7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5QXJyb3coJ3ByZXYnLGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgLy8gSWYgc2xpZGVyIGlzIG92ZXIgbGVmdCByZXR1cm4gdG8gZmlyc3Qgc2xpZGUgYW5kIHJlc2V0IHBvc2l0aW9ucyBvZiBzY3JvbGwgcmVmZXJlbmNlXHJcbiAgICAgICAgICAgICAgICAvLyBleDogc2F5IGJ5IGRlZmF1bHQgcmVmZXJlbmNlIHByZXZQeFZhbHVlVG9TY3JsIGlzIHNldCB0byAyNDBweCBoZW5jZSB0aGlzIGlzIGV4ZWN1dGVkXHJcbiAgICAgICAgICAgICAgICByZXNldFNsaWRlclBvc2l0aW9uKClcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5QXJyb3coJ3ByZXYnLHRydWUpXHJcbiAgICAgICAgICAgICAgICAvLyBJZiBldmVyeXRoaW5nIGlzIHJpZ2h0IHRyYW5zbGF0ZSB0byBwcmV2IHB4IHZhbHVlXHJcbiAgICAgICAgICAgICAgICBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR7cHJldlB4VmFsdWVUb1Njcmx9cHgpYDtcclxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBzbGlkZXIgcG9zaXRpb24gcmVmZXJlbmNlLCBwYXNzICdwcmV2JyB0byB1cGRhdGUgcmVmcmVuY2Ugd2l0aCByZXNwZWN0IHRvIG5leHQgYnV0dG9uIGNsaWNrXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVTbGlkZXJQb3NpdGlvblJlZigncHJldicpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBkZWJ1Z2dlclxyXG4gICAgfVxyXG4gICAgY29uc3QgaW5pdFZhbHVlcyA9KCkgPT57XHJcbiAgICAgICAgZW5kT2ZTbGlkZSA9IGZhbHNlXHJcbiAgICAgICAgLy8gU2xpZGVyIHdpZHRoIGlzIGFuIG91dGVyIGRpdiB3aGljaCBzaG93cyBlbnRpcmUgc2xpZGVyIGlmIHdlIHNldCBzbGlkZXIgdG8gYmUgMjAwcHggd2lkZS0gXHJcbiAgICAgICAgLy8gLXdpZHRoIGlzIHNldCBvbiB0aGlzIGRpdiAsIHdlIG5lZWQgaXQgdG8gY2FsY3VsYXRlIHNsaWRlciB2aXNpYmxlIHdpZHRoIGluIHdoaWNoIHNsaWRlciBpcyB2aXNpYmxlXHJcbiAgICAgICAgLy8gYnkgZGVmYXVsdCBzbGlkZXIgdGFrZXMgZnVsbCB2aWV3cG9ydCB3aWR0aC5leCA6IDE2MDBweFxyXG4gICAgICAgIHNsaWRlclZpc2libGVXaWR0aCA9IHNsaWNrU2xpZGVyTWFpbkNvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgICAgIC8vIElmIHNsaWRlciBoYXMgbWFyZ2luIChzcGFjZSBiZXR3ZWVuIHNsaWRlciBjYXJkcyBpZiBzbGlkZXJzIGFyZSB0b3VjaCB0byBlYWNoIG90aGVyIHRoZW4gaXQgaGFzIG5vIG1hcmdpbiktIFxyXG4gICAgICAgIC8vIC1pdCBpcyByZXF1aXJlZCB0byBjYWxjdWxhdGUgaG93IG11Y2ggZG9lcyBzbGlkZXIgc2Nyb2xsc1xyXG4gICAgICAgIGxldCBlYWNoU2xpZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkaXZfX3NsaWRlckNhcmQtLXNsaWRlQ2FsdWxhdGUnKVswXVxyXG4gICAgICAgIGxldCBlYWNoU2xpZGVNYXJnaW4gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlYWNoU2xpZGUpLm1hcmdpblJpZ2h0LnNsaWNlKDAsIC0yKTtcclxuICAgICAgICAvLyBDb252ZXJ0IGZyb20gc3RyaW5nIHRvIG51bWJlciBhbmQgbXVsdGlwbHkgaXQgYnkgdHdvIGJlY2F1c2UgbWFyZ2luIGlzIGFwcGxpZWQgb24gYm90aCBzaWRlc1xyXG4gICAgICAgIGVhY2hTbGlkZU1hcmdpbj1OdW1iZXIoZWFjaFNsaWRlTWFyZ2luKSoyXHJcbiAgICAgICAgLy8gRWFjaCBzbGlkZXIgY2FyZCB3aWR0aCBpcyBjYWxjdWxhdGVkIGJ5IGFkZGluZyBpdHMgb3duIHdpZHRoIHdpdGggaXRzIG93biBtYXJnaW5cclxuICAgICAgICBlYWNoU2xpZGVXaWR0aCA9IGVhY2hTbGlkZS5vZmZzZXRXaWR0aCtlYWNoU2xpZGVNYXJnaW47XHJcbiAgICAgICAgLy8gZWFjaFNsaWRlV2lkdGggPU51bWJlcihlYWNoU2xpZGVXaWR0aClcclxuICAgICAgICAvLyBOdW1iZXIgb2Ygc2xpZGVzIHRvIHNjcm9sbFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsID0gMVxyXG4gICAgICAgIC8vIE51bWJlciBvZiBzbGlkZXMgdG8gc2Nyb2xsIGluIHBpeGVscyBleDogaWYgMjQwcHhcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbFdpZHRoPWVhY2hTbGlkZVdpZHRoKnNsaWRlc1RvU2Nyb2xsO1xyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsV2lkdGggPSBzbGlkZXJWaXNpYmxlV2lkdGg7XHJcbiAgICAgICAgLy8gdG8gY2FsY3VsYXRlIGFuZCB0cmFjayBwcm9ncmVzcyBvZiBsZWZ0IGFuZCByaWdodCBzY3JvbGwgcG9zaXRpb25zXHJcbiAgICAgICAgcHJldlB4VmFsdWVUb1NjcmwgPSBzbGlkZXNUb1Njcm9sbFdpZHRoOyAvLyBleDoyNDBweFxyXG4gICAgICAgIG5leHRQeFZhbHVlVG9TY3JsID0gLXNsaWRlc1RvU2Nyb2xsV2lkdGg7IC8vIGV4Oi0yNDBweFxyXG4gICAgICAgIC8vIENhcmRzIGNvbnRhaW5lciB3aWR0aCBnZW5lcmFsbHkgZXF1YWwgdG8gZWFjaHNsaWRlcndpZHRoKnRvdGFsbnVtYmVyb2ZzbGlkZXMgaW5jbHVkaW5nIG1hcmdpbiBleDogc2F5IDIwOTBweFxyXG4gICAgICAgIGRpdkNhcmRzQ29udGFpbmVyVG90YWxXaWR0aCA9IGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQub2Zmc2V0V2lkdGhcclxuICAgICAgICBkaXNwbGF5QXJyb3coJ3ByZXYnLGZhbHNlKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBhdXRvU2xpZGVyTW92ZT0odGltZW91dCxhdXRvcGxheSk9PntcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm1vdXNlbGVhdmVcIilcclxuICAgICAgICBpZihhdXRvcGxheSl7XHJcbiAgICAgICAgICAgIHRpbWVySWQ9c2V0SW50ZXJ2YWwoKCk9PntcclxuICAgICAgICAgICAgICAgIHRocm90dGxlKGNsaWNrSGFuZGxlciwnbmV4dCcpXHJcbiAgICAgICAgICAgIH0sMTAwMDAwMDAwMDAwMDAwKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGNsZWFyQXV0b1NsaWRlck1vdmU9KHRpbWVySWQpPT57XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJtb3VzZWVudGVyXCIpXHJcbiAgICAgICAgaWYodGltZXJJZCl7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHVzZUVmZmVjdCBmb3IgbnVtYmVyIG9mIHNsaWRlcyB0byBzaG93IHBlciBkaXZcclxuICAgIGZ1bmN0aW9uIHNldFN0eWxlKGNsYXNzTmFtZSwgc3R5bGVWYWx1ZSkge1xyXG4gICAgICAgIGxldCBpdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoY2xhc3NOYW1lKTtcclxuICAgICAgICB1cGRhdGVDYXJkTWFyZ2luKHN0eWxlVmFsdWUpO1xyXG4gICAgICAgIGZvciAodmFyIGk9MDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgaWYgKGkrMT09PShpdGVtcy5sZW5ndGgpKWl0ZW1zW2ldLnN0eWxlLm1hcmdpblJpZ2h0ID0gJ2F1dG8nXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlTWFyZ2luKCl7XHJcbiAgICAgICAgY29uc3QgbWluR2FwQmV0d2VlblNsaWRlcyA9IDEwXHJcbiAgICAgICAgY29uc3Qgc2xpZGVyVmlzaWJsZVdpZHRoID0gc2xpY2tTbGlkZXJNYWluQ29udGFpbmVyLmN1cnJlbnQub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgY29uc3QgZWFjaFNsaWRlV2lkdGggPSBjaGlsZFNsaWRlckNhcmRSZWYuY3VycmVudC5vZmZzZXRXaWR0aCttaW5HYXBCZXR3ZWVuU2xpZGVzXHJcbiAgICAgICAgY29uc3Qgc2xpZGVzUGVyVmlzaWJsZVdpZHRoID0gc2xpZGVyVmlzaWJsZVdpZHRoLyhlYWNoU2xpZGVXaWR0aCk7XHJcbiAgICAgICAgY29uc3QgbWFyZ2luVG9TZXRJblBlcmNlbnRhZ2UgPSBzbGlkZXNQZXJWaXNpYmxlV2lkdGggLSBNYXRoLmZsb29yKHNsaWRlc1BlclZpc2libGVXaWR0aClcclxuICAgICAgICBjb25zdCBtYXJnaW5Ub1NldEluUHggPSAoKG1hcmdpblRvU2V0SW5QZXJjZW50YWdlKSplYWNoU2xpZGVXaWR0aClcclxuICAgICAgICBjb25zdCBtYXJnaW5QZXJTbGlkZSA9IChtYXJnaW5Ub1NldEluUHgvKE1hdGguY2VpbChzbGlkZXNQZXJWaXNpYmxlV2lkdGgpLTEpKSttaW5HYXBCZXR3ZWVuU2xpZGVzXHJcbiAgICAgICAgc2V0U3R5bGUoJ2Rpdl9fc2xpZGVyQ2FyZC0tc2xpZGVDYWx1bGF0ZScsTWF0aC5jZWlsKG1hcmdpblBlclNsaWRlKSlcclxuICAgICAgICBjb25zb2xlLmxvZygobWFyZ2luUGVyU2xpZGUpKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGluaXRWYWx1ZXMoKVxyXG4gICAgfVxyXG4gICAgLy8gVXNlZWZmZWN0IGZvciBzbGlkZXIgbmV4dCBhbmQgcHJldiBidXR0b25cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdVc2UgJyxjaGlsZFNsaWRlckNhcmRSZWYpXHJcbiAgICAgICAgLy8gRXhlY3V0ZSB3aGVuIG1vdW50aW5nXHJcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSByZXF1aXJlZCB2YWx1ZXMgaW4gcGFydGljdWxhciBmdW5jdGlvblxyXG4gICAgICAgIGNhbGN1bGF0ZU1hcmdpbigpXHJcbiAgICAgICAgYXV0b1NsaWRlck1vdmUoMjAwMCx0cnVlKVxyXG4gICAgICAgIC8vIENhcHR1cmUgbmV4dCBidXR0b24gYnkgY2xhc3MgbmFtZVxyXG4gICAgICAgIGNvbnN0IG5leHRCdG4gID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmV4dCcpWzBdXHJcbiAgICAgICAgLy8gQ2FwdHVyZSBwcmV2aW91cyBidXR0b24gYnkgY2xhc3MgbmFtZVxyXG4gICAgICAgIGNvbnN0IHByZXZCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcmV2JylbMF1cclxuICAgICAgICAvLyBIYW5kbGUgY2xpY2sgZXZlbnQgZm9yIGJvdGggYnV0dG9uc1xyXG4gICAgICAgIG5leHRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT50aHJvdHRsZShjbGlja0hhbmRsZXIsJ25leHQnKSlcclxuICAgICAgICBwcmV2QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+dGhyb3R0bGUoY2xpY2tIYW5kbGVyLCdwcmV2JykpXHJcbiAgICAgICAgc2xpY2tTbGlkZXJNYWluQ29udGFpbmVyLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsKCk9PmNsZWFyQXV0b1NsaWRlck1vdmUodGltZXJJZCkpXHJcbiAgICAgICAgc2xpY2tTbGlkZXJNYWluQ29udGFpbmVyLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsKCk9PmF1dG9TbGlkZXJNb3ZlKDEwMDAsdHJ1ZSkgKVxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCgpPT57XHJcbiAgICAgICAgICAgIGRlYm91bmNlKCgpPT57XHJcbiAgICAgICAgICAgICAgICBjYWxjdWxhdGVNYXJnaW4oKTtcclxuICAgICAgICAgICAgICAgIGluaXRWYWx1ZXMoKTtcclxuICAgICAgICAgICAgICAgIHJlc2V0U2xpZGVyUG9zaXRpb24oKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuICgpPT57XHJcbiAgICAgICAgICAgIC8vIEV4ZWN1dGUgd2hlbiB1bm1vdW50aW5nIChjbGVhbnVwKVxyXG4gICAgICAgICAgICBuZXh0QnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+dGhyb3R0bGUoY2xpY2tIYW5kbGVyLCduZXh0JykpXHJcbiAgICAgICAgICAgIHByZXZCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT50aHJvdHRsZShjbGlja0hhbmRsZXIsJ3ByZXYnKSkgICAgICAgXHJcbiAgICAgICAgICAgIHNsaWNrU2xpZGVyTWFpbkNvbnRhaW5lci5jdXJyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCgpPT5jbGVhckF1dG9TbGlkZXJNb3ZlKHRpbWVySWQpKVxyXG4gICAgICAgICAgICBzbGlja1NsaWRlck1haW5Db250YWluZXIuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywoKT0+YXV0b1NsaWRlck1vdmUoMTAwMCx0cnVlKSApXHJcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCgpPT57XHJcbiAgICAgICAgICAgICAgICBkZWJvdW5jZSgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGN1bGF0ZU1hcmdpbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGluaXRWYWx1ZXMoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXNldFNsaWRlclBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9KTsgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSxbXSlcclxuICAgIGxldCB0b3VjaFN0YXJ0UG9zID0wO1xyXG4gICAgY29uc3QgdG91Y2hTdGFydEhhbmRsZXIgPSAoZSk9PntcclxuICAgICAgICB0b3VjaFN0YXJ0UG9zPWUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WDtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgpICAgXHJcbiAgICB9XHJcbiAgICBjb25zdCB0b3VjaEVuZEhhbmRsZXI9KGUpPT57XHJcbiAgICAgICAgbGV0IHRvdWNoRW5kUG9zID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYO1xyXG4gICAgICAgIGlmICh0b3VjaEVuZFBvcz09PXRvdWNoU3RhcnRQb3MpIHJldHVyblxyXG4gICAgICAgIGlmICh0b3VjaEVuZFBvcy10b3VjaFN0YXJ0UG9zPjApIGNsaWNrSGFuZGxlcigncHJldicpXHJcbiAgICAgICAgZWxzZSBjbGlja0hhbmRsZXIoJ25leHQnKVxyXG4gICAgfVxyXG4gICAgY29uc3QgZHJhZ0hhbmRsZXIgPSAoZSkgPT57XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICB9XHJcbiAgICBjb25zdCBvbkltYWdlTG9hZCA9IChpbWFnZSxpc0ltZ1JlYWR5KSA9PntcclxuICAgICAgICBpZiAoaXNJbWdSZWFkeSl7XHJcbiAgICAgICAgICAgIGltYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRpbmcnKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKCdsb2FkaW5nJylcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAvLyB1c2VFZmZlY3QgZm9yIHRvdWNoIGNhcGFiaWxpdHlcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGxldCBpbWFnZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ltYWdlSG9sZGVyJykpXHJcbiAgICAgICAgaW1hZ2VzLmZvckVhY2goKGltYWdlKT0+e1xyXG4gICAgICAgICAgICBvbkltYWdlTG9hZChpbWFnZSxmYWxzZSlcclxuICAgICAgICAgICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywoZSk9PmRyYWdIYW5kbGVyKGUpIClcclxuICAgICAgICAgICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsKGUpPT5vbkltYWdlTG9hZChpbWFnZSx0cnVlKSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIHNsaWNrU2xpZGVyTWFpbkNvbnRhaW5lci5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLChlKT0+dG91Y2hTdGFydEhhbmRsZXIoZSkse3Bhc3NpdmU6dHJ1ZX0pXHJcbiAgICAgICAgc2xpY2tTbGlkZXJNYWluQ29udGFpbmVyLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLChlKT0+dG91Y2hFbmRIYW5kbGVyKGUpLHtwYXNzaXZlOnRydWV9IClcclxuICAgICAgICAvLyBjaGlsZFNsaWRlckNhcmRSZWYuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLChlKT0+ZHJhZ0hhbmRsZXIoZSkgKVxyXG4gICAgICAgIC8vIHNsaWNrU2xpZGVyTWFpbkNvbnRhaW5lci5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsKGUpPT50b3VjaFN0YXJ0SGFuZGxlcihlKSApXHJcbiAgICAgICAgcmV0dXJuICgpPT4ge1xyXG4gICAgICAgICAgICBzbGlja1NsaWRlck1haW5Db250YWluZXIuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywoZSk9PnRvdWNoU3RhcnRIYW5kbGVyKGUpIClcclxuICAgICAgICAgICAgc2xpY2tTbGlkZXJNYWluQ29udGFpbmVyLmN1cnJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLChlKT0+dG91Y2hFbmRIYW5kbGVyKGUpLHtwYXNzaXZlOnRydWV9KVxyXG4gICAgICAgICAgICBpbWFnZXMuZm9yRWFjaCgoaW1hZ2UpPT57XHJcbiAgICAgICAgICAgICAgICBpbWFnZS5yZW1vdmVFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLChlKT0+ZHJhZ0hhbmRsZXIoZSkgKVxyXG4gICAgICAgICAgICAgICAgaW1hZ2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsKGUpPT5vbkltYWdlTG9hZChlKSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLy8gc2xpY2tTbGlkZXJNYWluQ29udGFpbmVyLmN1cnJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywoZSk9PnRvdWNoU3RhcnRIYW5kbGVyKGUpKVxyXG4gICAgICAgICAgICAvLyB0aHJvdHRsZSh0b3VjaFN0YXJ0SGFuZGxlciwyMDAwLGUpIFxyXG4gICAgICAgIH1cclxuICAgIH0sW10pXHJcbiAgICBjb25zdCBbbGVmdEFycm93RGlzcGxheSxzaG93TGVmdEFycm93XT0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbcmlnaHRBcnJvd0Rpc3BsYXksc2hvd1JpZ2h0QXJyb3ddPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IGxlZnRTdHlsZSA9IHtkaXNwbGF5OmxlZnRBcnJvd0Rpc3BsYXk/XCJpbmxpbmUtYmxvY2tcIjpcIm5vbmVcIn1cclxuICAgIGNvbnN0IHJpZ2h0U3R5bGUgPSB7ZGlzcGxheTpyaWdodEFycm93RGlzcGxheT9cImlubGluZS1ibG9ja1wiOlwibm9uZVwifVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJ2aXNpYmxlRGl2XCIgcmVmPXtzbGlja1NsaWRlck1haW5Db250YWluZXJ9ICBjbGFzc05hbWU9e3N0eWxlcy5Dc2xpY2sgKyAnIHNsaWNrTWFpbkNvbnRhaW5lckRpdiAnfT5cclxuICAgICAgICAgICAgPGkgc3R5bGU9e2xlZnRTdHlsZX0gIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbisnIHByZXYgJ30+UHJldjwvaT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgcmVmPXtkaXZDYXJkc0NvbnRhaW5lcn0gY2xhc3NOYW1lPXtzdHlsZXMuc2xpY2srICcgaW1nQ29tcCAnfT5cclxuICAgICAgICAgICAgPEltZyByZWY9e2NoaWxkU2xpZGVyQ2FyZFJlZn0gaW1nQXJyPXtpbWdBcnJ9IHN0eWxlSW1nPXtzdHlsZUltZ30gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPGkgIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbisnIG5leHQgJ30+TmV4dDwvaT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8cCBzdHlsZT17cmlnaHRTdHlsZX0gaWQ9e3N0eWxlc1snaWRlYSddfSA+aGV5PC9wPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsaWNrU2xpZGVyO1xyXG4gICAvLyBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAvLyAgICAgaWQ9aWQrMjtcclxuICAgIC8vICAgICBpbWdBcnJVcGR0KFsuLi5pbWdTdGF0ZSwgICB7XHJcbiAgICAvLyAgICAgICAgICdzcmMnOidzdGF0aWMvcGVyMS5qcGcnLFxyXG4gICAgLy8gICAgICAgICBpZDppZCxcclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgICAgJ3NyYyc6J3N0YXRpYy9wZXIyLmpwZycsXHJcbiAgICAvLyAgICAgICAgIGlkOmlkKzEsXHJcbiAgICAvLyAgICAgfV0pXHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coaWQpXHJcbiAgICAgICAgXHJcbiAgICAvLyB9LDEwMDAwKVxyXG4vLyBlbHNlIGlmKGxlZnQ+IC1zbGlkZXNUb1Njcm9sbFdpZHRoKXtcclxuLy8gICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLSR7MH1weClgO1xyXG4vLyAgICAgbmV4dFB4VmFsdWVUb1NjcmwgPSAtc2xpZGVzVG9TY3JvbGxXaWR0aDsgXHJcbi8vICAgICBwcmV2UHhWYWx1ZVRvU2NybCA9IHNsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbi8vIH1cclxuLy8gY29uc3QgY2xpY2tIYW5kbGVyID0gKGRpcmVjdGlvbik9PnsgXHJcbi8vICAgICBjb25zdCBsZWZ0ID0gZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0XHJcbi8vICAgICBjb25zb2xlLmxvZyhuZXh0UHhWYWx1ZVRvU2NybCwtZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aCtzbGlkZXJWaXNpYmxlV2lkdGgpXHJcbi8vICAgICBpZiAoZGlyZWN0aW9uID09PSAnbmV4dCcpe1xyXG4gICAgICAgIFxyXG4vLyAgICAgICAgIGlmKG5leHRQeFZhbHVlVG9TY3JsLC1kaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoK3NsaWRlclZpc2libGVXaWR0aCl7XHJcbi8vICAgICAgICAgICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLSR7MH1weClgO1xyXG4vLyAgICAgICAgICAgICBuZXh0UHhWYWx1ZVRvU2NybCA9IC1zbGlkZXNUb1Njcm9sbFdpZHRoOyBcclxuLy8gICAgICAgICAgICAgcHJldlB4VmFsdWVUb1NjcmwgPSBzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4vLyAgICAgICAgIH1lbHNlIGlmIChkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoLXNsaWRlclZpc2libGVXaWR0aDwgLW5leHRQeFZhbHVlVG9TY3JsKSB7XHJcbi8vICAgICAgICAgICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHstZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aCtzbGlkZXJWaXNpYmxlV2lkdGh9cHgpYFxyXG4vLyAgICAgICAgICAgICBuZXh0UHhWYWx1ZVRvU2NybCA9IC1kaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoK3NsaWRlclZpc2libGVXaWR0aFxyXG4vLyAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBcclxuLy8gICAgICAgICAgICAgZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zdHlsZS5jc3NUZXh0ID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgke25leHRQeFZhbHVlVG9TY3JsfXB4KWBcclxuLy8gICAgICAgICAgICAgZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zY3JvbGxMZWZ0ID0gc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuLy8gICAgICAgICAgICAgcHJldlB4VmFsdWVUb1NjcmwgPSBwcmV2UHhWYWx1ZVRvU2NybC1zbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4vLyAgICAgICAgICAgICBuZXh0UHhWYWx1ZVRvU2NybCA9IG5leHRQeFZhbHVlVG9TY3JsLXNsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbi8vICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4vLyAgICAgfWVsc2UgaWYoZGlyZWN0aW9uID09PSAncHJldicpe1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKHByZXZQeFZhbHVlVG9TY3JsKVxyXG4vLyAgICAgICAgIGNvbnN0IGxlZnQgPSBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcbi8vICAgICAgICAgaWYocHJldlB4VmFsdWVUb1Njcmw+MCl7XHJcbi8vICAgICAgICAgICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLSR7MH1weClgO1xyXG4vLyAgICAgICAgICAgICBuZXh0UHhWYWx1ZVRvU2NybCA9IC1zbGlkZXNUb1Njcm9sbFdpZHRoOyBcclxuLy8gICAgICAgICAgICAgcHJldlB4VmFsdWVUb1NjcmwgPSBzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4vLyAgICAgICAgIH1lbHNle1xyXG4vLyAgICAgICAgICAgICBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR7cHJldlB4VmFsdWVUb1Njcmx9cHgpYDtcclxuLy8gICAgICAgICAgICAgbmV4dFB4VmFsdWVUb1NjcmwgPW5leHRQeFZhbHVlVG9TY3JsICtzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4vLyAgICAgICAgICAgICBwcmV2UHhWYWx1ZVRvU2NybCA9IHByZXZQeFZhbHVlVG9TY3JsK3NsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbi8vICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4vLyAgICAgfVxyXG4vLyAvLyB9XHJcbi8vIGNvbnN0IGxlZnQgPSBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcbi8vIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc2Nyb2xsTGVmdCA9IHNsaWRlc1RvU2Nyb2xsV2lkdGg7Il0sInNvdXJjZVJvb3QiOiIifQ==