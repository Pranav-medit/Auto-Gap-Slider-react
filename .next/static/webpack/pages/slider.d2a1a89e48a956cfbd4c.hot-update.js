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
/* harmony import */ var _autoGapSlider_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./autoGapSlider.module.scss */ "./components/autoGapSlider.module.scss");
/* harmony import */ var _autoGapSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_autoGapSlider_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\prana\\Documents\\VSCode\\React\\react hooks\\hook1\\components\\autoGapSlider.js",
    _this = undefined,
    _s = $RefreshSig$();




var Img = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(_c = function _c(_ref, childSliderCardRef) {
  var styleImg = _ref.styleImg,
      imgArr = _ref.imgArr;
  // let imageSlide = useRef(null);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: imgArr.map(function (src, index) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        ref: childSliderCardRef,
        style: styleImg,
        className: (_autoGapSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Img) + ' div div__sliderCard div__sliderCard--slideCalulate ',
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          loading: "lazy",
          style: {},
          src: src.src,
          className: (_autoGapSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().sliderImg) + ' imageHolder ',
          alt: ""
        }, src.id, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 25
        }, _this)
      }, src.id, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 21
      }, _this);
    })
  }, void 0, false);
});
_c2 = Img;

var AutoGapSlider = function AutoGapSlider() {
  _s();

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
  }, {
    'src': 'static/s1.jpg',
    id: 13
  }, {
    'src': 'static/s2.jpg',
    id: 14
  }, {
    'src': 'static/s3.jpg',
    id: 15
  }, {
    'src': 'static/s4.jpg',
    id: 16
  }, {
    'src': 'static/s5.jpg',
    id: 17
  }, {
    'src': 'static/s6.jpg',
    id: 18
  }, {
    'src': 'static/s7.jpg',
    id: 19
  }, {
    'src': 'static/s8.jpg',
    id: 20
  }, {
    'src': 'static/s9.jpg',
    id: 21
  }, {
    'src': 'static/s10.jpg',
    id: 22
  }, {
    'src': 'https://picsum.photos/200/300',
    id: 23
  }, {
    'src': 'https://picsum.photos/1200/2300',
    id: 24
  }, {
    'src': 'https://picsum.photos/1200/2300',
    id: 25
  }]; // Each slider card

  var childSliderCardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(); // Parent of slider cards , div holding all slide cards

  var divCardsContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(); // Slider containing cards container and prev, next buttons.

  var autoGapSliderMainContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(); // Grabbing next button

  var nextButton = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(); // Grabbing prev button

  var prevButton = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(imgArrData),
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
  };

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),
      dummy = _useState4[0],
      du = _useState4[1]; // Initialize default values


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
      window.addEventListener('resize', function () {
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

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
      leftArrowDisplay = _useState5[0],
      showLeftArrow = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
      rightArrowDisplay = _useState6[0],
      showRightArrow = _useState6[1];

  var leftStyle = {
    display: leftArrowDisplay ? "inline-block" : "none"
  };
  var rightStyle = {
    display: rightArrowDisplay ? "inline-btranslateX(translateValue)lock" : "none"
  };
  var sliderStyle = {
    transform: "translateX(".concat(translateValue + 'px', ")") || 0
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      id: "visibleDiv",
      ref: autoGapSliderMainContainer,
      className: (_autoGapSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().CautoGap) + ' autoGapMainContainerDiv ',
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        ref: prevButton,
        style: leftStyle,
        className: (_autoGapSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().button) + ' prev ',
        children: "Prev"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 417,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        ref: divCardsContainer,
        className: (_autoGapSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().autoGap) + ' imgComp ',
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Img, {
          ref: childSliderCardRef,
          imgArr: imgArr,
          styleImg: styleImg
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 420,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 419,
        columnNumber: 13
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        ref: nextButton,
        style: rightStyle,
        className: (_autoGapSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().button) + ' next ',
        children: "Next"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 422,
        columnNumber: 12
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 416,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      id: (_autoGapSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().idea),
      children: "hey"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 424,
      columnNumber: 9
    }, _this)]
  }, void 0, true);
};

_s(AutoGapSlider, "Cm8KxQeGA9/jPn5EVauQXynjimo=");

_c3 = AutoGapSlider;
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

var _c, _c2, _c3;

