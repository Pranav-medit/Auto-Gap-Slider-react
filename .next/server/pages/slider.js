(function() {
var exports = {};
exports.id = "pages/slider";
exports.ids = ["pages/slider"];
exports.modules = {

/***/ "./components/autoGapSlider.js":
/*!*************************************!*\
  !*** ./components/autoGapSlider.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _autoGapSlider_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./autoGapSlider.module.scss */ "./components/autoGapSlider.module.scss");
/* harmony import */ var _autoGapSlider_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_autoGapSlider_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _autoGapSliderCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./autoGapSliderCard */ "./components/autoGapSliderCard.js");
/* harmony import */ var _sliderCardData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sliderCardData */ "./components/sliderCardData.js");


var _jsxFileName = "C:\\Users\\prana\\Documents\\VSCode\\React\\react hooks\\hook1\\components\\autoGapSlider.js";






const AutoGapSlider = () => {
  // Each slider card
  const childSliderCardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(); // Parent of slider cards , div holding all slide cards

  const divCardsContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(); // Slider containing cards container and prev, next buttons.

  const autoGapSliderMainContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(); // Grabbing next button

  const nextButton = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(); // Grabbing prev button

  const prevButton = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const {
    0: imgArr,
    1: imgArrUpdt
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_sliderCardData__WEBPACK_IMPORTED_MODULE_4__.imgArrData);
  let imageUpdateArr = imgArr;
  let id = 12;
  let timerId;
  const {
    0: slideCardMargin,
    1: updateSlideCardMargin
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const {
    0: translateValue,
    1: updateTranslateValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const styleImg = {
    width: '200px',
    height: '300px',
    margin: `0 ${slideCardMargin / 2}px 0 ${slideCardMargin / 2}px`
  }; // Initialize default values

  let sliderVisibleWidth = 0;
  let eachSlideWidth = 0;
  let slidesToScroll = 0;
  let slidesToScrollWidth = 0;
  let nextPxValueToScrl = 0;
  let prevPxValueToScrl = 0;
  let divCardsContainerTotalWidth = 0; // Detect if we reached end of the slides

  let endOfSlide = false; // Loadash throttler to throttle resize and if user clicks button many times 

  let throttle = lodash__WEBPACK_IMPORTED_MODULE_2___default().throttle((func, ...args) => {
    func(...args);
  }, 600);

  let debounce = lodash__WEBPACK_IMPORTED_MODULE_2___default().debounce((func, ...args) => {
    func(...args); // console.log('deibounc')
  }, 800);

  const resetSliderPosition = () => {
    // default slidesToScrollWidth:240px
    nextPxValueToScrl = -slidesToScrollWidth;
    prevPxValueToScrl = slidesToScrollWidth; // divCardsContainer.current.style.cssText = `transform: translateX(-${0}px)`;

    updateTranslateValue(0);
    displayArrow('prev', false);
    divCardsContainerTotalWidth = divCardsContainer.current.offsetWidth;
  };

  const displayArrow = (direction = 'prev', toDisplay = true) => {
    if (direction === 'prev') {
      if (!toDisplay) showPrevButton(false);else showPrevButton(true);
    } else {
      if (!toDisplay) showNextButton(false);else showNextButton(true);
    }
  };

  const updateSliderPositionRef = updateref => {
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

  const updateSliderArray = () => {
    const newElement = [{
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

  const clickHandler = direction => {
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

  const initValues = () => {
    endOfSlide = false; // Slider width is an outer div which shows entire slider if we set slider to be 200px wide- 
    // -width is set on this div , we need it to calculate slider visible width in which slider is visible
    // by default slider takes full viewport width.ex : 1600px

    sliderVisibleWidth = autoGapSliderMainContainer.current.offsetWidth; // If slider has margin (space between slider cards if sliders are touch to each other then it has no margin)- 
    // -it is required to calculate how much does slider scrolls

    let eachSlide = childSliderCardRef.current;
    let eachslideCardMargin = window.getComputedStyle(eachSlide).marginRight.slice(0, -2); // Convert from string to number and multiply it by two because margin is applied on both sides

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

  const autoSliderMove = (timeout, autoplay) => {
    // console.log("mouseleave")
    if (autoplay) {
      timerId = setInterval(() => {
        throttle(clickHandler, 'next');
      }, 100000000000000);
    }
  };

  const clearAutoSliderMove = timerId => {
    // console.log("mouseenter")
    if (timerId) {
      clearTimeout(timerId);
    }
  }; // useEffect for number of slides to show per div


  function setSliderCardStyle(margin) {
    updateSlideCardMargin(margin);
  }

  function calculateMargin() {
    const minGapBetweenSlides = 10;
    const sliderVisibleWidth = autoGapSliderMainContainer.current.offsetWidth;
    const eachSlideWidth = childSliderCardRef.current.offsetWidth + minGapBetweenSlides;
    const slidesPerVisibleWidth = sliderVisibleWidth / eachSlideWidth;
    const marginToSetInPercentage = slidesPerVisibleWidth - Math.floor(slidesPerVisibleWidth);
    const marginToSetInPx = marginToSetInPercentage * eachSlideWidth;
    const marginPerSlide = marginToSetInPx / (Math.ceil(slidesPerVisibleWidth) - 1) + minGapBetweenSlides;
    setSliderCardStyle(marginPerSlide);
  } // Useeffect for slider next and prev button


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    // Execute when mounting
    // Initialize required values in particular function
    calculateMargin();
    initValues(); // displayContent(initvalues)

    autoSliderMove(2000, true); // sliderStyle.transform('400px')
    // Handle click event for both buttons

    nextButton.current.addEventListener('click', () => throttle(clickHandler, 'next'));
    prevButton.current.addEventListener('click', () => throttle(clickHandler, 'prev'));
    autoGapSliderMainContainer.current.addEventListener('mouseenter', () => clearAutoSliderMove(timerId));
    autoGapSliderMainContainer.current.addEventListener('mouseleave', () => autoSliderMove(1000, true));
    window.addEventListener('resize', () => {
      debounce(() => {
        calculateMargin();
        initValues();
        resetSliderPosition();
      });
    });
    return () => {
      // Execute when unmounting (cleanup)
      nextButton.current.removeEventListener('click', () => throttle(clickHandler, 'next'));
      prevButton.current.removeEventListener('click', () => throttle(clickHandler, 'prev'));
      autoGapSliderMainContainer.current.removeEventListener('mouseenter', () => clearAutoSliderMove(timerId));
      autoGapSliderMainContainer.current.removeEventListener('mouseleave', () => autoSliderMove(1000, true));
      window.removeEventListener('resize', () => {
        debounce(() => {
          calculateMargin();
          initValues();
          resetSliderPosition();
        });
      });
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    // console.log('Margin updated'+slideCardMargin);
    setTimeout(() => divCardsContainerTotalWidth = divCardsContainer.current.offsetWidth, 100);
  }, [slideCardMargin]);
  let touchStartPos = 0;

  const touchStartHandler = e => {
    touchStartPos = e.changedTouches[0].clientX;
  };

  const touchEndHandler = e => {
    let touchEndPos = e.changedTouches[0].clientX;
    if (touchEndPos === touchStartPos) return;
    if (touchEndPos - touchStartPos > 0) clickHandler('prev');else clickHandler('next');
  };

  const dragHandler = e => {
    e.preventDefault();
  };

  const onImageLoad = (image, isImgReady) => {
    if (isImgReady) image.classList.remove('loading');else image.classList.add('loading');
  }; // useEffect for touch capability


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    let images = Array.from(document.getElementsByClassName('imageHolder'));
    images.forEach(image => {
      onImageLoad(image, false);
      image.addEventListener('dragstart', e => dragHandler(e));
      image.addEventListener('load', e => onImageLoad(image, true));
    });
    autoGapSliderMainContainer.current.addEventListener('touchstart', e => touchStartHandler(e), {
      passive: true
    });
    autoGapSliderMainContainer.current.addEventListener('touchend', e => touchEndHandler(e), {
      passive: true
    });
    autoGapSliderMainContainer.current.addEventListener('touchmove', e => {
      console.log(e);
    }, {
      passive: true
    }); // childSliderCardRef.current.removeEventListener('dragstart',(e)=>dragHandler(e) )
    // autoGapSliderMainContainer.current.addEventListener('touchmove',(e)=>touchStartHandler(e) )

    return () => {
      autoGapSliderMainContainer.current.removeEventListener('touchstart', e => touchStartHandler(e));
      autoGapSliderMainContainer.current.removeEventListener('touchend', e => touchEndHandler(e), {
        passive: true
      });
      images.forEach(image => {
        image.removeEventListener('dragstart', e => dragHandler(e));
        image.removeEventListener('load', e => onImageLoad(e));
      }); // autoGapSliderMainContainer.current.removeEventListener('touchmove',(e)=>touchStartHandler(e))
      // throttle(touchStartHandler,2000,e) 
    };
  }, []);
  const {
    0: prevButtonDisplay,
    1: showPrevButton
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const {
    0: nextButtonDisplay,
    1: showNextButton
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); // const leftStyle = {display:prevButtonDisplay?"inline-block":"none"}
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
          prevButtonDisplay
        }),
        className: (_autoGapSlider_module_scss__WEBPACK_IMPORTED_MODULE_5___default().button) + ' prev ',
        children: "Prev"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 301,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        style: sliderStyles.divCardsContainer({
          translateValue
        }),
        ref: divCardsContainer,
        className: (_autoGapSlider_module_scss__WEBPACK_IMPORTED_MODULE_5___default().divCardsContainer) + ' imgComp ',
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_autoGapSliderCard__WEBPACK_IMPORTED_MODULE_3__.default, {
          ref: childSliderCardRef,
          imgArr: imgArr,
          styleImg: sliderStyles.slideCardStyle({
            slideCardMargin
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 304,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 303,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        ref: nextButton,
        style: sliderStyles.nextButton({
          nextButtonDisplay
        }),
        className: (_autoGapSlider_module_scss__WEBPACK_IMPORTED_MODULE_5___default().button) + ' next ',
        children: "Next"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 306,
        columnNumber: 12
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      id: (_autoGapSlider_module_scss__WEBPACK_IMPORTED_MODULE_5___default().idea),
      children: "hey"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 9
    }, undefined)]
  }, void 0, true);
}; // Styles for slider 


const sliderStyles = {
  divCardsContainer: ({
    translateValue
  }) => ({
    transform: `translateX(${translateValue + 'px'})` || '0'
  }),
  nextButton: ({
    nextButtonDisplay
  }) => ({
    display: nextButtonDisplay ? "inline-block" : "none"
  }),
  slideCardStyle: ({
    slideCardMargin
  }) => ({
    width: '200px',
    height: '300px',
    margin: `0 ${slideCardMargin / 2}px 0 ${slideCardMargin / 2}px`
  }),
  prevButton: ({
    prevButtonDisplay
  }) => ({
    display: prevButtonDisplay ? "inline-block" : "none"
  })
};
/* harmony default export */ __webpack_exports__["default"] = (AutoGapSlider);

/***/ }),