$RefreshReg$(_c, "Img$forwardRef");
$RefreshReg$(_c2, "Img");
$RefreshReg$(_c3, "AutoGapSlider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRvR2FwU2xpZGVyLmpzIl0sIm5hbWVzIjpbIkltZyIsImZvcndhcmRSZWYiLCJjaGlsZFNsaWRlckNhcmRSZWYiLCJzdHlsZUltZyIsImltZ0FyciIsIm1hcCIsInNyYyIsImluZGV4Iiwic3R5bGVzIiwiaWQiLCJBdXRvR2FwU2xpZGVyIiwiaW1nQXJyRGF0YSIsInVzZVJlZiIsImRpdkNhcmRzQ29udGFpbmVyIiwiYXV0b0dhcFNsaWRlck1haW5Db250YWluZXIiLCJuZXh0QnV0dG9uIiwicHJldkJ1dHRvbiIsInVzZVN0YXRlIiwiaW1nQXJyVXBkdCIsImltYWdlVXBkYXRlQXJyIiwidGltZXJJZCIsInNsaWRlTWFyZ2luIiwidXBkYXRlU2xpZGVNYXJnaW4iLCJ0cmFuc2xhdGVWYWx1ZSIsInVwZGF0ZVRyYW5zbGF0ZVZhbHVlIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJkdW1teSIsImR1Iiwic2xpZGVyVmlzaWJsZVdpZHRoIiwiZWFjaFNsaWRlV2lkdGgiLCJzbGlkZXNUb1Njcm9sbCIsInNsaWRlc1RvU2Nyb2xsV2lkdGgiLCJuZXh0UHhWYWx1ZVRvU2NybCIsInByZXZQeFZhbHVlVG9TY3JsIiwiZGl2Q2FyZHNDb250YWluZXJUb3RhbFdpZHRoIiwiZW5kT2ZTbGlkZSIsInRocm90dGxlIiwiXyIsImZ1bmMiLCJhcmdzIiwiZGVib3VuY2UiLCJyZXNldFNsaWRlclBvc2l0aW9uIiwiY3VycmVudCIsInN0eWxlIiwiY3NzVGV4dCIsImRpc3BsYXlBcnJvdyIsIm9mZnNldFdpZHRoIiwiZGlyZWN0aW9uIiwidG9EaXNwbGF5Iiwic2hvd0xlZnRBcnJvdyIsInNob3dSaWdodEFycm93IiwidXBkYXRlU2xpZGVyUG9zaXRpb25SZWYiLCJ1cGRhdGVyZWYiLCJ1cGRhdGVTbGlkZXJBcnJheSIsIm5ld0VsZW1lbnQiLCJjb25jYXQiLCJjbGlja0hhbmRsZXIiLCJpbml0VmFsdWVzIiwiZWFjaFNsaWRlIiwiZWFjaFNsaWRlTWFyZ2luIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIm1hcmdpblJpZ2h0Iiwic2xpY2UiLCJOdW1iZXIiLCJjb25zb2xlIiwibG9nIiwiYXV0b1NsaWRlck1vdmUiLCJ0aW1lb3V0IiwiYXV0b3BsYXkiLCJzZXRJbnRlcnZhbCIsImNsZWFyQXV0b1NsaWRlck1vdmUiLCJjbGVhclRpbWVvdXQiLCJzZXRTdHlsZSIsImNsYXNzTmFtZSIsInN0eWxlVmFsdWUiLCJjYWxjdWxhdGVNYXJnaW4iLCJtaW5HYXBCZXR3ZWVuU2xpZGVzIiwic2xpZGVzUGVyVmlzaWJsZVdpZHRoIiwibWFyZ2luVG9TZXRJblBlcmNlbnRhZ2UiLCJNYXRoIiwiZmxvb3IiLCJtYXJnaW5Ub1NldEluUHgiLCJtYXJnaW5QZXJTbGlkZSIsImNlaWwiLCJ1c2VFZmZlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNldFRpbWVvdXQiLCJ0b3VjaFN0YXJ0UG9zIiwidG91Y2hTdGFydEhhbmRsZXIiLCJlIiwiY2hhbmdlZFRvdWNoZXMiLCJjbGllbnRYIiwidG91Y2hFbmRIYW5kbGVyIiwidG91Y2hFbmRQb3MiLCJkcmFnSGFuZGxlciIsInByZXZlbnREZWZhdWx0Iiwib25JbWFnZUxvYWQiLCJpbWFnZSIsImlzSW1nUmVhZHkiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJpbWFnZXMiLCJBcnJheSIsImZyb20iLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJmb3JFYWNoIiwicGFzc2l2ZSIsImxlZnRBcnJvd0Rpc3BsYXkiLCJyaWdodEFycm93RGlzcGxheSIsImxlZnRTdHlsZSIsImRpc3BsYXkiLCJyaWdodFN0eWxlIiwic2xpZGVyU3R5bGUiLCJ0cmFuc2Zvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsR0FBRyxnQkFBR0MsaURBQVUsTUFBQyxr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QUVEO0FBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEosZUFNRztBQUFHLFdBQUcsRUFBRVksVUFBUjtBQUFvQixhQUFLLEVBQUVzRyxVQUEzQjtBQUF1QyxpQkFBUyxFQUFFN0csMEVBQUEsR0FBYyxRQUFoRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5IO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURBLGVBU0E7QUFBSSxRQUFFLEVBQUVBLHdFQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEE7QUFBQSxrQkFESjtBQWFILENBeFpEOztHQUFNRSxhOztNQUFBQSxhO0FBMFpOLCtEQUFlQSxhQUFmLEUsQ0FDRztBQUNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NsaWRlci5kMmExYTg5ZTQ4YTk1NmNmYmQ0Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VSZWYsZm9yd2FyZFJlZiwgdXNlRWZmZWN0LHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9hdXRvR2FwU2xpZGVyLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCJcclxuXHJcbmNvbnN0IEltZyA9IGZvcndhcmRSZWYoKHtzdHlsZUltZyxpbWdBcnJ9LGNoaWxkU2xpZGVyQ2FyZFJlZikgPT57XHJcbiAgICAvLyBsZXQgaW1hZ2VTbGlkZSA9IHVzZVJlZihudWxsKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge2ltZ0Fyci5tYXAoKHNyYyxpbmRleCk9PntcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3NyYy5pZH0gIHJlZj17Y2hpbGRTbGlkZXJDYXJkUmVmfSBzdHlsZT17c3R5bGVJbWd9ICBjbGFzc05hbWU9e3N0eWxlcy5JbWcrJyBkaXYgZGl2X19zbGlkZXJDYXJkIGRpdl9fc2xpZGVyQ2FyZC0tc2xpZGVDYWx1bGF0ZSAnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBrZXk9e3NyYy5pZH0gbG9hZGluZz0nbGF6eScgc3R5bGU9e3t9fSBzcmM9e3NyYy5zcmN9ICAgY2xhc3NOYW1lPXtzdHlsZXMuc2xpZGVySW1nICsgJyBpbWFnZUhvbGRlciAnfSAgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0pXHJcbmNvbnN0IEF1dG9HYXBTbGlkZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBpbWdBcnJEYXRhID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zMS5qcGcnLFxyXG4gICAgICAgICAgICBpZDoxLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3MyLmpwZycsXHJcbiAgICAgICAgICAgIGlkOjIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczMuanBnJyxcclxuICAgICAgICAgICAgaWQ6MyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zNC5qcGcnLFxyXG4gICAgICAgICAgICBpZDo0LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3M1LmpwZycsXHJcbiAgICAgICAgICAgIGlkOjUsXHJcbiAgICAgICAgfSx7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczYuanBnJyxcclxuICAgICAgICAgICAgaWQ6NixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zNy5qcGcnLFxyXG4gICAgICAgICAgICBpZDo3LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3M4LmpwZycsXHJcbiAgICAgICAgICAgIGlkOjgsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczkuanBnJyxcclxuICAgICAgICAgICAgaWQ6OSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zMTAuanBnJyxcclxuICAgICAgICAgICAgaWQ6MTAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidodHRwczovL3BpY3N1bS5waG90b3MvMjAwLzMwMCcsXHJcbiAgICAgICAgICAgIGlkOjExLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzEyMDAvMjMwMCcsXHJcbiAgICAgICAgICAgIGlkOjEyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3MxLmpwZycsXHJcbiAgICAgICAgICAgIGlkOjEzLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3MyLmpwZycsXHJcbiAgICAgICAgICAgIGlkOjE0LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3MzLmpwZycsXHJcbiAgICAgICAgICAgIGlkOjE1LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3M0LmpwZycsXHJcbiAgICAgICAgICAgIGlkOjE2LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3M1LmpwZycsXHJcbiAgICAgICAgICAgIGlkOjE3LFxyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3M2LmpwZycsXHJcbiAgICAgICAgICAgIGlkOjE4LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3M3LmpwZycsXHJcbiAgICAgICAgICAgIGlkOjE5LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3M4LmpwZycsXHJcbiAgICAgICAgICAgIGlkOjIwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3M5LmpwZycsXHJcbiAgICAgICAgICAgIGlkOjIxLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3MxMC5qcGcnLFxyXG4gICAgICAgICAgICBpZDoyMixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J2h0dHBzOi8vcGljc3VtLnBob3Rvcy8yMDAvMzAwJyxcclxuICAgICAgICAgICAgaWQ6MjMsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidodHRwczovL3BpY3N1bS5waG90b3MvMTIwMC8yMzAwJyxcclxuICAgICAgICAgICAgaWQ6MjQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidodHRwczovL3BpY3N1bS5waG90b3MvMTIwMC8yMzAwJyxcclxuICAgICAgICAgICAgaWQ6MjUsXHJcbiAgICAgICAgfSxcclxuICAgIFxyXG4gICAgXVxyXG4gICAgLy8gRWFjaCBzbGlkZXIgY2FyZFxyXG4gICAgY29uc3QgY2hpbGRTbGlkZXJDYXJkUmVmID0gdXNlUmVmKCk7XHJcbiAgICAvLyBQYXJlbnQgb2Ygc2xpZGVyIGNhcmRzICwgZGl2IGhvbGRpbmcgYWxsIHNsaWRlIGNhcmRzXHJcbiAgICBjb25zdCBkaXZDYXJkc0NvbnRhaW5lciA9IHVzZVJlZigpOyAgIFxyXG4gICAgLy8gU2xpZGVyIGNvbnRhaW5pbmcgY2FyZHMgY29udGFpbmVyIGFuZCBwcmV2LCBuZXh0IGJ1dHRvbnMuXHJcbiAgICBjb25zdCBhdXRvR2FwU2xpZGVyTWFpbkNvbnRhaW5lciA9IHVzZVJlZigpO1xyXG4gICAgLy8gR3JhYmJpbmcgbmV4dCBidXR0b25cclxuICAgIGNvbnN0IG5leHRCdXR0b24gPSB1c2VSZWYoKTtcclxuICAgIC8vIEdyYWJiaW5nIHByZXYgYnV0dG9uXHJcbiAgICBjb25zdCBwcmV2QnV0dG9uID0gdXNlUmVmKCk7XHJcbiAgICBjb25zdCBbaW1nQXJyLGltZ0FyclVwZHRdID0gdXNlU3RhdGUoaW1nQXJyRGF0YSlcclxuICAgIGxldCBpbWFnZVVwZGF0ZUFycj1pbWdBcnI7XHJcbiAgICBsZXQgaWQgPSAxMjtcclxuICAgIGxldCB0aW1lcklkO1xyXG4gICAgY29uc3QgW3NsaWRlTWFyZ2luLHVwZGF0ZVNsaWRlTWFyZ2luXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW3RyYW5zbGF0ZVZhbHVlLHVwZGF0ZVRyYW5zbGF0ZVZhbHVlXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3Qgc3R5bGVJbWcgPSB7XHJcbiAgICAgICAgd2lkdGg6JzIwMHB4JyxcclxuICAgICAgICBoZWlnaHQ6JzMwMHB4JyxcclxuICAgICAgICBtYXJnaW46YDAgJHtzbGlkZU1hcmdpbi8yfXB4IDAgJHtzbGlkZU1hcmdpbi8yfXB4YFxyXG4gICAgfTtcclxuICAgIGxldCBbZHVtbXksZHVdID0gdXNlU3RhdGUoKTtcclxuICAgIC8vIEluaXRpYWxpemUgZGVmYXVsdCB2YWx1ZXNcclxuICAgIGxldCBzbGlkZXJWaXNpYmxlV2lkdGg9MDtcclxuICAgIGxldCBlYWNoU2xpZGVXaWR0aCA9IDA7XHJcbiAgICBsZXQgc2xpZGVzVG9TY3JvbGwgPSAwO1xyXG4gICAgbGV0IHNsaWRlc1RvU2Nyb2xsV2lkdGg9MDtcclxuICAgIGxldCBuZXh0UHhWYWx1ZVRvU2NybCA9IDA7IFxyXG4gICAgbGV0IHByZXZQeFZhbHVlVG9TY3JsID0gMDtcclxuICAgIGxldCBkaXZDYXJkc0NvbnRhaW5lclRvdGFsV2lkdGg9MDtcclxuICAgIC8vIERldGVjdCBpZiB3ZSByZWFjaGVkIGVuZCBvZiB0aGUgc2xpZGVzXHJcbiAgICBsZXQgZW5kT2ZTbGlkZSA9IGZhbHNlXHJcbiAgICAvLyBMb2FkYXNoIHRocm90dGxlciB0byB0aHJvdHRsZSByZXNpemUgYW5kIGlmIHVzZXIgY2xpY2tzIGJ1dHRvbiBtYW55IHRpbWVzIFxyXG4gICAgbGV0IHRocm90dGxlID0gXy50aHJvdHRsZSgoZnVuYywuLi5hcmdzKT0+IHtcclxuICAgICAgICBmdW5jKC4uLmFyZ3MpXHJcbiAgICB9LCA2MDApO1xyXG4gICAgbGV0IGRlYm91bmNlID0gXy5kZWJvdW5jZSgoZnVuYywuLi5hcmdzKT0+IHtcclxuICAgICAgICBmdW5jKC4uLmFyZ3MpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2RlaWJvdW5jJylcclxuICAgIH0sIDgwMCk7XHJcbiAgICBjb25zdCByZXNldFNsaWRlclBvc2l0aW9uID0gKCkgPT57XHJcbiAgICAgICAgLy8gZGVmYXVsdCBzbGlkZXNUb1Njcm9sbFdpZHRoOjI0MHB4XHJcbiAgICAgICAgbmV4dFB4VmFsdWVUb1NjcmwgPSAtc2xpZGVzVG9TY3JvbGxXaWR0aDsgXHJcbiAgICAgICAgcHJldlB4VmFsdWVUb1NjcmwgPSBzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4gICAgICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLSR7MH1weClgO1xyXG4gICAgICAgIGRpc3BsYXlBcnJvdygncHJldicsZmFsc2UpXHJcbiAgICAgICAgZGl2Q2FyZHNDb250YWluZXJUb3RhbFdpZHRoID0gZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aFxyXG4gICAgfVxyXG4gICAgY29uc3QgZGlzcGxheUFycm93PShkaXJlY3Rpb249J3ByZXYnLHRvRGlzcGxheT10cnVlKT0+e1xyXG4gICAgICAgIGlmIChkaXJlY3Rpb249PT0ncHJldicpe1xyXG4gICAgICAgICAgICBpZiAgKCF0b0Rpc3BsYXkpc2hvd0xlZnRBcnJvdyhmYWxzZSlcclxuICAgICAgICAgICAgZWxzZSBzaG93TGVmdEFycm93KHRydWUpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlmICAoIXRvRGlzcGxheSlzaG93UmlnaHRBcnJvdyhmYWxzZSlcclxuICAgICAgICAgICAgZWxzZSBzaG93UmlnaHRBcnJvdyh0cnVlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHVwZGF0ZVNsaWRlclBvc2l0aW9uUmVmID0gKHVwZGF0ZXJlZikgPT57XHJcbiAgICAgICAgLy8gdHJhbnNsYXRlWCgwKSAtPiBpbml0aWFsIHBvc2l0aW9uLCBzdGFydGluZyBwb3NpdGlvblxyXG4gICAgICAgIC8vIHRyYW5zbGF0ZVgoLTI0MHB4KSAtPiBtb3ZlcyBzbGlkZSBpbiAtPiBkaXJlY3Rpb24gYnkgMjQwcHgoZWFjaCBzbGlkZSB3aWR0aCBieSBkZWZhdWx0KVxyXG4gICAgICAgIGlmICh1cGRhdGVyZWYgPT09ICduZXh0Jyl7XHJcbiAgICAgICAgICAgIC8vIG1pbnVzIHBvc2l0aW9uIGdvZXMgLT4gZGlyZWN0aW9uIG9uIHRyYW5zbGF0ZVxyXG4gICAgICAgICAgICAvLyBleDogcHJldlB4VmFsdWVUb1Njcmw9MjQwLG5leHRQeFZhbHVlVG9TY3JsPS0yNDAgIGFuZCBzbGlkZXNUb1Njcm9sbFdpZHRoPTI0MFxyXG4gICAgICAgICAgICBwcmV2UHhWYWx1ZVRvU2NybCA9IHByZXZQeFZhbHVlVG9TY3JsLXNsaWRlc1RvU2Nyb2xsV2lkdGg7IFxyXG4gICAgICAgICAgICAvLyBmaXJzdC10aW1lOnByZXZQeFZhbHVlVG9TY3JsOjBcclxuICAgICAgICAgICAgLy8gc2Vjb25kLXRpbWU6cHJldlB4VmFsdWVUb1Njcmw6LTI0MFxyXG4gICAgICAgICAgICBuZXh0UHhWYWx1ZVRvU2NybCA9IG5leHRQeFZhbHVlVG9TY3JsLXNsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbiAgICAgICAgICAgIC8vIGZpcnN0LXRpbWU6bmV4dFB4VmFsdWVUb1Njcmw6LTQ4MFxyXG4gICAgICAgICAgICAvLyBzZWNvbmQtdGltZTpuZXh0UHhWYWx1ZVRvU2NybDotNzIwXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIC8vIGV4OiBwcmV2UHhWYWx1ZVRvU2NybD0tMjQwLG5leHRQeFZhbHVlVG9TY3JsPS03MjAgIGFuZCBzbGlkZXNUb1Njcm9sbFdpZHRoPTI0MFxyXG4gICAgICAgICAgICBuZXh0UHhWYWx1ZVRvU2NybCA9bmV4dFB4VmFsdWVUb1NjcmwgK3NsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbiAgICAgICAgICAgIC8vIGZpcnN0LXRpbWU6cHJldlB4VmFsdWVUb1Njcmw6NDgwXHJcbiAgICAgICAgICAgIC8vIHNlY29uZC10aW1lOnByZXZQeFZhbHVlVG9TY3JsOjYyMFxyXG4gICAgICAgICAgICBwcmV2UHhWYWx1ZVRvU2NybCA9IHByZXZQeFZhbHVlVG9TY3JsK3NsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbiAgICAgICAgICAgIC8vIGZpcnN0LXRpbWU6bmV4dFB4VmFsdWVUb1Njcmw6MFxyXG4gICAgICAgICAgICAvLyBzZWNvbmQtdGltZTpuZXh0UHhWYWx1ZVRvU2NybDoyNDBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCB1cGRhdGVTbGlkZXJBcnJheSA9ICgpID0+e1xyXG4gICAgICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICdzcmMnOidzdGF0aWMvcGVyMS5qcGcnLFxyXG4gICAgICAgICAgICAgICAgaWQ6aWQsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICdzcmMnOidzdGF0aWMvcGVyMi5qcGcnLFxyXG4gICAgICAgICAgICAgICAgaWQ6aWQrMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICAgIC8vIGltZ0Fyci5wdXNoKC4uLm5ld0VsZW1lbnQpXHJcbiAgICAgICAgaW1hZ2VVcGRhdGVBcnIgPSAgaW1hZ2VVcGRhdGVBcnIuY29uY2F0KG5ld0VsZW1lbnQpXHJcbiAgICAgICAgaW1nQXJyVXBkdChpbWFnZVVwZGF0ZUFyciApO1xyXG4gICAgICAgIGRpdkNhcmRzQ29udGFpbmVyVG90YWxXaWR0aCA9IGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQub2Zmc2V0V2lkdGhcclxuICAgICAgICBpZCA9IGlkKzI7XHJcbiAgICAgICAgLy8gLy8gY29uc29sZS5sb2coaW1nQXJyRGF0YSlcclxuICAgICAgICAvLyBjbGlja0hhbmRsZXIoJ25leHQnKVxyXG4gICAgfVxyXG4gICAgY29uc3QgY2xpY2tIYW5kbGVyID0gKGRpcmVjdGlvbik9PnsgXHJcbiAgICAgICAgLy8gSWYgbmV4dCBidXR0b24gaXMgY2xpY2tlZFxyXG4gICAgICAgIC8vIGRpdkNhcmRzQ29udGFpbmVyVG90YWxXaWR0aCA9IGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQub2Zmc2V0V2lkdGhcclxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAnbmV4dCcpe1xyXG4gICAgICAgICAgICBkaXNwbGF5QXJyb3coJ3ByZXYnLHRydWUpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBJZiByZWFjaGVkIGVuZCBvZiBzbGlkZSByZXR1cm4gdG8gZmlyc3Qgc2xpZGVcclxuICAgICAgICAgICAgaWYoZW5kT2ZTbGlkZSl7ICBcclxuICAgICAgICAgICAgICAgIC8vIFJldHVybiB0byBmaXJzdCBzbGlkZSBhbmQgcmVzZXQgcG9zaXRpb25zIG9mIHNjcm9sbCByZWZlcmVuY2VcclxuICAgICAgICAgICAgICAgIHJlc2V0U2xpZGVyUG9zaXRpb24oKVxyXG4gICAgICAgICAgICAgICAgZW5kT2ZTbGlkZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAvLyBleDogc2F5IGRpdkNhcmRzQ29udGFpbmVyVG90YWxXaWR0aCA9IDIzNjA7IGFuZCBzbGlkZXJWaXNpYmxlV2lkdGggPSAxMzM2IGFuZCBuZXh0UHhWYWx1ZVRvU2NybCA9IC0xNDQwIHRoZW5cclxuICAgICAgICAgICAgICAgIC8vIHNsaWRlclZpc2libGVXaWR0aCBpcyBzbGlkZXIgd2lkdGggd2hpY2ggaXMgdmlzaWJsZSB0byB1c2VyXHJcbiAgICAgICAgICAgICAgICAvLyBkaXZDYXJkc0NvbnRhaW5lclRvdGFsV2lkdGggaXMgdG90YWwgd2lkdGggb2YgY29udGFpbmVyIGhvbGRpbmcgY2FyZHMgPSAgdmlzaWJsZSBhcmVhK2hpZGRlbiBhcmVhXHJcbiAgICAgICAgICAgIH1lbHNlIGlmICgoZGl2Q2FyZHNDb250YWluZXJUb3RhbFdpZHRoLXNsaWRlclZpc2libGVXaWR0aC1zbGlkZU1hcmdpbi0xMCk8PSAtbmV4dFB4VmFsdWVUb1NjcmwpIHtcclxuICAgICAgICAgICAgICAgIC8vIElmIHNsaWRlIGlzIGFib3V0IHRvIHJlYWNoIGxhc3Qgc2xpZGUgLCBsYXN0IGJ1dCBvbmUgY2xpY2sgb2YgZW5kb2ZzbGlkZVxyXG4gICAgICAgICAgICAgICAgZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zdHlsZS5jc3NUZXh0ID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgkey1kaXZDYXJkc0NvbnRhaW5lclRvdGFsV2lkdGgrc2xpZGVyVmlzaWJsZVdpZHRofXB4KWBcclxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBzbGlkZXIgcG9zaXRpb24gcmVmZXJlbmNlLCBwYXNzICduZXh0JyB0byB1cGRhdGUgcmVmcmVuY2Ugd2l0aCByZXNwZWN0IHRvIG5leHQgYnV0dG9uIGNsaWNrXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVTbGlkZXJQb3NpdGlvblJlZignbmV4dCcpXHJcbiAgICAgICAgICAgICAgICBlbmRPZlNsaWRlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgLy8gdXBkYXRlU2xpZGVyQXJyYXkoKVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIC8vIElmIGV2ZXJ5dGhpbmcgaXMgcmlnaHQgdHJhbnNsYXRlIHRvIG5leHQgcHggdmFsdWVcclxuICAgICAgICAgICAgICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHtuZXh0UHhWYWx1ZVRvU2NybH1weClgXHJcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgc2xpZGVyIHBvc2l0aW9uIHJlZmVyZW5jZSwgcGFzcyAnbmV4dCcgdG8gdXBkYXRlIHJlZnJlbmNlIHdpdGggcmVzcGVjdCB0byBuZXh0IGJ1dHRvbiBjbGlja1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlU2xpZGVyUG9zaXRpb25SZWYoJ25leHQnKVxyXG4gICAgICAgICAgICAgICAgZW5kT2ZTbGlkZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZSBpZihkaXJlY3Rpb24gPT09ICdwcmV2Jyl7XHJcbiAgICAgICAgICAgIC8vIEVuZCBvZiBzbGlkZSBjYW5ub3QgYmUgcmVhY2hlZCBieSBjbGlja2luZyBwcmV2aW91cyBidXR0b25cclxuICAgICAgICAgICAgZW5kT2ZTbGlkZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIGlmKHByZXZQeFZhbHVlVG9TY3JsPjApe1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheUFycm93KCdwcmV2JyxmYWxzZSlcclxuICAgICAgICAgICAgICAgIC8vIElmIHNsaWRlciBpcyBvdmVyIGxlZnQgcmV0dXJuIHRvIGZpcnN0IHNsaWRlIGFuZCByZXNldCBwb3NpdGlvbnMgb2Ygc2Nyb2xsIHJlZmVyZW5jZVxyXG4gICAgICAgICAgICAgICAgLy8gZXg6IHNheSBieSBkZWZhdWx0IHJlZmVyZW5jZSBwcmV2UHhWYWx1ZVRvU2NybCBpcyBzZXQgdG8gMjQwcHggaGVuY2UgdGhpcyBpcyBleGVjdXRlZFxyXG4gICAgICAgICAgICAgICAgcmVzZXRTbGlkZXJQb3NpdGlvbigpXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheUFycm93KCdwcmV2Jyx0cnVlKVxyXG4gICAgICAgICAgICAgICAgLy8gSWYgZXZlcnl0aGluZyBpcyByaWdodCB0cmFuc2xhdGUgdG8gcHJldiBweCB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zdHlsZS5jc3NUZXh0ID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgke3ByZXZQeFZhbHVlVG9TY3JsfXB4KWA7XHJcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgc2xpZGVyIHBvc2l0aW9uIHJlZmVyZW5jZSwgcGFzcyAncHJldicgdG8gdXBkYXRlIHJlZnJlbmNlIHdpdGggcmVzcGVjdCB0byBuZXh0IGJ1dHRvbiBjbGlja1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlU2xpZGVyUG9zaXRpb25SZWYoJ3ByZXYnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBpbml0VmFsdWVzID0oKSA9PntcclxuICAgICAgICBlbmRPZlNsaWRlID0gZmFsc2VcclxuICAgICAgICAvLyBTbGlkZXIgd2lkdGggaXMgYW4gb3V0ZXIgZGl2IHdoaWNoIHNob3dzIGVudGlyZSBzbGlkZXIgaWYgd2Ugc2V0IHNsaWRlciB0byBiZSAyMDBweCB3aWRlLSBcclxuICAgICAgICAvLyAtd2lkdGggaXMgc2V0IG9uIHRoaXMgZGl2ICwgd2UgbmVlZCBpdCB0byBjYWxjdWxhdGUgc2xpZGVyIHZpc2libGUgd2lkdGggaW4gd2hpY2ggc2xpZGVyIGlzIHZpc2libGVcclxuICAgICAgICAvLyBieSBkZWZhdWx0IHNsaWRlciB0YWtlcyBmdWxsIHZpZXdwb3J0IHdpZHRoLmV4IDogMTYwMHB4XHJcbiAgICAgICAgc2xpZGVyVmlzaWJsZVdpZHRoID0gYXV0b0dhcFNsaWRlck1haW5Db250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aDtcclxuICAgICAgICAvLyBJZiBzbGlkZXIgaGFzIG1hcmdpbiAoc3BhY2UgYmV0d2VlbiBzbGlkZXIgY2FyZHMgaWYgc2xpZGVycyBhcmUgdG91Y2ggdG8gZWFjaCBvdGhlciB0aGVuIGl0IGhhcyBubyBtYXJnaW4pLSBcclxuICAgICAgICAvLyAtaXQgaXMgcmVxdWlyZWQgdG8gY2FsY3VsYXRlIGhvdyBtdWNoIGRvZXMgc2xpZGVyIHNjcm9sbHNcclxuICAgICAgICBsZXQgZWFjaFNsaWRlID0gY2hpbGRTbGlkZXJDYXJkUmVmLmN1cnJlbnRcclxuICAgICAgICBsZXQgZWFjaFNsaWRlTWFyZ2luID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWFjaFNsaWRlKS5tYXJnaW5SaWdodC5zbGljZSgwLCAtMik7XHJcbiAgICAgICAgLy8gQ29udmVydCBmcm9tIHN0cmluZyB0byBudW1iZXIgYW5kIG11bHRpcGx5IGl0IGJ5IHR3byBiZWNhdXNlIG1hcmdpbiBpcyBhcHBsaWVkIG9uIGJvdGggc2lkZXNcclxuICAgICAgICBlYWNoU2xpZGVNYXJnaW49TnVtYmVyKGVhY2hTbGlkZU1hcmdpbikqMlxyXG4gICAgICAgIC8vIEVhY2ggc2xpZGVyIGNhcmQgd2lkdGggaXMgY2FsY3VsYXRlZCBieSBhZGRpbmcgaXRzIG93biB3aWR0aCB3aXRoIGl0cyBvd24gbWFyZ2luXHJcbiAgICAgICAgZWFjaFNsaWRlV2lkdGggPSBlYWNoU2xpZGUub2Zmc2V0V2lkdGgrZWFjaFNsaWRlTWFyZ2luO1xyXG4gICAgICAgIC8vIGVhY2hTbGlkZVdpZHRoID1OdW1iZXIoZWFjaFNsaWRlV2lkdGgpXHJcbiAgICAgICAgLy8gTnVtYmVyIG9mIHNsaWRlcyB0byBzY3JvbGxcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbCA9IDFcclxuICAgICAgICAvLyBOdW1iZXIgb2Ygc2xpZGVzIHRvIHNjcm9sbCBpbiBwaXhlbHMgZXg6IGlmIDI0MHB4XHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGxXaWR0aD1lYWNoU2xpZGVXaWR0aCpzbGlkZXNUb1Njcm9sbDtcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbFdpZHRoID0gc2xpZGVyVmlzaWJsZVdpZHRoO1xyXG4gICAgICAgIC8vIHRvIGNhbGN1bGF0ZSBhbmQgdHJhY2sgcHJvZ3Jlc3Mgb2YgbGVmdCBhbmQgcmlnaHQgc2Nyb2xsIHBvc2l0aW9uc1xyXG4gICAgICAgIHByZXZQeFZhbHVlVG9TY3JsID0gc2xpZGVzVG9TY3JvbGxXaWR0aDsgLy8gZXg6MjQwcHhcclxuICAgICAgICBuZXh0UHhWYWx1ZVRvU2NybCA9IC1zbGlkZXNUb1Njcm9sbFdpZHRoOyAvLyBleDotMjQwcHhcclxuICAgICAgICAvLyBDYXJkcyBjb250YWluZXIgd2lkdGggZ2VuZXJhbGx5IGVxdWFsIHRvIGVhY2hzbGlkZXJ3aWR0aCp0b3RhbG51bWJlcm9mc2xpZGVzIGluY2x1ZGluZyBtYXJnaW4gZXg6IHNheSAyMDkwcHhcclxuICAgICAgICBkaXZDYXJkc0NvbnRhaW5lclRvdGFsV2lkdGggPSBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoXHJcbiAgICAgICAgZGlzcGxheUFycm93KCdwcmV2JyxmYWxzZSlcclxuICAgICAgICBjb25zb2xlLmxvZyhcInZhbHVlcyBpbml0ZWRcIilcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgYXV0b1NsaWRlck1vdmU9KHRpbWVvdXQsYXV0b3BsYXkpPT57XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJtb3VzZWxlYXZlXCIpXHJcbiAgICAgICAgaWYoYXV0b3BsYXkpe1xyXG4gICAgICAgICAgICB0aW1lcklkPXNldEludGVydmFsKCgpPT57XHJcbiAgICAgICAgICAgICAgICB0aHJvdHRsZShjbGlja0hhbmRsZXIsJ25leHQnKVxyXG4gICAgICAgICAgICB9LDEwMDAwMDAwMDAwMDAwMClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBjbGVhckF1dG9TbGlkZXJNb3ZlPSh0aW1lcklkKT0+e1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibW91c2VlbnRlclwiKVxyXG4gICAgICAgIGlmKHRpbWVySWQpe1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXJJZClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyB1c2VFZmZlY3QgZm9yIG51bWJlciBvZiBzbGlkZXMgdG8gc2hvdyBwZXIgZGl2XHJcbiAgICBmdW5jdGlvbiAgc2V0U3R5bGUoY2xhc3NOYW1lLCBzdHlsZVZhbHVlKSB7XHJcbiAgICAgICAgdXBkYXRlU2xpZGVNYXJnaW4oc3R5bGVWYWx1ZSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVNYXJnaW4oKXtcclxuICAgICAgICBjb25zdCBtaW5HYXBCZXR3ZWVuU2xpZGVzID0gMTBcclxuICAgICAgICBjb25zdCBzbGlkZXJWaXNpYmxlV2lkdGggPSBhdXRvR2FwU2xpZGVyTWFpbkNvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgICAgIGNvbnN0IGVhY2hTbGlkZVdpZHRoID0gY2hpbGRTbGlkZXJDYXJkUmVmLmN1cnJlbnQub2Zmc2V0V2lkdGgrbWluR2FwQmV0d2VlblNsaWRlc1xyXG4gICAgICAgIGNvbnN0IHNsaWRlc1BlclZpc2libGVXaWR0aCA9IHNsaWRlclZpc2libGVXaWR0aC8oZWFjaFNsaWRlV2lkdGgpO1xyXG4gICAgICAgIGNvbnN0IG1hcmdpblRvU2V0SW5QZXJjZW50YWdlID0gc2xpZGVzUGVyVmlzaWJsZVdpZHRoIC0gTWF0aC5mbG9vcihzbGlkZXNQZXJWaXNpYmxlV2lkdGgpXHJcbiAgICAgICAgY29uc3QgbWFyZ2luVG9TZXRJblB4ID0gKChtYXJnaW5Ub1NldEluUGVyY2VudGFnZSkqZWFjaFNsaWRlV2lkdGgpXHJcbiAgICAgICAgY29uc3QgbWFyZ2luUGVyU2xpZGUgPSAobWFyZ2luVG9TZXRJblB4LyhNYXRoLmNlaWwoc2xpZGVzUGVyVmlzaWJsZVdpZHRoKS0xKSkrbWluR2FwQmV0d2VlblNsaWRlc1xyXG4gICAgICAgIHNldFN0eWxlKCdkaXZfX3NsaWRlckNhcmQtLXNsaWRlQ2FsdWxhdGUnLG1hcmdpblBlclNsaWRlKVxyXG4gICAgfVxyXG4gICAgLy8gVXNlZWZmZWN0IGZvciBzbGlkZXIgbmV4dCBhbmQgcHJldiBidXR0b25cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIC8vIEV4ZWN1dGUgd2hlbiBtb3VudGluZ1xyXG4gICAgICAgIC8vIEluaXRpYWxpemUgcmVxdWlyZWQgdmFsdWVzIGluIHBhcnRpY3VsYXIgZnVuY3Rpb25cclxuICAgICAgICBjYWxjdWxhdGVNYXJnaW4oKVxyXG4gICAgICAgIGluaXRWYWx1ZXMoKVxyXG4gICAgICAgIC8vIGRpc3BsYXlDb250ZW50KGluaXR2YWx1ZXMpXHJcbiAgICAgICAgYXV0b1NsaWRlck1vdmUoMjAwMCx0cnVlKVxyXG4gICAgICAgIC8vIHNsaWRlclN0eWxlLnRyYW5zZm9ybSgnNDAwcHgnKVxyXG4gICAgICAgIC8vIEhhbmRsZSBjbGljayBldmVudCBmb3IgYm90aCBidXR0b25zXHJcbiAgICAgICAgbmV4dEJ1dHRvbi5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+dGhyb3R0bGUoY2xpY2tIYW5kbGVyLCduZXh0JykpXHJcbiAgICAgICAgcHJldkJ1dHRvbi5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+dGhyb3R0bGUoY2xpY2tIYW5kbGVyLCdwcmV2JykpXHJcbiAgICAgICAgYXV0b0dhcFNsaWRlck1haW5Db250YWluZXIuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywoKT0+Y2xlYXJBdXRvU2xpZGVyTW92ZSh0aW1lcklkKSlcclxuICAgICAgICBhdXRvR2FwU2xpZGVyTWFpbkNvbnRhaW5lci5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCgpPT5hdXRvU2xpZGVyTW92ZSgxMDAwLHRydWUpIClcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywoKT0+e1xyXG4gICAgICAgICAgICBkZWJvdW5jZSgoKT0+e1xyXG4gICAgICAgICAgICAgICAgY2FsY3VsYXRlTWFyZ2luKCk7XHJcbiAgICAgICAgICAgICAgICBpbml0VmFsdWVzKCk7XHJcbiAgICAgICAgICAgICAgICByZXNldFNsaWRlclBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiAoKT0+e1xyXG4gICAgICAgICAgICAvLyBFeGVjdXRlIHdoZW4gdW5tb3VudGluZyAoY2xlYW51cClcclxuICAgICAgICAgICAgbmV4dEJ1dHRvbi5jdXJyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+dGhyb3R0bGUoY2xpY2tIYW5kbGVyLCduZXh0JykpXHJcbiAgICAgICAgICAgIHByZXZCdXR0b24uY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PnRocm90dGxlKGNsaWNrSGFuZGxlciwncHJldicpKSAgICAgICBcclxuICAgICAgICAgICAgYXV0b0dhcFNsaWRlck1haW5Db250YWluZXIuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywoKT0+Y2xlYXJBdXRvU2xpZGVyTW92ZSh0aW1lcklkKSlcclxuICAgICAgICAgICAgYXV0b0dhcFNsaWRlck1haW5Db250YWluZXIuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywoKT0+YXV0b1NsaWRlck1vdmUoMTAwMCx0cnVlKSApXHJcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCgpPT57XHJcbiAgICAgICAgICAgICAgICBkZWJvdW5jZSgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGN1bGF0ZU1hcmdpbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGluaXRWYWx1ZXMoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXNldFNsaWRlclBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9KTsgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSxbXSlcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdNYXJnaW4gdXBkYXRlZCcrc2xpZGVNYXJnaW4pO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PmRpdkNhcmRzQ29udGFpbmVyVG90YWxXaWR0aCA9IGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQub2Zmc2V0V2lkdGgsMTAwKVxyXG4gICAgfSxbc2xpZGVNYXJnaW5dKVxyXG4gICAgbGV0IHRvdWNoU3RhcnRQb3MgPTA7XHJcbiAgICBjb25zdCB0b3VjaFN0YXJ0SGFuZGxlciA9IChlKT0+e1xyXG4gICAgICAgIHRvdWNoU3RhcnRQb3M9ZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCkgICBcclxuICAgIH1cclxuICAgIGNvbnN0IHRvdWNoRW5kSGFuZGxlcj0oZSk9PntcclxuICAgICAgICBsZXQgdG91Y2hFbmRQb3MgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFg7XHJcbiAgICAgICAgaWYgKHRvdWNoRW5kUG9zPT09dG91Y2hTdGFydFBvcykgcmV0dXJuXHJcbiAgICAgICAgaWYgKHRvdWNoRW5kUG9zLXRvdWNoU3RhcnRQb3M+MCkgY2xpY2tIYW5kbGVyKCdwcmV2JylcclxuICAgICAgICBlbHNlIGNsaWNrSGFuZGxlcignbmV4dCcpXHJcbiAgICB9XHJcbiAgICBjb25zdCBkcmFnSGFuZGxlciA9IChlKSA9PntcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIH1cclxuICAgIGNvbnN0IG9uSW1hZ2VMb2FkID0gKGltYWdlLGlzSW1nUmVhZHkpID0+e1xyXG4gICAgICAgIGlmIChpc0ltZ1JlYWR5KXtcclxuICAgICAgICAgICAgaW1hZ2UuY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGluZycpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoJ2xvYWRpbmcnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIC8vIHVzZUVmZmVjdCBmb3IgdG91Y2ggY2FwYWJpbGl0eVxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgbGV0IGltYWdlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW1hZ2VIb2xkZXInKSlcclxuICAgICAgICBpbWFnZXMuZm9yRWFjaCgoaW1hZ2UpPT57XHJcbiAgICAgICAgICAgIG9uSW1hZ2VMb2FkKGltYWdlLGZhbHNlKVxyXG4gICAgICAgICAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLChlKT0+ZHJhZ0hhbmRsZXIoZSkgKVxyXG4gICAgICAgICAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywoZSk9Pm9uSW1hZ2VMb2FkKGltYWdlLHRydWUpKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXV0b0dhcFNsaWRlck1haW5Db250YWluZXIuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywoZSk9PnRvdWNoU3RhcnRIYW5kbGVyKGUpLHtwYXNzaXZlOnRydWV9KVxyXG4gICAgICAgIGF1dG9HYXBTbGlkZXJNYWluQ29udGFpbmVyLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLChlKT0+dG91Y2hFbmRIYW5kbGVyKGUpLHtwYXNzaXZlOnRydWV9IClcclxuICAgICAgICBhdXRvR2FwU2xpZGVyTWFpbkNvbnRhaW5lci5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsKGUpPT57Y29uc29sZS5sb2coZSl9LHtwYXNzaXZlOnRydWV9KVxyXG4gICAgICAgIC8vIGNoaWxkU2xpZGVyQ2FyZFJlZi5jdXJyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsKGUpPT5kcmFnSGFuZGxlcihlKSApXHJcbiAgICAgICAgLy8gYXV0b0dhcFNsaWRlck1haW5Db250YWluZXIuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLChlKT0+dG91Y2hTdGFydEhhbmRsZXIoZSkgKVxyXG4gICAgICAgIHJldHVybiAoKT0+IHtcclxuICAgICAgICAgICAgYXV0b0dhcFNsaWRlck1haW5Db250YWluZXIuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywoZSk9PnRvdWNoU3RhcnRIYW5kbGVyKGUpIClcclxuICAgICAgICAgICAgYXV0b0dhcFNsaWRlck1haW5Db250YWluZXIuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsKGUpPT50b3VjaEVuZEhhbmRsZXIoZSkse3Bhc3NpdmU6dHJ1ZX0pXHJcbiAgICAgICAgICAgIGltYWdlcy5mb3JFYWNoKChpbWFnZSk9PntcclxuICAgICAgICAgICAgICAgIGltYWdlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsKGUpPT5kcmFnSGFuZGxlcihlKSApXHJcbiAgICAgICAgICAgICAgICBpbWFnZS5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywoZSk9Pm9uSW1hZ2VMb2FkKGUpKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAvLyBhdXRvR2FwU2xpZGVyTWFpbkNvbnRhaW5lci5jdXJyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsKGUpPT50b3VjaFN0YXJ0SGFuZGxlcihlKSlcclxuICAgICAgICAgICAgLy8gdGhyb3R0bGUodG91Y2hTdGFydEhhbmRsZXIsMjAwMCxlKSBcclxuICAgICAgICB9XHJcbiAgICB9LFtdKVxyXG4gICAgY29uc3QgW2xlZnRBcnJvd0Rpc3BsYXksc2hvd0xlZnRBcnJvd109IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW3JpZ2h0QXJyb3dEaXNwbGF5LHNob3dSaWdodEFycm93XT0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBsZWZ0U3R5bGUgPSB7ZGlzcGxheTpsZWZ0QXJyb3dEaXNwbGF5P1wiaW5saW5lLWJsb2NrXCI6XCJub25lXCJ9XHJcbiAgICBjb25zdCByaWdodFN0eWxlID0ge2Rpc3BsYXk6cmlnaHRBcnJvd0Rpc3BsYXk/XCJpbmxpbmUtYnRyYW5zbGF0ZVgodHJhbnNsYXRlVmFsdWUpbG9ja1wiOlwibm9uZVwifVxyXG4gICAgY29uc3Qgc2xpZGVyU3R5bGUgPSB7dHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgke3RyYW5zbGF0ZVZhbHVlKydweCd9KWAgfHwgJzAnfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJ2aXNpYmxlRGl2XCIgcmVmPXthdXRvR2FwU2xpZGVyTWFpbkNvbnRhaW5lcn0gIGNsYXNzTmFtZT17c3R5bGVzLkNhdXRvR2FwICsgJyBhdXRvR2FwTWFpbkNvbnRhaW5lckRpdiAnfT5cclxuICAgICAgICAgICAgPGkgcmVmPXtwcmV2QnV0dG9ufSBzdHlsZT17bGVmdFN0eWxlfSAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uKycgcHJldiAnfT5QcmV2PC9pPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiAgcmVmPXtkaXZDYXJkc0NvbnRhaW5lcn0gY2xhc3NOYW1lPXtzdHlsZXMuYXV0b0dhcCsgJyBpbWdDb21wICd9PlxyXG4gICAgICAgICAgICA8SW1nIHJlZj17Y2hpbGRTbGlkZXJDYXJkUmVmfSBpbWdBcnI9e2ltZ0Fycn0gc3R5bGVJbWc9e3N0eWxlSW1nfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8aSByZWY9e25leHRCdXR0b259IHN0eWxlPXtyaWdodFN0eWxlfSBjbGFzc05hbWU9e3N0eWxlcy5idXR0b24rJyBuZXh0ICd9Pk5leHQ8L2k+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHAgIGlkPXtzdHlsZXNbJ2lkZWEnXX0gPmhleTwvcD5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRvR2FwU2xpZGVyO1xyXG4gICAvLyBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAvLyAgICAgaWQ9aWQrMjtcclxuICAgIC8vICAgICBpbWdBcnJVcGR0KFsuLi5pbWdTdGF0ZSwgICB7XHJcbiAgICAvLyAgICAgICAgICdzcmMnOidzdGF0aWMvcGVyMS5qcGcnLFxyXG4gICAgLy8gICAgICAgICBpZDppZCxcclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgICAgJ3NyYyc6J3N0YXRpYy9wZXIyLmpwZycsXHJcbiAgICAvLyAgICAgICAgIGlkOmlkKzEsXHJcbiAgICAvLyAgICAgfV0pXHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coaWQpXHJcbiAgICAgICAgXHJcbiAgICAvLyB9LDEwMDAwKVxyXG4vLyBlbHNlIGlmKGxlZnQ+IC1zbGlkZXNUb1Njcm9sbFdpZHRoKXtcclxuLy8gICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLSR7MH1weClgO1xyXG4vLyAgICAgbmV4dFB4VmFsdWVUb1NjcmwgPSAtc2xpZGVzVG9TY3JvbGxXaWR0aDsgXHJcbi8vICAgICBwcmV2UHhWYWx1ZVRvU2NybCA9IHNsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbi8vIH1cclxuLy8gY29uc3QgY2xpY2tIYW5kbGVyID0gKGRpcmVjdGlvbik9PnsgXHJcbi8vICAgICBjb25zdCBsZWZ0ID0gZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0XHJcbi8vICAgICBjb25zb2xlLmxvZyhuZXh0UHhWYWx1ZVRvU2NybCwtZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aCtzbGlkZXJWaXNpYmxlV2lkdGgpXHJcbi8vICAgICBpZiAoZGlyZWN0aW9uID09PSAnbmV4dCcpe1xyXG4gICAgICAgIFxyXG4vLyAgICAgICAgIGlmKG5leHRQeFZhbHVlVG9TY3JsLC1kaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoK3NsaWRlclZpc2libGVXaWR0aCl7XHJcbi8vICAgICAgICAgICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLSR7MH1weClgO1xyXG4vLyAgICAgICAgICAgICBuZXh0UHhWYWx1ZVRvU2NybCA9IC1zbGlkZXNUb1Njcm9sbFdpZHRoOyBcclxuLy8gICAgICAgICAgICAgcHJldlB4VmFsdWVUb1NjcmwgPSBzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4vLyAgICAgICAgIH1lbHNlIGlmIChkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoLXNsaWRlclZpc2libGVXaWR0aDwgLW5leHRQeFZhbHVlVG9TY3JsKSB7XHJcbi8vICAgICAgICAgICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHstZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aCtzbGlkZXJWaXNpYmxlV2lkdGh9cHgpYFxyXG4vLyAgICAgICAgICAgICBuZXh0UHhWYWx1ZVRvU2NybCA9IC1kaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoK3NsaWRlclZpc2libGVXaWR0aFxyXG4vLyAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBcclxuLy8gICAgICAgICAgICAgZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zdHlsZS5jc3NUZXh0ID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgke25leHRQeFZhbHVlVG9TY3JsfXB4KWBcclxuLy8gICAgICAgICAgICAgZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zY3JvbGxMZWZ0ID0gc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuLy8gICAgICAgICAgICAgcHJldlB4VmFsdWVUb1NjcmwgPSBwcmV2UHhWYWx1ZVRvU2NybC1zbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4vLyAgICAgICAgICAgICBuZXh0UHhWYWx1ZVRvU2NybCA9IG5leHRQeFZhbHVlVG9TY3JsLXNsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbi8vICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4vLyAgICAgfWVsc2UgaWYoZGlyZWN0aW9uID09PSAncHJldicpe1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKHByZXZQeFZhbHVlVG9TY3JsKVxyXG4vLyAgICAgICAgIGNvbnN0IGxlZnQgPSBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcbi8vICAgICAgICAgaWYocHJldlB4VmFsdWVUb1Njcmw+MCl7XHJcbi8vICAgICAgICAgICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLSR7MH1weClgO1xyXG4vLyAgICAgICAgICAgICBuZXh0UHhWYWx1ZVRvU2NybCA9IC1zbGlkZXNUb1Njcm9sbFdpZHRoOyBcclxuLy8gICAgICAgICAgICAgcHJldlB4VmFsdWVUb1NjcmwgPSBzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4vLyAgICAgICAgIH1lbHNle1xyXG4vLyAgICAgICAgICAgICBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR7cHJldlB4VmFsdWVUb1Njcmx9cHgpYDtcclxuLy8gICAgICAgICAgICAgbmV4dFB4VmFsdWVUb1NjcmwgPW5leHRQeFZhbHVlVG9TY3JsICtzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4vLyAgICAgICAgICAgICBwcmV2UHhWYWx1ZVRvU2NybCA9IHByZXZQeFZhbHVlVG9TY3JsK3NsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbi8vICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4vLyAgICAgfVxyXG4vLyAvLyB9XHJcbi8vIGNvbnN0IGxlZnQgPSBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcbi8vIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc2Nyb2xsTGVmdCA9IHNsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcblxyXG4vLyBsZXQgaXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzTmFtZSk7XHJcbi8vIGZvciAodmFyIGk9MDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbi8vICAgaWYgKGkrMT09PShpdGVtcy5sZW5ndGgpKWl0ZW1zW2ldLnN0eWxlLm1hcmdpblJpZ2h0ID0gJ2F1dG8nXHJcbi8vIH1cclxuXHJcbi8vIGluaXRWYWx1ZXMoKVxyXG4vLyBhc3luYyBmdW5jdGlvbiAgc2V0U3R5bGUoY2xhc3NOYW1lLCBzdHlsZVZhbHVlKSB7XHJcbi8vICAgICBhd2FpdCB1cGRhdGVTbGlkZU1hcmdpbihzdHlsZVZhbHVlKTtcclxuXHJcbi8vICAgICBpbml0VmFsdWVzKClcclxuLy8gfSJdLCJzb3VyY2VSb290IjoiIn0=