/***/ "./components/autoGapSliderCard.js":
/*!*****************************************!*\
  !*** ./components/autoGapSliderCard.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _autoGapSlider_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./autoGapSlider.module.scss */ "./components/autoGapSlider.module.scss");
/* harmony import */ var _autoGapSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_autoGapSlider_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\prana\\Documents\\VSCode\\React\\react hooks\\hook1\\components\\autoGapSliderCard.js";



const SliderCard = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({
  styleImg,
  imgArr
}, childSliderCardRef) => {
  // let imageSlide = useRef(null);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: imgArr.map((src, index) => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        ref: childSliderCardRef,
        style: styleImg,
        className: (_autoGapSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().sliderCard) + ' div div__sliderCard div__sliderCard--slideCalulate ',
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          loading: "lazy",
          style: {},
          src: src.src,
          className: (_autoGapSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().sliderCardImg) + ' imageHolder ',
          alt: ""
        }, src.id, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 25
        }, undefined)
      }, src.id, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 21
      }, undefined);
    })
  }, void 0, false);
});
/* harmony default export */ __webpack_exports__["default"] = (SliderCard);

/***/ }),

/***/ "./components/sliderCardData.js":
/*!**************************************!*\
  !*** ./components/sliderCardData.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "imgArrData": function() { return /* binding */ imgArrData; }
/* harmony export */ });
const imgArrData = [{
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
}];

/***/ }),

/***/ "./pages/slider.js":
/*!*************************!*\
  !*** ./pages/slider.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_autoGapSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/autoGapSlider */ "./components/autoGapSlider.js");

var _jsxFileName = "C:\\Users\\prana\\Documents\\VSCode\\React\\react hooks\\hook1\\pages\\slider.js";




const Slider = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "jsx-2469760231" + " " + 'slider',
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_autoGapSlider__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "2469760231",
      children: "body{margin:0px;}.blur img{-webkit-filter:grayscale(100%) blur(2.6px);filter:grayscale(100%) blur(2.6px);}.blur{overflow:hidden;}.slider{margin-right:0px;}.loading{background-image:url('/icons/loading.svg');background-repeat:no-repeat;background-size:cover;background-position:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccHJhbmFcXERvY3VtZW50c1xcVlNDb2RlXFxSZWFjdFxccmVhY3QgaG9va3NcXGhvb2sxXFxwYWdlc1xcc2xpZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNhLEFBRytCLEFBR3lCLEFBSXBCLEFBR0MsQUFHMEIsV0FaOUMsS0FPQSxDQUdBLDBCQUdnQyw0QkFDTixPQVgxQixlQVk4QiwyQkFDOUIiLCJmaWxlIjoiQzpcXFVzZXJzXFxwcmFuYVxcRG9jdW1lbnRzXFxWU0NvZGVcXFJlYWN0XFxyZWFjdCBob29rc1xcaG9vazFcXHBhZ2VzXFxzbGlkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQXV0b0dhcFNsaWRlciBmcm9tICcuLi9jb21wb25lbnRzL2F1dG9HYXBTbGlkZXInXHJcblxyXG5jb25zdCBTbGlkZXIgPSAoKSA9PiB7XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsaWRlcic+XHJcbiAgICAgICAgICAgIDxBdXRvR2FwU2xpZGVyLz5cclxuICAgICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+XHJcbiAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmJsdXIgaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpIGJsdXIoMi42cHgpOyAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5ibHVye1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5zbGlkZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5sb2FkaW5ne1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKCcvaWNvbnMvbG9hZGluZy5zdmcnKTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbGlkZXI7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\prana\\\\Documents\\\\VSCode\\\\React\\\\react hooks\\\\hook1\\\\pages\\\\slider.js */"
    }, void 0, false, void 0, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Slider);

/***/ }),

/***/ "./components/autoGapSlider.module.scss":
/*!**********************************************!*\
  !*** ./components/autoGapSlider.module.scss ***!
  \**********************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"divCardsContainer": "autoGapSlider_divCardsContainer__10hEG",
	"autoGapSliderMainContainer": "autoGapSlider_autoGapSliderMainContainer__TdujC",
	"button": "autoGapSlider_button__1lZdB",
	"sliderCard": "autoGapSlider_sliderCard__25jty",
	"idea": "autoGapSlider_idea__3zcth",
	"goLeft": "autoGapSlider_goLeft__cFfPV"
};


/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("lodash");;

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

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/style");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/slider.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob29rMS8uL2NvbXBvbmVudHMvYXV0b0dhcFNsaWRlci5qcyIsIndlYnBhY2s6Ly9ob29rMS8uL2NvbXBvbmVudHMvYXV0b0dhcFNsaWRlckNhcmQuanMiLCJ3ZWJwYWNrOi8vaG9vazEvLi9jb21wb25lbnRzL3NsaWRlckNhcmREYXRhLmpzIiwid2VicGFjazovL2hvb2sxLy4vcGFnZXMvc2xpZGVyLmpzIiwid2VicGFjazovL2hvb2sxLy4vY29tcG9uZW50cy9hdXRvR2FwU2xpZGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2hvb2sxL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vaG9vazEvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2hvb2sxL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vaG9vazEvZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiXSwibmFtZXMiOlsiQXV0b0dhcFNsaWRlciIsImNoaWxkU2xpZGVyQ2FyZFJlZiIsInVzZVJlZiIsImRpdkNhcmRzQ29udGFpbmVyIiwiYXV0b0dhcFNsaWRlck1haW5Db250YWluZXIiLCJuZXh0QnV0dG9uIiwicHJldkJ1dHRvbiIsImltZ0FyciIsImltZ0FyclVwZHQiLCJ1c2VTdGF0ZSIsImltZ0FyckRhdGEiLCJpbWFnZVVwZGF0ZUFyciIsImlkIiwidGltZXJJZCIsInNsaWRlQ2FyZE1hcmdpbiIsInVwZGF0ZVNsaWRlQ2FyZE1hcmdpbiIsInRyYW5zbGF0ZVZhbHVlIiwidXBkYXRlVHJhbnNsYXRlVmFsdWUiLCJzdHlsZUltZyIsIndpZHRoIiwiaGVpZ2h0IiwibWFyZ2luIiwic2xpZGVyVmlzaWJsZVdpZHRoIiwiZWFjaFNsaWRlV2lkdGgiLCJzbGlkZXNUb1Njcm9sbCIsInNsaWRlc1RvU2Nyb2xsV2lkdGgiLCJuZXh0UHhWYWx1ZVRvU2NybCIsInByZXZQeFZhbHVlVG9TY3JsIiwiZGl2Q2FyZHNDb250YWluZXJUb3RhbFdpZHRoIiwiZW5kT2ZTbGlkZSIsInRocm90dGxlIiwiXyIsImZ1bmMiLCJhcmdzIiwiZGVib3VuY2UiLCJyZXNldFNsaWRlclBvc2l0aW9uIiwiZGlzcGxheUFycm93IiwiY3VycmVudCIsIm9mZnNldFdpZHRoIiwiZGlyZWN0aW9uIiwidG9EaXNwbGF5Iiwic2hvd1ByZXZCdXR0b24iLCJzaG93TmV4dEJ1dHRvbiIsInVwZGF0ZVNsaWRlclBvc2l0aW9uUmVmIiwidXBkYXRlcmVmIiwidXBkYXRlU2xpZGVyQXJyYXkiLCJuZXdFbGVtZW50IiwiY29uY2F0IiwiY2xpY2tIYW5kbGVyIiwiaW5pdFZhbHVlcyIsImVhY2hTbGlkZSIsImVhY2hzbGlkZUNhcmRNYXJnaW4iLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwibWFyZ2luUmlnaHQiLCJzbGljZSIsIk51bWJlciIsImF1dG9TbGlkZXJNb3ZlIiwidGltZW91dCIsImF1dG9wbGF5Iiwic2V0SW50ZXJ2YWwiLCJjbGVhckF1dG9TbGlkZXJNb3ZlIiwiY2xlYXJUaW1lb3V0Iiwic2V0U2xpZGVyQ2FyZFN0eWxlIiwiY2FsY3VsYXRlTWFyZ2luIiwibWluR2FwQmV0d2VlblNsaWRlcyIsInNsaWRlc1BlclZpc2libGVXaWR0aCIsIm1hcmdpblRvU2V0SW5QZXJjZW50YWdlIiwiTWF0aCIsImZsb29yIiwibWFyZ2luVG9TZXRJblB4IiwibWFyZ2luUGVyU2xpZGUiLCJjZWlsIiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzZXRUaW1lb3V0IiwidG91Y2hTdGFydFBvcyIsInRvdWNoU3RhcnRIYW5kbGVyIiwiZSIsImNoYW5nZWRUb3VjaGVzIiwiY2xpZW50WCIsInRvdWNoRW5kSGFuZGxlciIsInRvdWNoRW5kUG9zIiwiZHJhZ0hhbmRsZXIiLCJwcmV2ZW50RGVmYXVsdCIsIm9uSW1hZ2VMb2FkIiwiaW1hZ2UiLCJpc0ltZ1JlYWR5IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiaW1hZ2VzIiwiQXJyYXkiLCJmcm9tIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZm9yRWFjaCIsInBhc3NpdmUiLCJjb25zb2xlIiwibG9nIiwicHJldkJ1dHRvbkRpc3BsYXkiLCJuZXh0QnV0dG9uRGlzcGxheSIsInN0eWxlcyIsInNsaWRlclN0eWxlcyIsInNsaWRlQ2FyZFN0eWxlIiwidHJhbnNmb3JtIiwiZGlzcGxheSIsIlNsaWRlckNhcmQiLCJmb3J3YXJkUmVmIiwibWFwIiwic3JjIiwiaW5kZXgiLCJTbGlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTUEsYUFBYSxHQUFHLE1BQU07QUFFeEI7QUFDQSxRQUFNQyxrQkFBa0IsR0FBR0MsNkNBQU0sRUFBakMsQ0FId0IsQ0FJeEI7O0FBQ0EsUUFBTUMsaUJBQWlCLEdBQUdELDZDQUFNLEVBQWhDLENBTHdCLENBTXhCOztBQUNBLFFBQU1FLDBCQUEwQixHQUFHRiw2Q0FBTSxFQUF6QyxDQVB3QixDQVF4Qjs7QUFDQSxRQUFNRyxVQUFVLEdBQUdILDZDQUFNLEVBQXpCLENBVHdCLENBVXhCOztBQUNBLFFBQU1JLFVBQVUsR0FBR0osNkNBQU0sRUFBekI7QUFDQSxRQUFNO0FBQUEsT0FBQ0ssTUFBRDtBQUFBLE9BQVFDO0FBQVIsTUFBc0JDLCtDQUFRLENBQUNDLHVEQUFELENBQXBDO0FBQ0EsTUFBSUMsY0FBYyxHQUFDSixNQUFuQjtBQUNBLE1BQUlLLEVBQUUsR0FBRyxFQUFUO0FBQ0EsTUFBSUMsT0FBSjtBQUNBLFFBQU07QUFBQSxPQUFDQyxlQUFEO0FBQUEsT0FBaUJDO0FBQWpCLE1BQTBDTiwrQ0FBUSxDQUFDLENBQUQsQ0FBeEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ08sY0FBRDtBQUFBLE9BQWdCQztBQUFoQixNQUF3Q1IsK0NBQVEsQ0FBQyxDQUFELENBQXREO0FBQ0EsUUFBTVMsUUFBUSxHQUFHO0FBQ2JD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cEI7QUFDRSxTQUFNLGVBRFI7QUFFRUEsSUFBRSxFQUFDO0FBRkwsQ0FuRW9CLEVBdUV0QjtBQUNJLFNBQU0sZUFEVjtBQUVJQSxJQUFFLEVBQUM7QUFGUCxDQXZFc0IsRUEyRXRCO0FBQ0ksU0FBTSxlQURWO0FBRUlBLElBQUUsRUFBQztBQUZQLENBM0VzQixFQStFdEI7QUFDSSxTQUFNLGVBRFY7QUFFSUEsSUFBRSxFQUFDO0FBRlAsQ0EvRXNCLEVBbUZ0QjtBQUNJLFNBQU0sZ0JBRFY7QUFFSUEsSUFBRSxFQUFDO0FBRlAsQ0FuRnNCLEVBdUZ0QjtBQUNJLFNBQU0sK0JBRFY7QUFFSUEsSUFBRSxFQUFDO0FBRlAsQ0F2RnNCLEVBMkZ0QjtBQUNJLFNBQU0saUNBRFY7QUFFSUEsSUFBRSxFQUFDO0FBRlAsQ0EzRnNCLEVBK0Z0QjtBQUNJLFNBQU0saUNBRFY7QUFFSUEsSUFBRSxFQUFDO0FBRlAsQ0EvRnNCLENBQW5CLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBUDtBQUNBOztBQUVBLE1BQU1xRyxNQUFNLEdBQUcsTUFBTTtBQUVqQixzQkFDSTtBQUFBLHdDQUFlLFFBQWY7QUFBQSw0QkFDSSw4REFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBNkJILENBL0JEOztBQWlDQSwrREFBZUEsTUFBZixFOzs7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUkEsb0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvc2xpZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VSZWYsZm9yd2FyZFJlZiwgdXNlRWZmZWN0LHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9hdXRvR2FwU2xpZGVyLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCJcclxuaW1wb3J0IFNsaWRlckNhcmQgZnJvbSAnLi9hdXRvR2FwU2xpZGVyQ2FyZCdcclxuaW1wb3J0IHtpbWdBcnJEYXRhfSBmcm9tICcuL3NsaWRlckNhcmREYXRhJ1xyXG5jb25zdCBBdXRvR2FwU2xpZGVyID0gKCkgPT4ge1xyXG4gICAgXHJcbiAgICAvLyBFYWNoIHNsaWRlciBjYXJkXHJcbiAgICBjb25zdCBjaGlsZFNsaWRlckNhcmRSZWYgPSB1c2VSZWYoKTtcclxuICAgIC8vIFBhcmVudCBvZiBzbGlkZXIgY2FyZHMgLCBkaXYgaG9sZGluZyBhbGwgc2xpZGUgY2FyZHNcclxuICAgIGNvbnN0IGRpdkNhcmRzQ29udGFpbmVyID0gdXNlUmVmKCk7ICAgXHJcbiAgICAvLyBTbGlkZXIgY29udGFpbmluZyBjYXJkcyBjb250YWluZXIgYW5kIHByZXYsIG5leHQgYnV0dG9ucy5cclxuICAgIGNvbnN0IGF1dG9HYXBTbGlkZXJNYWluQ29udGFpbmVyID0gdXNlUmVmKCk7XHJcbiAgICAvLyBHcmFiYmluZyBuZXh0IGJ1dHRvblxyXG4gICAgY29uc3QgbmV4dEJ1dHRvbiA9IHVzZVJlZigpO1xyXG4gICAgLy8gR3JhYmJpbmcgcHJldiBidXR0b25cclxuICAgIGNvbnN0IHByZXZCdXR0b24gPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IFtpbWdBcnIsaW1nQXJyVXBkdF0gPSB1c2VTdGF0ZShpbWdBcnJEYXRhKVxyXG4gICAgbGV0IGltYWdlVXBkYXRlQXJyPWltZ0FycjtcclxuICAgIGxldCBpZCA9IDEyO1xyXG4gICAgbGV0IHRpbWVySWQ7XHJcbiAgICBjb25zdCBbc2xpZGVDYXJkTWFyZ2luLHVwZGF0ZVNsaWRlQ2FyZE1hcmdpbl0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFt0cmFuc2xhdGVWYWx1ZSx1cGRhdGVUcmFuc2xhdGVWYWx1ZV0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IHN0eWxlSW1nID0ge1xyXG4gICAgICAgIHdpZHRoOicyMDBweCcsXHJcbiAgICAgICAgaGVpZ2h0OiczMDBweCcsXHJcbiAgICAgICAgbWFyZ2luOmAwICR7c2xpZGVDYXJkTWFyZ2luLzJ9cHggMCAke3NsaWRlQ2FyZE1hcmdpbi8yfXB4YFxyXG4gICAgfTtcclxuICAgIC8vIEluaXRpYWxpemUgZGVmYXVsdCB2YWx1ZXNcclxuICAgIGxldCBzbGlkZXJWaXNpYmxlV2lkdGg9MDtcclxuICAgIGxldCBlYWNoU2xpZGVXaWR0aCA9IDA7XHJcbiAgICBsZXQgc2xpZGVzVG9TY3JvbGwgPSAwO1xyXG4gICAgbGV0IHNsaWRlc1RvU2Nyb2xsV2lkdGg9MDtcclxuICAgIGxldCBuZXh0UHhWYWx1ZVRvU2NybCA9IDA7IFxyXG4gICAgbGV0IHByZXZQeFZhbHVlVG9TY3JsID0gMDtcclxuICAgIGxldCBkaXZDYXJkc0NvbnRhaW5lclRvdGFsV2lkdGg9MDtcclxuICAgIC8vIERldGVjdCBpZiB3ZSByZWFjaGVkIGVuZCBvZiB0aGUgc2xpZGVzXHJcbiAgICBsZXQgZW5kT2ZTbGlkZSA9IGZhbHNlXHJcbiAgICAvLyBMb2FkYXNoIHRocm90dGxlciB0byB0aHJvdHRsZSByZXNpemUgYW5kIGlmIHVzZXIgY2xpY2tzIGJ1dHRvbiBtYW55IHRpbWVzIFxyXG4gICAgbGV0IHRocm90dGxlID0gXy50aHJvdHRsZSgoZnVuYywuLi5hcmdzKT0+IHtcclxuICAgICAgICBmdW5jKC4uLmFyZ3MpXHJcbiAgICB9LCA2MDApO1xyXG4gICAgbGV0IGRlYm91bmNlID0gXy5kZWJvdW5jZSgoZnVuYywuLi5hcmdzKT0+IHtcclxuICAgICAgICBmdW5jKC4uLmFyZ3MpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2RlaWJvdW5jJylcclxuICAgIH0sIDgwMCk7XHJcbiAgICBjb25zdCByZXNldFNsaWRlclBvc2l0aW9uID0gKCkgPT57XHJcbiAgICAgICAgLy8gZGVmYXVsdCBzbGlkZXNUb1Njcm9sbFdpZHRoOjI0MHB4XHJcbiAgICAgICAgbmV4dFB4VmFsdWVUb1NjcmwgPSAtc2xpZGVzVG9TY3JvbGxXaWR0aDsgXHJcbiAgICAgICAgcHJldlB4VmFsdWVUb1NjcmwgPSBzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4gICAgICAgIC8vIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLSR7MH1weClgO1xyXG4gICAgICAgIHVwZGF0ZVRyYW5zbGF0ZVZhbHVlKDApXHJcbiAgICAgICAgZGlzcGxheUFycm93KCdwcmV2JyxmYWxzZSlcclxuICAgICAgICBkaXZDYXJkc0NvbnRhaW5lclRvdGFsV2lkdGggPSBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoXHJcbiAgICB9XHJcbiAgICBjb25zdCBkaXNwbGF5QXJyb3c9KGRpcmVjdGlvbj0ncHJldicsdG9EaXNwbGF5PXRydWUpPT57XHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbj09PSdwcmV2Jyl7XHJcbiAgICAgICAgICAgIGlmICAoIXRvRGlzcGxheSlzaG93UHJldkJ1dHRvbihmYWxzZSlcclxuICAgICAgICAgICAgZWxzZSBzaG93UHJldkJ1dHRvbih0cnVlKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBpZiAgKCF0b0Rpc3BsYXkpc2hvd05leHRCdXR0b24oZmFsc2UpXHJcbiAgICAgICAgICAgIGVsc2Ugc2hvd05leHRCdXR0b24odHJ1ZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCB1cGRhdGVTbGlkZXJQb3NpdGlvblJlZiA9ICh1cGRhdGVyZWYpID0+e1xyXG4gICAgICAgIC8vIHRyYW5zbGF0ZVgoMCkgLT4gaW5pdGlhbCBwb3NpdGlvbiwgc3RhcnRpbmcgcG9zaXRpb25cclxuICAgICAgICAvLyB0cmFuc2xhdGVYKC0yNDBweCkgLT4gbW92ZXMgc2xpZGUgaW4gLT4gZGlyZWN0aW9uIGJ5IDI0MHB4KGVhY2ggc2xpZGUgd2lkdGggYnkgZGVmYXVsdClcclxuICAgICAgICBpZiAodXBkYXRlcmVmID09PSAnbmV4dCcpe1xyXG4gICAgICAgICAgICAvLyBtaW51cyBwb3NpdGlvbiBnb2VzIC0+IGRpcmVjdGlvbiBvbiB0cmFuc2xhdGVcclxuICAgICAgICAgICAgLy8gZXg6IHByZXZQeFZhbHVlVG9TY3JsPTI0MCxuZXh0UHhWYWx1ZVRvU2NybD0tMjQwICBhbmQgc2xpZGVzVG9TY3JvbGxXaWR0aD0yNDBcclxuICAgICAgICAgICAgcHJldlB4VmFsdWVUb1NjcmwgPSBwcmV2UHhWYWx1ZVRvU2NybC1zbGlkZXNUb1Njcm9sbFdpZHRoOyBcclxuICAgICAgICAgICAgLy8gZmlyc3QtdGltZTpwcmV2UHhWYWx1ZVRvU2NybDowXHJcbiAgICAgICAgICAgIC8vIHNlY29uZC10aW1lOnByZXZQeFZhbHVlVG9TY3JsOi0yNDBcclxuICAgICAgICAgICAgbmV4dFB4VmFsdWVUb1NjcmwgPSBuZXh0UHhWYWx1ZVRvU2NybC1zbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4gICAgICAgICAgICAvLyBmaXJzdC10aW1lOm5leHRQeFZhbHVlVG9TY3JsOi00ODBcclxuICAgICAgICAgICAgLy8gc2Vjb25kLXRpbWU6bmV4dFB4VmFsdWVUb1Njcmw6LTcyMFxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAvLyBleDogcHJldlB4VmFsdWVUb1Njcmw9LTI0MCxuZXh0UHhWYWx1ZVRvU2NybD0tNzIwICBhbmQgc2xpZGVzVG9TY3JvbGxXaWR0aD0yNDBcclxuICAgICAgICAgICAgbmV4dFB4VmFsdWVUb1NjcmwgPW5leHRQeFZhbHVlVG9TY3JsICtzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4gICAgICAgICAgICAvLyBmaXJzdC10aW1lOnByZXZQeFZhbHVlVG9TY3JsOjQ4MFxyXG4gICAgICAgICAgICAvLyBzZWNvbmQtdGltZTpwcmV2UHhWYWx1ZVRvU2NybDo2MjBcclxuICAgICAgICAgICAgcHJldlB4VmFsdWVUb1NjcmwgPSBwcmV2UHhWYWx1ZVRvU2NybCtzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4gICAgICAgICAgICAvLyBmaXJzdC10aW1lOm5leHRQeFZhbHVlVG9TY3JsOjBcclxuICAgICAgICAgICAgLy8gc2Vjb25kLXRpbWU6bmV4dFB4VmFsdWVUb1Njcmw6MjQwXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgdXBkYXRlU2xpZGVyQXJyYXkgPSAoKSA9PntcclxuICAgICAgICBjb25zdCBuZXdFbGVtZW50ID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAnc3JjJzonc3RhdGljL3BlcjEuanBnJyxcclxuICAgICAgICAgICAgICAgIGlkOmlkLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAnc3JjJzonc3RhdGljL3BlcjIuanBnJyxcclxuICAgICAgICAgICAgICAgIGlkOmlkKzFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgICAvLyBpbWdBcnIucHVzaCguLi5uZXdFbGVtZW50KVxyXG4gICAgICAgIGltYWdlVXBkYXRlQXJyID0gIGltYWdlVXBkYXRlQXJyLmNvbmNhdChuZXdFbGVtZW50KVxyXG4gICAgICAgIGltZ0FyclVwZHQoaW1hZ2VVcGRhdGVBcnIgKTtcclxuICAgICAgICBkaXZDYXJkc0NvbnRhaW5lclRvdGFsV2lkdGggPSBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoXHJcbiAgICAgICAgaWQgPSBpZCsyO1xyXG4gICAgICAgIC8vIC8vIGNvbnNvbGUubG9nKGltZ0FyckRhdGEpXHJcbiAgICAgICAgLy8gY2xpY2tIYW5kbGVyKCduZXh0JylcclxuICAgIH1cclxuICAgIGNvbnN0IGNsaWNrSGFuZGxlciA9IChkaXJlY3Rpb24pPT57IFxyXG4gICAgICAgIC8vIElmIG5leHQgYnV0dG9uIGlzIGNsaWNrZWRcclxuICAgICAgICAvLyBkaXZDYXJkc0NvbnRhaW5lclRvdGFsV2lkdGggPSBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoXHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ25leHQnKXtcclxuICAgICAgICAgICAgZGlzcGxheUFycm93KCdwcmV2Jyx0cnVlKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gSWYgcmVhY2hlZCBlbmQgb2Ygc2xpZGUgcmV0dXJuIHRvIGZpcnN0IHNsaWRlXHJcbiAgICAgICAgICAgIGlmKGVuZE9mU2xpZGUpeyAgXHJcbiAgICAgICAgICAgICAgICAvLyBSZXR1cm4gdG8gZmlyc3Qgc2xpZGUgYW5kIHJlc2V0IHBvc2l0aW9ucyBvZiBzY3JvbGwgcmVmZXJlbmNlXHJcbiAgICAgICAgICAgICAgICByZXNldFNsaWRlclBvc2l0aW9uKClcclxuICAgICAgICAgICAgICAgIGVuZE9mU2xpZGUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgLy8gZXg6IHNheSBkaXZDYXJkc0NvbnRhaW5lclRvdGFsV2lkdGggPSAyMzYwOyBhbmQgc2xpZGVyVmlzaWJsZVdpZHRoID0gMTMzNiBhbmQgbmV4dFB4VmFsdWVUb1NjcmwgPSAtMTQ0MCB0aGVuXHJcbiAgICAgICAgICAgICAgICAvLyBzbGlkZXJWaXNpYmxlV2lkdGggaXMgc2xpZGVyIHdpZHRoIHdoaWNoIGlzIHZpc2libGUgdG8gdXNlclxyXG4gICAgICAgICAgICAgICAgLy8gZGl2Q2FyZHNDb250YWluZXJUb3RhbFdpZHRoIGlzIHRvdGFsIHdpZHRoIG9mIGNvbnRhaW5lciBob2xkaW5nIGNhcmRzID0gIHZpc2libGUgYXJlYStoaWRkZW4gYXJlYVxyXG4gICAgICAgICAgICB9ZWxzZSBpZiAoKGRpdkNhcmRzQ29udGFpbmVyVG90YWxXaWR0aC1zbGlkZXJWaXNpYmxlV2lkdGgtc2xpZGVDYXJkTWFyZ2luLTEwKTw9IC1uZXh0UHhWYWx1ZVRvU2NybCkge1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgc2xpZGUgaXMgYWJvdXQgdG8gcmVhY2ggbGFzdCBzbGlkZSAsIGxhc3QgYnV0IG9uZSBjbGljayBvZiBlbmRvZnNsaWRlXHJcbiAgICAgICAgICAgICAgICAvLyBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR7LWRpdkNhcmRzQ29udGFpbmVyVG90YWxXaWR0aCtzbGlkZXJWaXNpYmxlV2lkdGh9cHgpYFxyXG4gICAgICAgICAgICAgICAgdXBkYXRlVHJhbnNsYXRlVmFsdWUoLWRpdkNhcmRzQ29udGFpbmVyVG90YWxXaWR0aCtzbGlkZXJWaXNpYmxlV2lkdGgpXHJcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgc2xpZGVyIHBvc2l0aW9uIHJlZmVyZW5jZSwgcGFzcyAnbmV4dCcgdG8gdXBkYXRlIHJlZnJlbmNlIHdpdGggcmVzcGVjdCB0byBuZXh0IGJ1dHRvbiBjbGlja1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlU2xpZGVyUG9zaXRpb25SZWYoJ25leHQnKVxyXG4gICAgICAgICAgICAgICAgZW5kT2ZTbGlkZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIC8vIHVwZGF0ZVNsaWRlckFycmF5KClcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAvLyBJZiBldmVyeXRoaW5nIGlzIHJpZ2h0IHRyYW5zbGF0ZSB0byBuZXh0IHB4IHZhbHVlXHJcbiAgICAgICAgICAgICAgICAvLyBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR7bmV4dFB4VmFsdWVUb1Njcmx9cHgpYCBcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVRyYW5zbGF0ZVZhbHVlKG5leHRQeFZhbHVlVG9TY3JsKVxyXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIHNsaWRlciBwb3NpdGlvbiByZWZlcmVuY2UsIHBhc3MgJ25leHQnIHRvIHVwZGF0ZSByZWZyZW5jZSB3aXRoIHJlc3BlY3QgdG8gbmV4dCBidXR0b24gY2xpY2tcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVNsaWRlclBvc2l0aW9uUmVmKCduZXh0JylcclxuICAgICAgICAgICAgICAgIGVuZE9mU2xpZGUgPSBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2UgaWYoZGlyZWN0aW9uID09PSAncHJldicpe1xyXG4gICAgICAgICAgICAvLyBFbmQgb2Ygc2xpZGUgY2Fubm90IGJlIHJlYWNoZWQgYnkgY2xpY2tpbmcgcHJldmlvdXMgYnV0dG9uXHJcbiAgICAgICAgICAgIGVuZE9mU2xpZGUgPSBmYWxzZVxyXG4gICAgICAgICAgICBpZihwcmV2UHhWYWx1ZVRvU2NybD4wKXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlBcnJvdygncHJldicsZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAvLyBJZiBzbGlkZXIgaXMgb3ZlciBsZWZ0IHJldHVybiB0byBmaXJzdCBzbGlkZSBhbmQgcmVzZXQgcG9zaXRpb25zIG9mIHNjcm9sbCByZWZlcmVuY2VcclxuICAgICAgICAgICAgICAgIC8vIGV4OiBzYXkgYnkgZGVmYXVsdCByZWZlcmVuY2UgcHJldlB4VmFsdWVUb1NjcmwgaXMgc2V0IHRvIDI0MHB4IGhlbmNlIHRoaXMgaXMgZXhlY3V0ZWRcclxuICAgICAgICAgICAgICAgIHJlc2V0U2xpZGVyUG9zaXRpb24oKVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlBcnJvdygncHJldicsdHJ1ZSlcclxuICAgICAgICAgICAgICAgIC8vIElmIGV2ZXJ5dGhpbmcgaXMgcmlnaHQgdHJhbnNsYXRlIHRvIHByZXYgcHggdmFsdWVcclxuICAgICAgICAgICAgICAgIC8vIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHtwcmV2UHhWYWx1ZVRvU2NybH1weClgO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlVHJhbnNsYXRlVmFsdWUocHJldlB4VmFsdWVUb1NjcmwpXHJcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgc2xpZGVyIHBvc2l0aW9uIHJlZmVyZW5jZSwgcGFzcyAncHJldicgdG8gdXBkYXRlIHJlZnJlbmNlIHdpdGggcmVzcGVjdCB0byBuZXh0IGJ1dHRvbiBjbGlja1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlU2xpZGVyUG9zaXRpb25SZWYoJ3ByZXYnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBpbml0VmFsdWVzID0oKSA9PntcclxuICAgICAgICBlbmRPZlNsaWRlID0gZmFsc2VcclxuICAgICAgICAvLyBTbGlkZXIgd2lkdGggaXMgYW4gb3V0ZXIgZGl2IHdoaWNoIHNob3dzIGVudGlyZSBzbGlkZXIgaWYgd2Ugc2V0IHNsaWRlciB0byBiZSAyMDBweCB3aWRlLSBcclxuICAgICAgICAvLyAtd2lkdGggaXMgc2V0IG9uIHRoaXMgZGl2ICwgd2UgbmVlZCBpdCB0byBjYWxjdWxhdGUgc2xpZGVyIHZpc2libGUgd2lkdGggaW4gd2hpY2ggc2xpZGVyIGlzIHZpc2libGVcclxuICAgICAgICAvLyBieSBkZWZhdWx0IHNsaWRlciB0YWtlcyBmdWxsIHZpZXdwb3J0IHdpZHRoLmV4IDogMTYwMHB4XHJcbiAgICAgICAgc2xpZGVyVmlzaWJsZVdpZHRoID0gYXV0b0dhcFNsaWRlck1haW5Db250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aDtcclxuICAgICAgICAvLyBJZiBzbGlkZXIgaGFzIG1hcmdpbiAoc3BhY2UgYmV0d2VlbiBzbGlkZXIgY2FyZHMgaWYgc2xpZGVycyBhcmUgdG91Y2ggdG8gZWFjaCBvdGhlciB0aGVuIGl0IGhhcyBubyBtYXJnaW4pLSBcclxuICAgICAgICAvLyAtaXQgaXMgcmVxdWlyZWQgdG8gY2FsY3VsYXRlIGhvdyBtdWNoIGRvZXMgc2xpZGVyIHNjcm9sbHNcclxuICAgICAgICBsZXQgZWFjaFNsaWRlID0gY2hpbGRTbGlkZXJDYXJkUmVmLmN1cnJlbnRcclxuICAgICAgICBsZXQgZWFjaHNsaWRlQ2FyZE1hcmdpbiA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVhY2hTbGlkZSkubWFyZ2luUmlnaHQuc2xpY2UoMCwgLTIpO1xyXG4gICAgICAgIC8vIENvbnZlcnQgZnJvbSBzdHJpbmcgdG8gbnVtYmVyIGFuZCBtdWx0aXBseSBpdCBieSB0d28gYmVjYXVzZSBtYXJnaW4gaXMgYXBwbGllZCBvbiBib3RoIHNpZGVzXHJcbiAgICAgICAgZWFjaHNsaWRlQ2FyZE1hcmdpbj1OdW1iZXIoZWFjaHNsaWRlQ2FyZE1hcmdpbikqMlxyXG4gICAgICAgIC8vIEVhY2ggc2xpZGVyIGNhcmQgd2lkdGggaXMgY2FsY3VsYXRlZCBieSBhZGRpbmcgaXRzIG93biB3aWR0aCB3aXRoIGl0cyBvd24gbWFyZ2luXHJcbiAgICAgICAgZWFjaFNsaWRlV2lkdGggPSBlYWNoU2xpZGUub2Zmc2V0V2lkdGgrZWFjaHNsaWRlQ2FyZE1hcmdpbjtcclxuICAgICAgICAvLyBlYWNoU2xpZGVXaWR0aCA9TnVtYmVyKGVhY2hTbGlkZVdpZHRoKVxyXG4gICAgICAgIC8vIE51bWJlciBvZiBzbGlkZXMgdG8gc2Nyb2xsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGwgPSAxXHJcbiAgICAgICAgLy8gTnVtYmVyIG9mIHNsaWRlcyB0byBzY3JvbGwgaW4gcGl4ZWxzIGV4OiBpZiAyNDBweFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsV2lkdGg9ZWFjaFNsaWRlV2lkdGgqc2xpZGVzVG9TY3JvbGw7XHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGxXaWR0aCA9IHNsaWRlclZpc2libGVXaWR0aDtcclxuICAgICAgICAvLyB0byBjYWxjdWxhdGUgYW5kIHRyYWNrIHByb2dyZXNzIG9mIGxlZnQgYW5kIHJpZ2h0IHNjcm9sbCBwb3NpdGlvbnNcclxuICAgICAgICBwcmV2UHhWYWx1ZVRvU2NybCA9IHNsaWRlc1RvU2Nyb2xsV2lkdGg7IC8vIGV4OjI0MHB4XHJcbiAgICAgICAgbmV4dFB4VmFsdWVUb1NjcmwgPSAtc2xpZGVzVG9TY3JvbGxXaWR0aDsgLy8gZXg6LTI0MHB4XHJcbiAgICAgICAgLy8gQ2FyZHMgY29udGFpbmVyIHdpZHRoIGdlbmVyYWxseSBlcXVhbCB0byBlYWNoc2xpZGVyd2lkdGgqdG90YWxudW1iZXJvZnNsaWRlcyBpbmNsdWRpbmcgbWFyZ2luIGV4OiBzYXkgMjA5MHB4XHJcbiAgICAgICAgZGl2Q2FyZHNDb250YWluZXJUb3RhbFdpZHRoID0gZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aFxyXG4gICAgICAgIGRpc3BsYXlBcnJvdygncHJldicsZmFsc2UpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGF1dG9TbGlkZXJNb3ZlPSh0aW1lb3V0LGF1dG9wbGF5KT0+e1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibW91c2VsZWF2ZVwiKVxyXG4gICAgICAgIGlmKGF1dG9wbGF5KXtcclxuICAgICAgICAgICAgdGltZXJJZD1zZXRJbnRlcnZhbCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhyb3R0bGUoY2xpY2tIYW5kbGVyLCduZXh0JylcclxuICAgICAgICAgICAgfSwxMDAwMDAwMDAwMDAwMDApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgY2xlYXJBdXRvU2xpZGVyTW92ZT0odGltZXJJZCk9PntcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm1vdXNlZW50ZXJcIilcclxuICAgICAgICBpZih0aW1lcklkKXtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gdXNlRWZmZWN0IGZvciBudW1iZXIgb2Ygc2xpZGVzIHRvIHNob3cgcGVyIGRpdlxyXG4gICAgZnVuY3Rpb24gIHNldFNsaWRlckNhcmRTdHlsZShtYXJnaW4pIHtcclxuICAgICAgICB1cGRhdGVTbGlkZUNhcmRNYXJnaW4obWFyZ2luKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZU1hcmdpbigpe1xyXG4gICAgICAgIGNvbnN0IG1pbkdhcEJldHdlZW5TbGlkZXMgPSAxMFxyXG4gICAgICAgIGNvbnN0IHNsaWRlclZpc2libGVXaWR0aCA9IGF1dG9HYXBTbGlkZXJNYWluQ29udGFpbmVyLmN1cnJlbnQub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgY29uc3QgZWFjaFNsaWRlV2lkdGggPSBjaGlsZFNsaWRlckNhcmRSZWYuY3VycmVudC5vZmZzZXRXaWR0aCttaW5HYXBCZXR3ZWVuU2xpZGVzXHJcbiAgICAgICAgY29uc3Qgc2xpZGVzUGVyVmlzaWJsZVdpZHRoID0gc2xpZGVyVmlzaWJsZVdpZHRoLyhlYWNoU2xpZGVXaWR0aCk7XHJcbiAgICAgICAgY29uc3QgbWFyZ2luVG9TZXRJblBlcmNlbnRhZ2UgPSBzbGlkZXNQZXJWaXNpYmxlV2lkdGggLSBNYXRoLmZsb29yKHNsaWRlc1BlclZpc2libGVXaWR0aClcclxuICAgICAgICBjb25zdCBtYXJnaW5Ub1NldEluUHggPSAoKG1hcmdpblRvU2V0SW5QZXJjZW50YWdlKSplYWNoU2xpZGVXaWR0aClcclxuICAgICAgICBjb25zdCBtYXJnaW5QZXJTbGlkZSA9IChtYXJnaW5Ub1NldEluUHgvKE1hdGguY2VpbChzbGlkZXNQZXJWaXNpYmxlV2lkdGgpLTEpKSttaW5HYXBCZXR3ZWVuU2xpZGVzXHJcbiAgICAgICAgc2V0U2xpZGVyQ2FyZFN0eWxlKG1hcmdpblBlclNsaWRlKVxyXG4gICAgfVxyXG4gICAgLy8gVXNlZWZmZWN0IGZvciBzbGlkZXIgbmV4dCBhbmQgcHJldiBidXR0b25cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIC8vIEV4ZWN1dGUgd2hlbiBtb3VudGluZ1xyXG4gICAgICAgIC8vIEluaXRpYWxpemUgcmVxdWlyZWQgdmFsdWVzIGluIHBhcnRpY3VsYXIgZnVuY3Rpb25cclxuICAgICAgICBjYWxjdWxhdGVNYXJnaW4oKVxyXG4gICAgICAgIGluaXRWYWx1ZXMoKVxyXG4gICAgICAgIC8vIGRpc3BsYXlDb250ZW50KGluaXR2YWx1ZXMpXHJcbiAgICAgICAgYXV0b1NsaWRlck1vdmUoMjAwMCx0cnVlKVxyXG4gICAgICAgIC8vIHNsaWRlclN0eWxlLnRyYW5zZm9ybSgnNDAwcHgnKVxyXG4gICAgICAgIC8vIEhhbmRsZSBjbGljayBldmVudCBmb3IgYm90aCBidXR0b25zXHJcbiAgICAgICAgbmV4dEJ1dHRvbi5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+dGhyb3R0bGUoY2xpY2tIYW5kbGVyLCduZXh0JykpXHJcbiAgICAgICAgcHJldkJ1dHRvbi5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+dGhyb3R0bGUoY2xpY2tIYW5kbGVyLCdwcmV2JykpXHJcbiAgICAgICAgYXV0b0dhcFNsaWRlck1haW5Db250YWluZXIuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywoKT0+Y2xlYXJBdXRvU2xpZGVyTW92ZSh0aW1lcklkKSlcclxuICAgICAgICBhdXRvR2FwU2xpZGVyTWFpbkNvbnRhaW5lci5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCgpPT5hdXRvU2xpZGVyTW92ZSgxMDAwLHRydWUpIClcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywoKT0+e1xyXG4gICAgICAgICAgICBkZWJvdW5jZSgoKT0+e1xyXG4gICAgICAgICAgICAgICAgY2FsY3VsYXRlTWFyZ2luKCk7XHJcbiAgICAgICAgICAgICAgICBpbml0VmFsdWVzKCk7XHJcbiAgICAgICAgICAgICAgICByZXNldFNsaWRlclBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiAoKT0+e1xyXG4gICAgICAgICAgICAvLyBFeGVjdXRlIHdoZW4gdW5tb3VudGluZyAoY2xlYW51cClcclxuICAgICAgICAgICAgbmV4dEJ1dHRvbi5jdXJyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+dGhyb3R0bGUoY2xpY2tIYW5kbGVyLCduZXh0JykpXHJcbiAgICAgICAgICAgIHByZXZCdXR0b24uY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PnRocm90dGxlKGNsaWNrSGFuZGxlciwncHJldicpKSAgICAgICBcclxuICAgICAgICAgICAgYXV0b0dhcFNsaWRlck1haW5Db250YWluZXIuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywoKT0+Y2xlYXJBdXRvU2xpZGVyTW92ZSh0aW1lcklkKSlcclxuICAgICAgICAgICAgYXV0b0dhcFNsaWRlck1haW5Db250YWluZXIuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywoKT0+YXV0b1NsaWRlck1vdmUoMTAwMCx0cnVlKSApXHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCgpPT57XHJcbiAgICAgICAgICAgICAgICBkZWJvdW5jZSgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGN1bGF0ZU1hcmdpbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGluaXRWYWx1ZXMoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXNldFNsaWRlclBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9KTsgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSxbXSlcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdNYXJnaW4gdXBkYXRlZCcrc2xpZGVDYXJkTWFyZ2luKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpPT5kaXZDYXJkc0NvbnRhaW5lclRvdGFsV2lkdGggPSBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoLDEwMClcclxuICAgIH0sW3NsaWRlQ2FyZE1hcmdpbl0pXHJcbiAgICBsZXQgdG91Y2hTdGFydFBvcyA9MDtcclxuICAgIGNvbnN0IHRvdWNoU3RhcnRIYW5kbGVyID0gKGUpPT57XHJcbiAgICAgICAgdG91Y2hTdGFydFBvcz1lLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFg7XHJcbiAgICB9XHJcbiAgICBjb25zdCB0b3VjaEVuZEhhbmRsZXI9KGUpPT57XHJcbiAgICAgICAgbGV0IHRvdWNoRW5kUG9zID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYO1xyXG4gICAgICAgIGlmICh0b3VjaEVuZFBvcz09PXRvdWNoU3RhcnRQb3MpIHJldHVyblxyXG4gICAgICAgIGlmICh0b3VjaEVuZFBvcy10b3VjaFN0YXJ0UG9zPjApIGNsaWNrSGFuZGxlcigncHJldicpXHJcbiAgICAgICAgZWxzZSBjbGlja0hhbmRsZXIoJ25leHQnKVxyXG4gICAgfVxyXG4gICAgY29uc3QgZHJhZ0hhbmRsZXIgPSAoZSkgPT57XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICB9XHJcbiAgICBjb25zdCBvbkltYWdlTG9hZCA9IChpbWFnZSxpc0ltZ1JlYWR5KSA9PntcclxuICAgICAgICBpZiAoaXNJbWdSZWFkeSlpbWFnZS5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkaW5nJylcclxuICAgICAgICBlbHNlIGltYWdlLmNsYXNzTGlzdC5hZGQoJ2xvYWRpbmcnKSAgICBcclxuICAgIH1cclxuICAgIC8vIHVzZUVmZmVjdCBmb3IgdG91Y2ggY2FwYWJpbGl0eVxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgbGV0IGltYWdlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW1hZ2VIb2xkZXInKSlcclxuICAgICAgICBpbWFnZXMuZm9yRWFjaCgoaW1hZ2UpPT57XHJcbiAgICAgICAgICAgIG9uSW1hZ2VMb2FkKGltYWdlLGZhbHNlKVxyXG4gICAgICAgICAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLChlKT0+ZHJhZ0hhbmRsZXIoZSkgKVxyXG4gICAgICAgICAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywoZSk9Pm9uSW1hZ2VMb2FkKGltYWdlLHRydWUpKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYXV0b0dhcFNsaWRlck1haW5Db250YWluZXIuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywoZSk9PnRvdWNoU3RhcnRIYW5kbGVyKGUpLHtwYXNzaXZlOnRydWV9KVxyXG4gICAgICAgIGF1dG9HYXBTbGlkZXJNYWluQ29udGFpbmVyLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLChlKT0+dG91Y2hFbmRIYW5kbGVyKGUpLHtwYXNzaXZlOnRydWV9IClcclxuICAgICAgICBhdXRvR2FwU2xpZGVyTWFpbkNvbnRhaW5lci5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsKGUpPT57Y29uc29sZS5sb2coZSl9LHtwYXNzaXZlOnRydWV9KVxyXG4gICAgICAgIC8vIGNoaWxkU2xpZGVyQ2FyZFJlZi5jdXJyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsKGUpPT5kcmFnSGFuZGxlcihlKSApXHJcbiAgICAgICAgLy8gYXV0b0dhcFNsaWRlck1haW5Db250YWluZXIuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLChlKT0+dG91Y2hTdGFydEhhbmRsZXIoZSkgKVxyXG4gICAgICAgIHJldHVybiAoKT0+IHtcclxuICAgICAgICAgICAgYXV0b0dhcFNsaWRlck1haW5Db250YWluZXIuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywoZSk9PnRvdWNoU3RhcnRIYW5kbGVyKGUpIClcclxuICAgICAgICAgICAgYXV0b0dhcFNsaWRlck1haW5Db250YWluZXIuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsKGUpPT50b3VjaEVuZEhhbmRsZXIoZSkse3Bhc3NpdmU6dHJ1ZX0pXHJcbiAgICAgICAgICAgIGltYWdlcy5mb3JFYWNoKChpbWFnZSk9PntcclxuICAgICAgICAgICAgICAgIGltYWdlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsKGUpPT5kcmFnSGFuZGxlcihlKSApXHJcbiAgICAgICAgICAgICAgICBpbWFnZS5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywoZSk9Pm9uSW1hZ2VMb2FkKGUpKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAvLyBhdXRvR2FwU2xpZGVyTWFpbkNvbnRhaW5lci5jdXJyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsKGUpPT50b3VjaFN0YXJ0SGFuZGxlcihlKSlcclxuICAgICAgICAgICAgLy8gdGhyb3R0bGUodG91Y2hTdGFydEhhbmRsZXIsMjAwMCxlKSBcclxuICAgICAgICB9XHJcbiAgICB9LFtdKVxyXG4gICAgY29uc3QgW3ByZXZCdXR0b25EaXNwbGF5LHNob3dQcmV2QnV0dG9uXT0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbbmV4dEJ1dHRvbkRpc3BsYXksc2hvd05leHRCdXR0b25dPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIC8vIGNvbnN0IGxlZnRTdHlsZSA9IHtkaXNwbGF5OnByZXZCdXR0b25EaXNwbGF5P1wiaW5saW5lLWJsb2NrXCI6XCJub25lXCJ9XHJcbiAgICAvLyBjb25zdCByaWdodFN0eWxlID0ge2Rpc3BsYXk6bmV4dEJ1dHRvbkRpc3BsYXk/XCJpbmxpbmUtYnRyYW5zbGF0ZVgodHJhbnNsYXRlVmFsdWUpbG9ja1wiOlwibm9uZVwifVxyXG4gICAgLy8gY29uc3Qgc2xpZGVyU3R5bGUgPSB7dHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgke3RyYW5zbGF0ZVZhbHVlKydweCd9KWAgfHwgJzAnfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJ2aXNpYmxlRGl2XCIgcmVmPXthdXRvR2FwU2xpZGVyTWFpbkNvbnRhaW5lcn0gIGNsYXNzTmFtZT17c3R5bGVzLmF1dG9HYXBTbGlkZXJNYWluQ29udGFpbmVyICsgJyBhdXRvR2FwTWFpbkNvbnRhaW5lckRpdiAnfT5cclxuICAgICAgICAgICAgPGkgcmVmPXtwcmV2QnV0dG9ufSBzdHlsZT17c2xpZGVyU3R5bGVzLnByZXZCdXR0b24oe3ByZXZCdXR0b25EaXNwbGF5fSl9ICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b24rJyBwcmV2ICd9PlByZXY8L2k+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2ICBzdHlsZT17c2xpZGVyU3R5bGVzLmRpdkNhcmRzQ29udGFpbmVyKHt0cmFuc2xhdGVWYWx1ZX0pfSByZWY9e2RpdkNhcmRzQ29udGFpbmVyfSBjbGFzc05hbWU9e3N0eWxlcy5kaXZDYXJkc0NvbnRhaW5lcisgJyBpbWdDb21wICd9PlxyXG4gICAgICAgICAgICA8U2xpZGVyQ2FyZCByZWY9e2NoaWxkU2xpZGVyQ2FyZFJlZn0gaW1nQXJyPXtpbWdBcnJ9IHN0eWxlSW1nPXtzbGlkZXJTdHlsZXMuc2xpZGVDYXJkU3R5bGUoe3NsaWRlQ2FyZE1hcmdpbn0pfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8aSByZWY9e25leHRCdXR0b259IHN0eWxlPXtzbGlkZXJTdHlsZXMubmV4dEJ1dHRvbih7bmV4dEJ1dHRvbkRpc3BsYXl9KX0gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uKycgbmV4dCAnfT5OZXh0PC9pPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxwICBpZD17c3R5bGVzWydpZGVhJ119ID5oZXk8L3A+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG4vLyBTdHlsZXMgZm9yIHNsaWRlciBcclxuY29uc3Qgc2xpZGVyU3R5bGVzID0ge1xyXG4gICAgZGl2Q2FyZHNDb250YWluZXI6KHt0cmFuc2xhdGVWYWx1ZX0pPT4oe1xyXG4gICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHt0cmFuc2xhdGVWYWx1ZSsncHgnfSlgIHx8ICcwJyxcclxuICAgIH0pLFxyXG4gICAgbmV4dEJ1dHRvbjooe25leHRCdXR0b25EaXNwbGF5fSk9Pih7XHJcbiAgICAgICAgZGlzcGxheTpuZXh0QnV0dG9uRGlzcGxheT9cImlubGluZS1ibG9ja1wiOlwibm9uZVwiXHJcbiAgICB9KSxcclxuICAgIHNsaWRlQ2FyZFN0eWxlOih7c2xpZGVDYXJkTWFyZ2lufSk9Pih7XHJcbiAgICAgICAgd2lkdGg6JzIwMHB4JyxcclxuICAgICAgICBoZWlnaHQ6JzMwMHB4JyxcclxuICAgICAgICBtYXJnaW46YDAgJHtzbGlkZUNhcmRNYXJnaW4vMn1weCAwICR7c2xpZGVDYXJkTWFyZ2luLzJ9cHhgXHJcbiAgICB9KSxcclxuICAgIHByZXZCdXR0b246KHtwcmV2QnV0dG9uRGlzcGxheX0pPT4oe1xyXG4gICAgICAgIGRpc3BsYXk6cHJldkJ1dHRvbkRpc3BsYXk/XCJpbmxpbmUtYmxvY2tcIjpcIm5vbmVcIlxyXG4gICAgfSlcclxufVxyXG5leHBvcnQgZGVmYXVsdCBBdXRvR2FwU2xpZGVyOyIsImltcG9ydCBSZWFjdCx7dXNlUmVmLGZvcndhcmRSZWYsIHVzZUVmZmVjdCx1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vYXV0b0dhcFNsaWRlci5tb2R1bGUuc2NzcydcclxuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiXHJcblxyXG5jb25zdCBTbGlkZXJDYXJkID0gZm9yd2FyZFJlZigoe3N0eWxlSW1nLGltZ0Fycn0sY2hpbGRTbGlkZXJDYXJkUmVmKSA9PntcclxuICAgIC8vIGxldCBpbWFnZVNsaWRlID0gdXNlUmVmKG51bGwpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7aW1nQXJyLm1hcCgoc3JjLGluZGV4KT0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17c3JjLmlkfSAgcmVmPXtjaGlsZFNsaWRlckNhcmRSZWZ9IHN0eWxlPXtzdHlsZUltZ30gIGNsYXNzTmFtZT17c3R5bGVzLnNsaWRlckNhcmQrJyBkaXYgZGl2X19zbGlkZXJDYXJkIGRpdl9fc2xpZGVyQ2FyZC0tc2xpZGVDYWx1bGF0ZSAnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBrZXk9e3NyYy5pZH0gbG9hZGluZz0nbGF6eScgc3R5bGU9e3t9fSBzcmM9e3NyYy5zcmN9ICAgY2xhc3NOYW1lPXtzdHlsZXMuc2xpZGVyQ2FyZEltZyArICcgaW1hZ2VIb2xkZXIgJ30gIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59KVxyXG5leHBvcnQgZGVmYXVsdCBTbGlkZXJDYXJkIiwiZXhwb3J0IGNvbnN0IGltZ0FyckRhdGEgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgJ3NyYyc6J3N0YXRpYy9zMS5qcGcnLFxyXG4gICAgICAgIGlkOjEsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgICdzcmMnOidzdGF0aWMvczIuanBnJyxcclxuICAgICAgICBpZDoyLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICAnc3JjJzonc3RhdGljL3MzLmpwZycsXHJcbiAgICAgICAgaWQ6MyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgJ3NyYyc6J3N0YXRpYy9zNC5qcGcnLFxyXG4gICAgICAgIGlkOjQsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgICdzcmMnOidzdGF0aWMvczUuanBnJyxcclxuICAgICAgICBpZDo1LFxyXG4gICAgfSx7XHJcbiAgICAgICAgJ3NyYyc6J3N0YXRpYy9zNi5qcGcnLFxyXG4gICAgICAgIGlkOjYsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgICdzcmMnOidzdGF0aWMvczcuanBnJyxcclxuICAgICAgICBpZDo3LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICAnc3JjJzonc3RhdGljL3M4LmpwZycsXHJcbiAgICAgICAgaWQ6OCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgJ3NyYyc6J3N0YXRpYy9zOS5qcGcnLFxyXG4gICAgICAgIGlkOjksXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgICdzcmMnOidzdGF0aWMvczEwLmpwZycsXHJcbiAgICAgICAgaWQ6MTAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgICdzcmMnOidodHRwczovL3BpY3N1bS5waG90b3MvMjAwLzMwMCcsXHJcbiAgICAgICAgaWQ6MTEsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgICdzcmMnOidodHRwczovL3BpY3N1bS5waG90b3MvMTIwMC8yMzAwJyxcclxuICAgICAgICBpZDoxMixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgJ3NyYyc6J3N0YXRpYy9zMS5qcGcnLFxyXG4gICAgICAgIGlkOjEzLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICAnc3JjJzonc3RhdGljL3MyLmpwZycsXHJcbiAgICAgICAgaWQ6MTQsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgICdzcmMnOidzdGF0aWMvczMuanBnJyxcclxuICAgICAgICBpZDoxNSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgJ3NyYyc6J3N0YXRpYy9zNC5qcGcnLFxyXG4gICAgICAgIGlkOjE2LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICAnc3JjJzonc3RhdGljL3M1LmpwZycsXHJcbiAgICAgICAgaWQ6MTcsXHJcbiAgICB9LHtcclxuICAgICAgICAnc3JjJzonc3RhdGljL3M2LmpwZycsXHJcbiAgICAgICAgaWQ6MTgsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgICdzcmMnOidzdGF0aWMvczcuanBnJyxcclxuICAgICAgICBpZDoxOSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgJ3NyYyc6J3N0YXRpYy9zOC5qcGcnLFxyXG4gICAgICAgIGlkOjIwLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICAnc3JjJzonc3RhdGljL3M5LmpwZycsXHJcbiAgICAgICAgaWQ6MjEsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgICdzcmMnOidzdGF0aWMvczEwLmpwZycsXHJcbiAgICAgICAgaWQ6MjIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgICdzcmMnOidodHRwczovL3BpY3N1bS5waG90b3MvMjAwLzMwMCcsXHJcbiAgICAgICAgaWQ6MjMsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgICdzcmMnOidodHRwczovL3BpY3N1bS5waG90b3MvMTIwMC8yMzAwJyxcclxuICAgICAgICBpZDoyNCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgJ3NyYyc6J2h0dHBzOi8vcGljc3VtLnBob3Rvcy8xMjAwLzIzMDAnLFxyXG4gICAgICAgIGlkOjI1LFxyXG4gICAgfSxcclxuXTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQXV0b0dhcFNsaWRlciBmcm9tICcuLi9jb21wb25lbnRzL2F1dG9HYXBTbGlkZXInXHJcblxyXG5jb25zdCBTbGlkZXIgPSAoKSA9PiB7XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsaWRlcic+XHJcbiAgICAgICAgICAgIDxBdXRvR2FwU2xpZGVyLz5cclxuICAgICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+XHJcbiAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmJsdXIgaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpIGJsdXIoMi42cHgpOyAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5ibHVye1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5zbGlkZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5sb2FkaW5ne1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKCcvaWNvbnMvbG9hZGluZy5zdmcnKTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbGlkZXI7IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZGl2Q2FyZHNDb250YWluZXJcIjogXCJhdXRvR2FwU2xpZGVyX2RpdkNhcmRzQ29udGFpbmVyX18xMGhFR1wiLFxuXHRcImF1dG9HYXBTbGlkZXJNYWluQ29udGFpbmVyXCI6IFwiYXV0b0dhcFNsaWRlcl9hdXRvR2FwU2xpZGVyTWFpbkNvbnRhaW5lcl9fVGR1akNcIixcblx0XCJidXR0b25cIjogXCJhdXRvR2FwU2xpZGVyX2J1dHRvbl9fMWxaZEJcIixcblx0XCJzbGlkZXJDYXJkXCI6IFwiYXV0b0dhcFNsaWRlcl9zbGlkZXJDYXJkX18yNWp0eVwiLFxuXHRcImlkZWFcIjogXCJhdXRvR2FwU2xpZGVyX2lkZWFfXzN6Y3RoXCIsXG5cdFwiZ29MZWZ0XCI6IFwiYXV0b0dhcFNsaWRlcl9nb0xlZnRfX2NGZlBWXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc3R5bGVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=