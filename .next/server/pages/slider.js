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
/* harmony import */ var _autoGapSlider_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./autoGapSlider.module.scss */ "./components/autoGapSlider.module.scss");
/* harmony import */ var _autoGapSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_autoGapSlider_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\prana\\Documents\\VSCode\\React\\react hooks\\hook1\\components\\autoGapSlider.js";



const Img = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({
  styleImg,
  imgArr
}, childSliderCardRef) => {
  // let imageSlide = useRef(null);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: imgArr.map((src, index) => {
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
        }, undefined)
      }, src.id, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 21
      }, undefined);
    })
  }, void 0, false);
});

const AutoGapSlider = () => {
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
  }]; // Each slider card

  const childSliderCardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(); // Parent of slider cards , div holding all slide cards

  const divCardsContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(); // Slider containing cards container and prev, next buttons.

  const autoGapSliderMainContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(); // Grabbing next button

  const nextButton = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(); // Grabbing prev button

  const prevButton = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const {
    0: imgArr,
    1: imgArrUpdt
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(imgArrData);
  let imageUpdateArr = imgArr;
  let id = 12;
  let timerId;
  const {
    0: slideMargin,
    1: updateSlideMargin
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const styleImg = {
    width: '200px',
    height: '300px',
    margin: `0 ${slideMargin / 2}px 0 ${slideMargin / 2}px`
  };
  let {
    0: dummy,
    1: du
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(); // Initialize default values

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
    prevPxValueToScrl = slidesToScrollWidth;
    divCardsContainer.current.style.cssText = `transform: translateX(-${0}px)`;
    displayArrow('prev', false);
    divCardsContainerTotalWidth = divCardsContainer.current.offsetWidth;
  };

  const displayArrow = (direction = 'prev', toDisplay = true) => {
    if (direction === 'prev') {
      if (!toDisplay) showLeftArrow(false);else showLeftArrow(true);
    } else {
      if (!toDisplay) showRightArrow(false);else showRightArrow(true);
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
      } else if (divCardsContainerTotalWidth - sliderVisibleWidth - slideMargin - 10 <= -nextPxValueToScrl) {
        // If slide is about to reach last slide , last but one click of endofslide
        divCardsContainer.current.style.cssText = `transform: translateX(${-divCardsContainerTotalWidth + sliderVisibleWidth}px)`; // Update slider position reference, pass 'next' to update refrence with respect to next button click

        updateSliderPositionRef('next');
        endOfSlide = true; // updateSliderArray()
      } else {
        // If everything is right translate to next px value
        divCardsContainer.current.style.cssText = `transform: translateX(${nextPxValueToScrl}px)`; // Update slider position reference, pass 'next' to update refrence with respect to next button click

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

        divCardsContainer.current.style.cssText = `transform: translateX(${prevPxValueToScrl}px)`; // Update slider position reference, pass 'prev' to update refrence with respect to next button click

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
    let eachSlideMargin = window.getComputedStyle(eachSlide).marginRight.slice(0, -2); // Convert from string to number and multiply it by two because margin is applied on both sides

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


  function setStyle(className, styleValue) {
    updateSlideMargin(styleValue);
  }

  function calculateMargin() {
    const minGapBetweenSlides = 10;
    const sliderVisibleWidth = autoGapSliderMainContainer.current.offsetWidth;
    const eachSlideWidth = childSliderCardRef.current.offsetWidth + minGapBetweenSlides;
    const slidesPerVisibleWidth = sliderVisibleWidth / eachSlideWidth;
    const marginToSetInPercentage = slidesPerVisibleWidth - Math.floor(slidesPerVisibleWidth);
    const marginToSetInPx = marginToSetInPercentage * eachSlideWidth;
    const marginPerSlide = marginToSetInPx / (Math.ceil(slidesPerVisibleWidth) - 1) + minGapBetweenSlides;
    setStyle('div__sliderCard--slideCalulate', marginPerSlide);
  } // Useeffect for slider next and prev button


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    // Execute when mounting
    // Initialize required values in particular function
    calculateMargin();
    initValues(); // displayContent(initvalues)

    autoSliderMove(2000, true); // Handle click event for both buttons

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
      window.addEventListener('resize', () => {
        debounce(() => {
          calculateMargin();
          initValues();
          resetSliderPosition();
        });
      });
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    // console.log('Margin updated'+slideMargin);
    setTimeout(() => divCardsContainerTotalWidth = divCardsContainer.current.offsetWidth, 100);
  }, [slideMargin]);
  let touchStartPos = 0;

  const touchStartHandler = e => {
    touchStartPos = e.changedTouches[0].clientX; // console.log(e.changedTouches[0].clientX)   
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
    if (isImgReady) {
      image.classList.remove('loading');
    } else {
      image.classList.add('loading');
    }
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
    0: leftArrowDisplay,
    1: showLeftArrow
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const {
    0: rightArrowDisplay,
    1: showRightArrow
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const leftStyle = {
    display: leftArrowDisplay ? "inline-block" : "none"
  };
  const rightStyle = {
    display: rightArrowDisplay ? "inline-block" : "none"
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
        lineNumber: 413,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        ref: divCardsContainer,
        className: (_autoGapSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().autoGap) + ' imgComp ',
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Img, {
          ref: childSliderCardRef,
          imgArr: imgArr,
          styleImg: styleImg
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 416,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 415,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        ref: nextButton,
        className: (_autoGapSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().button) + ' next ',
        children: "Next"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 418,
        columnNumber: 12
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 412,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      style: rightStyle,
      id: (_autoGapSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().idea),
      children: "hey"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 420,
      columnNumber: 9
    }, undefined)]
  }, void 0, true);
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
	"autoGap": "autoGapSlider_autoGap__1PuLI",
	"CautoGap": "autoGapSlider_CautoGap__153oE",
	"button": "autoGapSlider_button__1lZdB",
	"Img": "autoGapSlider_Img__LVIdm",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob29rMS8uL2NvbXBvbmVudHMvYXV0b0dhcFNsaWRlci5qcyIsIndlYnBhY2s6Ly9ob29rMS8uL3BhZ2VzL3NsaWRlci5qcyIsIndlYnBhY2s6Ly9ob29rMS8uL2NvbXBvbmVudHMvYXV0b0dhcFNsaWRlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9ob29rMS9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovL2hvb2sxL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9ob29rMS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2hvb2sxL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIl0sIm5hbWVzIjpbIkltZyIsImZvcndhcmRSZWYiLCJzdHlsZUltZyIsImltZ0FyciIsImNoaWxkU2xpZGVyQ2FyZFJlZiIsIm1hcCIsInNyYyIsImluZGV4Iiwic3R5bGVzIiwiaWQiLCJBdXRvR2FwU2xpZGVyIiwiaW1nQXJyRGF0YSIsInVzZVJlZiIsImRpdkNhcmRzQ29udGFpbmVyIiwiYXV0b0dhcFNsaWRlck1haW5Db250YWluZXIiLCJuZXh0QnV0dG9uIiwicHJldkJ1dHRvbiIsImltZ0FyclVwZHQiLCJ1c2VTdGF0ZSIsImltYWdlVXBkYXRlQXJyIiwidGltZXJJZCIsInNsaWRlTWFyZ2luIiwidXBkYXRlU2xpZGVNYXJnaW4iLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpbiIsImR1bW15IiwiZHUiLCJzbGlkZXJWaXNpYmxlV2lkdGgiLCJlYWNoU2xpZGVXaWR0aCIsInNsaWRlc1RvU2Nyb2xsIiwic2xpZGVzVG9TY3JvbGxXaWR0aCIsIm5leHRQeFZhbHVlVG9TY3JsIiwicHJldlB4VmFsdWVUb1NjcmwiLCJkaXZDYXJkc0NvbnRhaW5lclRvdGFsV2lkdGgiLCJlbmRPZlNsaWRlIiwidGhyb3R0bGUiLCJfIiwiZnVuYyIsImFyZ3MiLCJkZWJvdW5jZSIsInJlc2V0U2xpZGVyUG9zaXRpb24iLCJjdXJyZW50Iiwic3R5bGUiLCJjc3NUZXh0IiwiZGlzcGxheUFycm93Iiwib2Zmc2V0V2lkdGgiLCJkaXJlY3Rpb24iLCJ0b0Rpc3BsYXkiLCJzaG93TGVmdEFycm93Iiwic2hvd1JpZ2h0QXJyb3ciLCJ1cGRhdGVTbGlkZXJQb3NpdGlvblJlZiIsInVwZGF0ZXJlZiIsInVwZGF0ZVNsaWRlckFycmF5IiwibmV3RWxlbWVudCIsImNvbmNhdCIsImNsaWNrSGFuZGxlciIsImluaXRWYWx1ZXMiLCJlYWNoU2xpZGUiLCJlYWNoU2xpZGVNYXJnaW4iLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwibWFyZ2luUmlnaHQiLCJzbGljZSIsIk51bWJlciIsImNvbnNvbGUiLCJsb2ciLCJhdXRvU2xpZGVyTW92ZSIsInRpbWVvdXQiLCJhdXRvcGxheSIsInNldEludGVydmFsIiwiY2xlYXJBdXRvU2xpZGVyTW92ZSIsImNsZWFyVGltZW91dCIsInNldFN0eWxlIiwiY2xhc3NOYW1lIiwic3R5bGVWYWx1ZSIsImNhbGN1bGF0ZU1hcmdpbiIsIm1pbkdhcEJldHdlZW5TbGlkZXMiLCJzbGlkZXNQZXJWaXNpYmxlV2lkdGgiLCJtYXJnaW5Ub1NldEluUGVyY2VudGFnZSIsIk1hdGgiLCJmbG9vciIsIm1hcmdpblRvU2V0SW5QeCIsIm1hcmdpblBlclNsaWRlIiwiY2VpbCIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2V0VGltZW91dCIsInRvdWNoU3RhcnRQb3MiLCJ0b3VjaFN0YXJ0SGFuZGxlciIsImUiLCJjaGFuZ2VkVG91Y2hlcyIsImNsaWVudFgiLCJ0b3VjaEVuZEhhbmRsZXIiLCJ0b3VjaEVuZFBvcyIsImRyYWdIYW5kbGVyIiwicHJldmVudERlZmF1bHQiLCJvbkltYWdlTG9hZCIsImltYWdlIiwiaXNJbWdSZWFkeSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImltYWdlcyIsIkFycmF5IiwiZnJvbSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImZvckVhY2giLCJwYXNzaXZlIiwibGVmdEFycm93RGlzcGxheSIsInJpZ2h0QXJyb3dEaXNwbGF5IiwibGVmdFN0eWxlIiwiZGlzcGxheSIsInJpZ2h0U3R5bGUiLCJTbGlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxHQUFHLGdCQUFHQyxpREFBVSxDQUFDLENBQUM7QUFBQ0MsVUFBRDtBQUFVQztBQUFWLENBQUQsRUFBbUJDLGtCQUFuQixLQUF5QztBQUM1RDtBQUNBLHNCQUNJO0FBQUEsY0FDS0QsTUFBTSxDQUFDRSxHQUFQLENBQVcsQ0FBQ0MsR0FBRCxFQUFLQyxLQUFMLEtBQWE7QUFDckIsMEJBQ0k7QUFBbUIsV0FBRyxFQUFFSCxrQkFBeEI7QUFBNEMsYUFBSyxFQUFFRixRQUFuRDtBQUE4RCxpQkFBUyxFQUFFTSx1RUFBQSxHQUFXLHNEQUFwRjtBQUFBLCtCQUNJO0FBQWtCLGlCQUFPLEVBQUMsTUFBMUI7QUFBaUMsZUFBSyxFQUFFLEVBQXhDO0FBQTRDLGFBQUcsRUFBRUYsR0FBRyxDQUFDQSxHQUFyRDtBQUE0RCxtQkFBUyxFQUFFRSw2RUFBQSxHQUFtQixlQUExRjtBQUE0RyxhQUFHLEVBQUM7QUFBaEgsV0FBVUYsR0FBRyxDQUFDRyxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixTQUFVSCxHQUFHLENBQUNHLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESjtBQUtILEtBTkE7QUFETCxtQkFESjtBQVdILENBYnFCLENBQXRCOztBQWNBLE1BQU1DLGFBQWEsR0FBRyxNQUFNO0FBQ3hCLFFBQU1DLFVBQVUsR0FBRyxDQUNmO0FBQ0ksV0FBTSxlQURWO0FBRUlGLE1BQUUsRUFBQztBQUZQLEdBRGUsRUFLZjtBQUNJLFdBQU0sZUFEVjtBQUVJQSxNQUFFLEVBQUM7QUFGUCxHQUxlLEVBU2Y7QUFDSSxXQUFNLGVBRFY7QUFFSUEsTUFBRSxFQUFDO0FBRlAsR0FU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O0FBQUEsd0NBQWUsUUFBZjtBQUFBLDRCQUNJLDhEQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUE2QkgsQ0EvQkQ7O0FBaUNBLCtEQUFlQSxNQUFmLEU7Ozs7Ozs7Ozs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNSQSxvQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9zbGlkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVJlZixmb3J3YXJkUmVmLCB1c2VFZmZlY3QsdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2F1dG9HYXBTbGlkZXIubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIlxyXG5cclxuY29uc3QgSW1nID0gZm9yd2FyZFJlZigoe3N0eWxlSW1nLGltZ0Fycn0sY2hpbGRTbGlkZXJDYXJkUmVmKSA9PntcclxuICAgIC8vIGxldCBpbWFnZVNsaWRlID0gdXNlUmVmKG51bGwpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7aW1nQXJyLm1hcCgoc3JjLGluZGV4KT0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17c3JjLmlkfSAgcmVmPXtjaGlsZFNsaWRlckNhcmRSZWZ9IHN0eWxlPXtzdHlsZUltZ30gIGNsYXNzTmFtZT17c3R5bGVzLkltZysnIGRpdiBkaXZfX3NsaWRlckNhcmQgZGl2X19zbGlkZXJDYXJkLS1zbGlkZUNhbHVsYXRlICd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGtleT17c3JjLmlkfSBsb2FkaW5nPSdsYXp5JyBzdHlsZT17e319IHNyYz17c3JjLnNyY30gICBjbGFzc05hbWU9e3N0eWxlcy5zbGlkZXJJbWcgKyAnIGltYWdlSG9sZGVyICd9ICBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSlcclxuY29uc3QgQXV0b0dhcFNsaWRlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGltZ0FyckRhdGEgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3MxLmpwZycsXHJcbiAgICAgICAgICAgIGlkOjEsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczIuanBnJyxcclxuICAgICAgICAgICAgaWQ6MixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zMy5qcGcnLFxyXG4gICAgICAgICAgICBpZDozLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3M0LmpwZycsXHJcbiAgICAgICAgICAgIGlkOjQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczUuanBnJyxcclxuICAgICAgICAgICAgaWQ6NSxcclxuICAgICAgICB9LHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zNi5qcGcnLFxyXG4gICAgICAgICAgICBpZDo2LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3M3LmpwZycsXHJcbiAgICAgICAgICAgIGlkOjcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczguanBnJyxcclxuICAgICAgICAgICAgaWQ6OCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zOS5qcGcnLFxyXG4gICAgICAgICAgICBpZDo5LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3MxMC5qcGcnLFxyXG4gICAgICAgICAgICBpZDoxMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J2h0dHBzOi8vcGljc3VtLnBob3Rvcy8yMDAvMzAwJyxcclxuICAgICAgICAgICAgaWQ6MTEsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidodHRwczovL3BpY3N1bS5waG90b3MvMTIwMC8yMzAwJyxcclxuICAgICAgICAgICAgaWQ6MTIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczEuanBnJyxcclxuICAgICAgICAgICAgaWQ6MTMsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczIuanBnJyxcclxuICAgICAgICAgICAgaWQ6MTQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczMuanBnJyxcclxuICAgICAgICAgICAgaWQ6MTUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczQuanBnJyxcclxuICAgICAgICAgICAgaWQ6MTYsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczUuanBnJyxcclxuICAgICAgICAgICAgaWQ6MTcsXHJcbiAgICAgICAgfSx7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczYuanBnJyxcclxuICAgICAgICAgICAgaWQ6MTgsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczcuanBnJyxcclxuICAgICAgICAgICAgaWQ6MTksXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczguanBnJyxcclxuICAgICAgICAgICAgaWQ6MjAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczkuanBnJyxcclxuICAgICAgICAgICAgaWQ6MjEsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczEwLmpwZycsXHJcbiAgICAgICAgICAgIGlkOjIyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzIwMC8zMDAnLFxyXG4gICAgICAgICAgICBpZDoyMyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J2h0dHBzOi8vcGljc3VtLnBob3Rvcy8xMjAwLzIzMDAnLFxyXG4gICAgICAgICAgICBpZDoyNCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J2h0dHBzOi8vcGljc3VtLnBob3Rvcy8xMjAwLzIzMDAnLFxyXG4gICAgICAgICAgICBpZDoyNSxcclxuICAgICAgICB9LFxyXG4gICAgXHJcbiAgICBdXHJcbiAgICAvLyBFYWNoIHNsaWRlciBjYXJkXHJcbiAgICBjb25zdCBjaGlsZFNsaWRlckNhcmRSZWYgPSB1c2VSZWYoKTtcclxuICAgIC8vIFBhcmVudCBvZiBzbGlkZXIgY2FyZHMgLCBkaXYgaG9sZGluZyBhbGwgc2xpZGUgY2FyZHNcclxuICAgIGNvbnN0IGRpdkNhcmRzQ29udGFpbmVyID0gdXNlUmVmKCk7ICAgXHJcbiAgICAvLyBTbGlkZXIgY29udGFpbmluZyBjYXJkcyBjb250YWluZXIgYW5kIHByZXYsIG5leHQgYnV0dG9ucy5cclxuICAgIGNvbnN0IGF1dG9HYXBTbGlkZXJNYWluQ29udGFpbmVyID0gdXNlUmVmKCk7XHJcbiAgICAvLyBHcmFiYmluZyBuZXh0IGJ1dHRvblxyXG4gICAgY29uc3QgbmV4dEJ1dHRvbiA9IHVzZVJlZigpO1xyXG4gICAgLy8gR3JhYmJpbmcgcHJldiBidXR0b25cclxuICAgIGNvbnN0IHByZXZCdXR0b24gPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IFtpbWdBcnIsaW1nQXJyVXBkdF0gPSB1c2VTdGF0ZShpbWdBcnJEYXRhKVxyXG4gICAgbGV0IGltYWdlVXBkYXRlQXJyPWltZ0FycjtcclxuICAgIGxldCBpZCA9IDEyO1xyXG4gICAgbGV0IHRpbWVySWQ7XHJcbiAgICBjb25zdCBbc2xpZGVNYXJnaW4sdXBkYXRlU2xpZGVNYXJnaW5dID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBzdHlsZUltZyA9IHtcclxuICAgICAgICB3aWR0aDonMjAwcHgnLFxyXG4gICAgICAgIGhlaWdodDonMzAwcHgnLFxyXG4gICAgICAgIG1hcmdpbjpgMCAke3NsaWRlTWFyZ2luLzJ9cHggMCAke3NsaWRlTWFyZ2luLzJ9cHhgXHJcbiAgICB9O1xyXG4gICAgbGV0IFtkdW1teSxkdV0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgLy8gSW5pdGlhbGl6ZSBkZWZhdWx0IHZhbHVlc1xyXG4gICAgbGV0IHNsaWRlclZpc2libGVXaWR0aD0wO1xyXG4gICAgbGV0IGVhY2hTbGlkZVdpZHRoID0gMDtcclxuICAgIGxldCBzbGlkZXNUb1Njcm9sbCA9IDA7XHJcbiAgICBsZXQgc2xpZGVzVG9TY3JvbGxXaWR0aD0wO1xyXG4gICAgbGV0IG5leHRQeFZhbHVlVG9TY3JsID0gMDsgXHJcbiAgICBsZXQgcHJldlB4VmFsdWVUb1NjcmwgPSAwO1xyXG4gICAgbGV0IGRpdkNhcmRzQ29udGFpbmVyVG90YWxXaWR0aD0wO1xyXG4gICAgLy8gRGV0ZWN0IGlmIHdlIHJlYWNoZWQgZW5kIG9mIHRoZSBzbGlkZXNcclxuICAgIGxldCBlbmRPZlNsaWRlID0gZmFsc2VcclxuICAgIC8vIExvYWRhc2ggdGhyb3R0bGVyIHRvIHRocm90dGxlIHJlc2l6ZSBhbmQgaWYgdXNlciBjbGlja3MgYnV0dG9uIG1hbnkgdGltZXMgXHJcbiAgICBsZXQgdGhyb3R0bGUgPSBfLnRocm90dGxlKChmdW5jLC4uLmFyZ3MpPT4ge1xyXG4gICAgICAgIGZ1bmMoLi4uYXJncylcclxuICAgIH0sIDYwMCk7XHJcbiAgICBsZXQgZGVib3VuY2UgPSBfLmRlYm91bmNlKChmdW5jLC4uLmFyZ3MpPT4ge1xyXG4gICAgICAgIGZ1bmMoLi4uYXJncylcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnZGVpYm91bmMnKVxyXG4gICAgfSwgODAwKTtcclxuICAgIGNvbnN0IHJlc2V0U2xpZGVyUG9zaXRpb24gPSAoKSA9PntcclxuICAgICAgICAvLyBkZWZhdWx0IHNsaWRlc1RvU2Nyb2xsV2lkdGg6MjQwcHhcclxuICAgICAgICBuZXh0UHhWYWx1ZVRvU2NybCA9IC1zbGlkZXNUb1Njcm9sbFdpZHRoOyBcclxuICAgICAgICBwcmV2UHhWYWx1ZVRvU2NybCA9IHNsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbiAgICAgICAgZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zdHlsZS5jc3NUZXh0ID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtJHswfXB4KWA7XHJcbiAgICAgICAgZGlzcGxheUFycm93KCdwcmV2JyxmYWxzZSlcclxuICAgICAgICBkaXZDYXJkc0NvbnRhaW5lclRvdGFsV2lkdGggPSBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoXHJcbiAgICB9XHJcbiAgICBjb25zdCBkaXNwbGF5QXJyb3c9KGRpcmVjdGlvbj0ncHJldicsdG9EaXNwbGF5PXRydWUpPT57XHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbj09PSdwcmV2Jyl7XHJcbiAgICAgICAgICAgIGlmICAoIXRvRGlzcGxheSlzaG93TGVmdEFycm93KGZhbHNlKVxyXG4gICAgICAgICAgICBlbHNlIHNob3dMZWZ0QXJyb3codHJ1ZSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgaWYgICghdG9EaXNwbGF5KXNob3dSaWdodEFycm93KGZhbHNlKVxyXG4gICAgICAgICAgICBlbHNlIHNob3dSaWdodEFycm93KHRydWUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgdXBkYXRlU2xpZGVyUG9zaXRpb25SZWYgPSAodXBkYXRlcmVmKSA9PntcclxuICAgICAgICAvLyB0cmFuc2xhdGVYKDApIC0+IGluaXRpYWwgcG9zaXRpb24sIHN0YXJ0aW5nIHBvc2l0aW9uXHJcbiAgICAgICAgLy8gdHJhbnNsYXRlWCgtMjQwcHgpIC0+IG1vdmVzIHNsaWRlIGluIC0+IGRpcmVjdGlvbiBieSAyNDBweChlYWNoIHNsaWRlIHdpZHRoIGJ5IGRlZmF1bHQpXHJcbiAgICAgICAgaWYgKHVwZGF0ZXJlZiA9PT0gJ25leHQnKXtcclxuICAgICAgICAgICAgLy8gbWludXMgcG9zaXRpb24gZ29lcyAtPiBkaXJlY3Rpb24gb24gdHJhbnNsYXRlXHJcbiAgICAgICAgICAgIC8vIGV4OiBwcmV2UHhWYWx1ZVRvU2NybD0yNDAsbmV4dFB4VmFsdWVUb1Njcmw9LTI0MCAgYW5kIHNsaWRlc1RvU2Nyb2xsV2lkdGg9MjQwXHJcbiAgICAgICAgICAgIHByZXZQeFZhbHVlVG9TY3JsID0gcHJldlB4VmFsdWVUb1Njcmwtc2xpZGVzVG9TY3JvbGxXaWR0aDsgXHJcbiAgICAgICAgICAgIC8vIGZpcnN0LXRpbWU6cHJldlB4VmFsdWVUb1Njcmw6MFxyXG4gICAgICAgICAgICAvLyBzZWNvbmQtdGltZTpwcmV2UHhWYWx1ZVRvU2NybDotMjQwXHJcbiAgICAgICAgICAgIG5leHRQeFZhbHVlVG9TY3JsID0gbmV4dFB4VmFsdWVUb1Njcmwtc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuICAgICAgICAgICAgLy8gZmlyc3QtdGltZTpuZXh0UHhWYWx1ZVRvU2NybDotNDgwXHJcbiAgICAgICAgICAgIC8vIHNlY29uZC10aW1lOm5leHRQeFZhbHVlVG9TY3JsOi03MjBcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgLy8gZXg6IHByZXZQeFZhbHVlVG9TY3JsPS0yNDAsbmV4dFB4VmFsdWVUb1Njcmw9LTcyMCAgYW5kIHNsaWRlc1RvU2Nyb2xsV2lkdGg9MjQwXHJcbiAgICAgICAgICAgIG5leHRQeFZhbHVlVG9TY3JsID1uZXh0UHhWYWx1ZVRvU2NybCArc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuICAgICAgICAgICAgLy8gZmlyc3QtdGltZTpwcmV2UHhWYWx1ZVRvU2NybDo0ODBcclxuICAgICAgICAgICAgLy8gc2Vjb25kLXRpbWU6cHJldlB4VmFsdWVUb1Njcmw6NjIwXHJcbiAgICAgICAgICAgIHByZXZQeFZhbHVlVG9TY3JsID0gcHJldlB4VmFsdWVUb1Njcmwrc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuICAgICAgICAgICAgLy8gZmlyc3QtdGltZTpuZXh0UHhWYWx1ZVRvU2NybDowXHJcbiAgICAgICAgICAgIC8vIHNlY29uZC10aW1lOm5leHRQeFZhbHVlVG9TY3JsOjI0MFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHVwZGF0ZVNsaWRlckFycmF5ID0gKCkgPT57XHJcbiAgICAgICAgY29uc3QgbmV3RWxlbWVudCA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9wZXIxLmpwZycsXHJcbiAgICAgICAgICAgICAgICBpZDppZCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9wZXIyLmpwZycsXHJcbiAgICAgICAgICAgICAgICBpZDppZCsxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgICAgLy8gaW1nQXJyLnB1c2goLi4ubmV3RWxlbWVudClcclxuICAgICAgICBpbWFnZVVwZGF0ZUFyciA9ICBpbWFnZVVwZGF0ZUFyci5jb25jYXQobmV3RWxlbWVudClcclxuICAgICAgICBpbWdBcnJVcGR0KGltYWdlVXBkYXRlQXJyICk7XHJcbiAgICAgICAgZGl2Q2FyZHNDb250YWluZXJUb3RhbFdpZHRoID0gZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aFxyXG4gICAgICAgIGlkID0gaWQrMjtcclxuICAgICAgICAvLyAvLyBjb25zb2xlLmxvZyhpbWdBcnJEYXRhKVxyXG4gICAgICAgIC8vIGNsaWNrSGFuZGxlcignbmV4dCcpXHJcbiAgICB9XHJcbiAgICBjb25zdCBjbGlja0hhbmRsZXIgPSAoZGlyZWN0aW9uKT0+eyBcclxuICAgICAgICAvLyBJZiBuZXh0IGJ1dHRvbiBpcyBjbGlja2VkXHJcbiAgICAgICAgLy8gZGl2Q2FyZHNDb250YWluZXJUb3RhbFdpZHRoID0gZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aFxyXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICduZXh0Jyl7XHJcbiAgICAgICAgICAgIGRpc3BsYXlBcnJvdygncHJldicsdHJ1ZSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIElmIHJlYWNoZWQgZW5kIG9mIHNsaWRlIHJldHVybiB0byBmaXJzdCBzbGlkZVxyXG4gICAgICAgICAgICBpZihlbmRPZlNsaWRlKXsgIFxyXG4gICAgICAgICAgICAgICAgLy8gUmV0dXJuIHRvIGZpcnN0IHNsaWRlIGFuZCByZXNldCBwb3NpdGlvbnMgb2Ygc2Nyb2xsIHJlZmVyZW5jZVxyXG4gICAgICAgICAgICAgICAgcmVzZXRTbGlkZXJQb3NpdGlvbigpXHJcbiAgICAgICAgICAgICAgICBlbmRPZlNsaWRlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIC8vIGV4OiBzYXkgZGl2Q2FyZHNDb250YWluZXJUb3RhbFdpZHRoID0gMjM2MDsgYW5kIHNsaWRlclZpc2libGVXaWR0aCA9IDEzMzYgYW5kIG5leHRQeFZhbHVlVG9TY3JsID0gLTE0NDAgdGhlblxyXG4gICAgICAgICAgICAgICAgLy8gc2xpZGVyVmlzaWJsZVdpZHRoIGlzIHNsaWRlciB3aWR0aCB3aGljaCBpcyB2aXNpYmxlIHRvIHVzZXJcclxuICAgICAgICAgICAgICAgIC8vIGRpdkNhcmRzQ29udGFpbmVyVG90YWxXaWR0aCBpcyB0b3RhbCB3aWR0aCBvZiBjb250YWluZXIgaG9sZGluZyBjYXJkcyA9ICB2aXNpYmxlIGFyZWEraGlkZGVuIGFyZWFcclxuICAgICAgICAgICAgfWVsc2UgaWYgKChkaXZDYXJkc0NvbnRhaW5lclRvdGFsV2lkdGgtc2xpZGVyVmlzaWJsZVdpZHRoLXNsaWRlTWFyZ2luLTEwKTw9IC1uZXh0UHhWYWx1ZVRvU2NybCkge1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgc2xpZGUgaXMgYWJvdXQgdG8gcmVhY2ggbGFzdCBzbGlkZSAsIGxhc3QgYnV0IG9uZSBjbGljayBvZiBlbmRvZnNsaWRlXHJcbiAgICAgICAgICAgICAgICBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR7LWRpdkNhcmRzQ29udGFpbmVyVG90YWxXaWR0aCtzbGlkZXJWaXNpYmxlV2lkdGh9cHgpYFxyXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIHNsaWRlciBwb3NpdGlvbiByZWZlcmVuY2UsIHBhc3MgJ25leHQnIHRvIHVwZGF0ZSByZWZyZW5jZSB3aXRoIHJlc3BlY3QgdG8gbmV4dCBidXR0b24gY2xpY2tcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVNsaWRlclBvc2l0aW9uUmVmKCduZXh0JylcclxuICAgICAgICAgICAgICAgIGVuZE9mU2xpZGUgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAvLyB1cGRhdGVTbGlkZXJBcnJheSgpXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgZXZlcnl0aGluZyBpcyByaWdodCB0cmFuc2xhdGUgdG8gbmV4dCBweCB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zdHlsZS5jc3NUZXh0ID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgke25leHRQeFZhbHVlVG9TY3JsfXB4KWBcclxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBzbGlkZXIgcG9zaXRpb24gcmVmZXJlbmNlLCBwYXNzICduZXh0JyB0byB1cGRhdGUgcmVmcmVuY2Ugd2l0aCByZXNwZWN0IHRvIG5leHQgYnV0dG9uIGNsaWNrXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVTbGlkZXJQb3NpdGlvblJlZignbmV4dCcpXHJcbiAgICAgICAgICAgICAgICBlbmRPZlNsaWRlID0gZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNlIGlmKGRpcmVjdGlvbiA9PT0gJ3ByZXYnKXtcclxuICAgICAgICAgICAgLy8gRW5kIG9mIHNsaWRlIGNhbm5vdCBiZSByZWFjaGVkIGJ5IGNsaWNraW5nIHByZXZpb3VzIGJ1dHRvblxyXG4gICAgICAgICAgICBlbmRPZlNsaWRlID0gZmFsc2VcclxuICAgICAgICAgICAgaWYocHJldlB4VmFsdWVUb1Njcmw+MCl7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5QXJyb3coJ3ByZXYnLGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgLy8gSWYgc2xpZGVyIGlzIG92ZXIgbGVmdCByZXR1cm4gdG8gZmlyc3Qgc2xpZGUgYW5kIHJlc2V0IHBvc2l0aW9ucyBvZiBzY3JvbGwgcmVmZXJlbmNlXHJcbiAgICAgICAgICAgICAgICAvLyBleDogc2F5IGJ5IGRlZmF1bHQgcmVmZXJlbmNlIHByZXZQeFZhbHVlVG9TY3JsIGlzIHNldCB0byAyNDBweCBoZW5jZSB0aGlzIGlzIGV4ZWN1dGVkXHJcbiAgICAgICAgICAgICAgICByZXNldFNsaWRlclBvc2l0aW9uKClcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5QXJyb3coJ3ByZXYnLHRydWUpXHJcbiAgICAgICAgICAgICAgICAvLyBJZiBldmVyeXRoaW5nIGlzIHJpZ2h0IHRyYW5zbGF0ZSB0byBwcmV2IHB4IHZhbHVlXHJcbiAgICAgICAgICAgICAgICBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR7cHJldlB4VmFsdWVUb1Njcmx9cHgpYDtcclxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBzbGlkZXIgcG9zaXRpb24gcmVmZXJlbmNlLCBwYXNzICdwcmV2JyB0byB1cGRhdGUgcmVmcmVuY2Ugd2l0aCByZXNwZWN0IHRvIG5leHQgYnV0dG9uIGNsaWNrXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVTbGlkZXJQb3NpdGlvblJlZigncHJldicpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGluaXRWYWx1ZXMgPSgpID0+e1xyXG4gICAgICAgIGVuZE9mU2xpZGUgPSBmYWxzZVxyXG4gICAgICAgIC8vIFNsaWRlciB3aWR0aCBpcyBhbiBvdXRlciBkaXYgd2hpY2ggc2hvd3MgZW50aXJlIHNsaWRlciBpZiB3ZSBzZXQgc2xpZGVyIHRvIGJlIDIwMHB4IHdpZGUtIFxyXG4gICAgICAgIC8vIC13aWR0aCBpcyBzZXQgb24gdGhpcyBkaXYgLCB3ZSBuZWVkIGl0IHRvIGNhbGN1bGF0ZSBzbGlkZXIgdmlzaWJsZSB3aWR0aCBpbiB3aGljaCBzbGlkZXIgaXMgdmlzaWJsZVxyXG4gICAgICAgIC8vIGJ5IGRlZmF1bHQgc2xpZGVyIHRha2VzIGZ1bGwgdmlld3BvcnQgd2lkdGguZXggOiAxNjAwcHhcclxuICAgICAgICBzbGlkZXJWaXNpYmxlV2lkdGggPSBhdXRvR2FwU2xpZGVyTWFpbkNvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoO1xyXG4gICAgICAgIC8vIElmIHNsaWRlciBoYXMgbWFyZ2luIChzcGFjZSBiZXR3ZWVuIHNsaWRlciBjYXJkcyBpZiBzbGlkZXJzIGFyZSB0b3VjaCB0byBlYWNoIG90aGVyIHRoZW4gaXQgaGFzIG5vIG1hcmdpbiktIFxyXG4gICAgICAgIC8vIC1pdCBpcyByZXF1aXJlZCB0byBjYWxjdWxhdGUgaG93IG11Y2ggZG9lcyBzbGlkZXIgc2Nyb2xsc1xyXG4gICAgICAgIGxldCBlYWNoU2xpZGUgPSBjaGlsZFNsaWRlckNhcmRSZWYuY3VycmVudFxyXG4gICAgICAgIGxldCBlYWNoU2xpZGVNYXJnaW4gPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlYWNoU2xpZGUpLm1hcmdpblJpZ2h0LnNsaWNlKDAsIC0yKTtcclxuICAgICAgICAvLyBDb252ZXJ0IGZyb20gc3RyaW5nIHRvIG51bWJlciBhbmQgbXVsdGlwbHkgaXQgYnkgdHdvIGJlY2F1c2UgbWFyZ2luIGlzIGFwcGxpZWQgb24gYm90aCBzaWRlc1xyXG4gICAgICAgIGVhY2hTbGlkZU1hcmdpbj1OdW1iZXIoZWFjaFNsaWRlTWFyZ2luKSoyXHJcbiAgICAgICAgLy8gRWFjaCBzbGlkZXIgY2FyZCB3aWR0aCBpcyBjYWxjdWxhdGVkIGJ5IGFkZGluZyBpdHMgb3duIHdpZHRoIHdpdGggaXRzIG93biBtYXJnaW5cclxuICAgICAgICBlYWNoU2xpZGVXaWR0aCA9IGVhY2hTbGlkZS5vZmZzZXRXaWR0aCtlYWNoU2xpZGVNYXJnaW47XHJcbiAgICAgICAgLy8gZWFjaFNsaWRlV2lkdGggPU51bWJlcihlYWNoU2xpZGVXaWR0aClcclxuICAgICAgICAvLyBOdW1iZXIgb2Ygc2xpZGVzIHRvIHNjcm9sbFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsID0gMVxyXG4gICAgICAgIC8vIE51bWJlciBvZiBzbGlkZXMgdG8gc2Nyb2xsIGluIHBpeGVscyBleDogaWYgMjQwcHhcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbFdpZHRoPWVhY2hTbGlkZVdpZHRoKnNsaWRlc1RvU2Nyb2xsO1xyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsV2lkdGggPSBzbGlkZXJWaXNpYmxlV2lkdGg7XHJcbiAgICAgICAgLy8gdG8gY2FsY3VsYXRlIGFuZCB0cmFjayBwcm9ncmVzcyBvZiBsZWZ0IGFuZCByaWdodCBzY3JvbGwgcG9zaXRpb25zXHJcbiAgICAgICAgcHJldlB4VmFsdWVUb1NjcmwgPSBzbGlkZXNUb1Njcm9sbFdpZHRoOyAvLyBleDoyNDBweFxyXG4gICAgICAgIG5leHRQeFZhbHVlVG9TY3JsID0gLXNsaWRlc1RvU2Nyb2xsV2lkdGg7IC8vIGV4Oi0yNDBweFxyXG4gICAgICAgIC8vIENhcmRzIGNvbnRhaW5lciB3aWR0aCBnZW5lcmFsbHkgZXF1YWwgdG8gZWFjaHNsaWRlcndpZHRoKnRvdGFsbnVtYmVyb2ZzbGlkZXMgaW5jbHVkaW5nIG1hcmdpbiBleDogc2F5IDIwOTBweFxyXG4gICAgICAgIGRpdkNhcmRzQ29udGFpbmVyVG90YWxXaWR0aCA9IGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQub2Zmc2V0V2lkdGhcclxuICAgICAgICBkaXNwbGF5QXJyb3coJ3ByZXYnLGZhbHNlKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidmFsdWVzIGluaXRlZFwiKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBhdXRvU2xpZGVyTW92ZT0odGltZW91dCxhdXRvcGxheSk9PntcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm1vdXNlbGVhdmVcIilcclxuICAgICAgICBpZihhdXRvcGxheSl7XHJcbiAgICAgICAgICAgIHRpbWVySWQ9c2V0SW50ZXJ2YWwoKCk9PntcclxuICAgICAgICAgICAgICAgIHRocm90dGxlKGNsaWNrSGFuZGxlciwnbmV4dCcpXHJcbiAgICAgICAgICAgIH0sMTAwMDAwMDAwMDAwMDAwKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGNsZWFyQXV0b1NsaWRlck1vdmU9KHRpbWVySWQpPT57XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJtb3VzZWVudGVyXCIpXHJcbiAgICAgICAgaWYodGltZXJJZCl7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHVzZUVmZmVjdCBmb3IgbnVtYmVyIG9mIHNsaWRlcyB0byBzaG93IHBlciBkaXZcclxuICAgIGZ1bmN0aW9uICBzZXRTdHlsZShjbGFzc05hbWUsIHN0eWxlVmFsdWUpIHtcclxuICAgICAgICB1cGRhdGVTbGlkZU1hcmdpbihzdHlsZVZhbHVlKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZU1hcmdpbigpe1xyXG4gICAgICAgIGNvbnN0IG1pbkdhcEJldHdlZW5TbGlkZXMgPSAxMFxyXG4gICAgICAgIGNvbnN0IHNsaWRlclZpc2libGVXaWR0aCA9IGF1dG9HYXBTbGlkZXJNYWluQ29udGFpbmVyLmN1cnJlbnQub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgY29uc3QgZWFjaFNsaWRlV2lkdGggPSBjaGlsZFNsaWRlckNhcmRSZWYuY3VycmVudC5vZmZzZXRXaWR0aCttaW5HYXBCZXR3ZWVuU2xpZGVzXHJcbiAgICAgICAgY29uc3Qgc2xpZGVzUGVyVmlzaWJsZVdpZHRoID0gc2xpZGVyVmlzaWJsZVdpZHRoLyhlYWNoU2xpZGVXaWR0aCk7XHJcbiAgICAgICAgY29uc3QgbWFyZ2luVG9TZXRJblBlcmNlbnRhZ2UgPSBzbGlkZXNQZXJWaXNpYmxlV2lkdGggLSBNYXRoLmZsb29yKHNsaWRlc1BlclZpc2libGVXaWR0aClcclxuICAgICAgICBjb25zdCBtYXJnaW5Ub1NldEluUHggPSAoKG1hcmdpblRvU2V0SW5QZXJjZW50YWdlKSplYWNoU2xpZGVXaWR0aClcclxuICAgICAgICBjb25zdCBtYXJnaW5QZXJTbGlkZSA9IChtYXJnaW5Ub1NldEluUHgvKE1hdGguY2VpbChzbGlkZXNQZXJWaXNpYmxlV2lkdGgpLTEpKSttaW5HYXBCZXR3ZWVuU2xpZGVzXHJcbiAgICAgICAgc2V0U3R5bGUoJ2Rpdl9fc2xpZGVyQ2FyZC0tc2xpZGVDYWx1bGF0ZScsbWFyZ2luUGVyU2xpZGUpXHJcbiAgICB9XHJcbiAgICAvLyBVc2VlZmZlY3QgZm9yIHNsaWRlciBuZXh0IGFuZCBwcmV2IGJ1dHRvblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgLy8gRXhlY3V0ZSB3aGVuIG1vdW50aW5nXHJcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSByZXF1aXJlZCB2YWx1ZXMgaW4gcGFydGljdWxhciBmdW5jdGlvblxyXG4gICAgICAgIGNhbGN1bGF0ZU1hcmdpbigpXHJcbiAgICAgICAgaW5pdFZhbHVlcygpXHJcbiAgICAgICAgLy8gZGlzcGxheUNvbnRlbnQoaW5pdHZhbHVlcylcclxuICAgICAgICBhdXRvU2xpZGVyTW92ZSgyMDAwLHRydWUpXHJcbiAgICAgICAgLy8gSGFuZGxlIGNsaWNrIGV2ZW50IGZvciBib3RoIGJ1dHRvbnNcclxuICAgICAgICBuZXh0QnV0dG9uLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT50aHJvdHRsZShjbGlja0hhbmRsZXIsJ25leHQnKSlcclxuICAgICAgICBwcmV2QnV0dG9uLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT50aHJvdHRsZShjbGlja0hhbmRsZXIsJ3ByZXYnKSlcclxuICAgICAgICBhdXRvR2FwU2xpZGVyTWFpbkNvbnRhaW5lci5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCgpPT5jbGVhckF1dG9TbGlkZXJNb3ZlKHRpbWVySWQpKVxyXG4gICAgICAgIGF1dG9HYXBTbGlkZXJNYWluQ29udGFpbmVyLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsKCk9PmF1dG9TbGlkZXJNb3ZlKDEwMDAsdHJ1ZSkgKVxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCgpPT57XHJcbiAgICAgICAgICAgIGRlYm91bmNlKCgpPT57XHJcbiAgICAgICAgICAgICAgICBjYWxjdWxhdGVNYXJnaW4oKTtcclxuICAgICAgICAgICAgICAgIGluaXRWYWx1ZXMoKTtcclxuICAgICAgICAgICAgICAgIHJlc2V0U2xpZGVyUG9zaXRpb24oKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuICgpPT57XHJcbiAgICAgICAgICAgIC8vIEV4ZWN1dGUgd2hlbiB1bm1vdW50aW5nIChjbGVhbnVwKVxyXG4gICAgICAgICAgICBuZXh0QnV0dG9uLmN1cnJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT50aHJvdHRsZShjbGlja0hhbmRsZXIsJ25leHQnKSlcclxuICAgICAgICAgICAgcHJldkJ1dHRvbi5jdXJyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+dGhyb3R0bGUoY2xpY2tIYW5kbGVyLCdwcmV2JykpICAgICAgIFxyXG4gICAgICAgICAgICBhdXRvR2FwU2xpZGVyTWFpbkNvbnRhaW5lci5jdXJyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCgpPT5jbGVhckF1dG9TbGlkZXJNb3ZlKHRpbWVySWQpKVxyXG4gICAgICAgICAgICBhdXRvR2FwU2xpZGVyTWFpbkNvbnRhaW5lci5jdXJyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCgpPT5hdXRvU2xpZGVyTW92ZSgxMDAwLHRydWUpIClcclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsKCk9PntcclxuICAgICAgICAgICAgICAgIGRlYm91bmNlKCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsY3VsYXRlTWFyZ2luKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdFZhbHVlcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc2V0U2xpZGVyUG9zaXRpb24oKTtcclxuICAgICAgICAgICAgICAgIH0pOyAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9LFtdKVxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ01hcmdpbiB1cGRhdGVkJytzbGlkZU1hcmdpbik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+ZGl2Q2FyZHNDb250YWluZXJUb3RhbFdpZHRoID0gZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aCwxMDApXHJcbiAgICB9LFtzbGlkZU1hcmdpbl0pXHJcbiAgICBsZXQgdG91Y2hTdGFydFBvcyA9MDtcclxuICAgIGNvbnN0IHRvdWNoU3RhcnRIYW5kbGVyID0gKGUpPT57XHJcbiAgICAgICAgdG91Y2hTdGFydFBvcz1lLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFg7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYKSAgIFxyXG4gICAgfVxyXG4gICAgY29uc3QgdG91Y2hFbmRIYW5kbGVyPShlKT0+e1xyXG4gICAgICAgIGxldCB0b3VjaEVuZFBvcyA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WDtcclxuICAgICAgICBpZiAodG91Y2hFbmRQb3M9PT10b3VjaFN0YXJ0UG9zKSByZXR1cm5cclxuICAgICAgICBpZiAodG91Y2hFbmRQb3MtdG91Y2hTdGFydFBvcz4wKSBjbGlja0hhbmRsZXIoJ3ByZXYnKVxyXG4gICAgICAgIGVsc2UgY2xpY2tIYW5kbGVyKCduZXh0JylcclxuICAgIH1cclxuICAgIGNvbnN0IGRyYWdIYW5kbGVyID0gKGUpID0+e1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgfVxyXG4gICAgY29uc3Qgb25JbWFnZUxvYWQgPSAoaW1hZ2UsaXNJbWdSZWFkeSkgPT57XHJcbiAgICAgICAgaWYgKGlzSW1nUmVhZHkpe1xyXG4gICAgICAgICAgICBpbWFnZS5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkaW5nJylcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgaW1hZ2UuY2xhc3NMaXN0LmFkZCgnbG9hZGluZycpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLy8gdXNlRWZmZWN0IGZvciB0b3VjaCBjYXBhYmlsaXR5XHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBsZXQgaW1hZ2VzID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbWFnZUhvbGRlcicpKVxyXG4gICAgICAgIGltYWdlcy5mb3JFYWNoKChpbWFnZSk9PntcclxuICAgICAgICAgICAgb25JbWFnZUxvYWQoaW1hZ2UsZmFsc2UpXHJcbiAgICAgICAgICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsKGUpPT5kcmFnSGFuZGxlcihlKSApXHJcbiAgICAgICAgICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLChlKT0+b25JbWFnZUxvYWQoaW1hZ2UsdHJ1ZSkpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBhdXRvR2FwU2xpZGVyTWFpbkNvbnRhaW5lci5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLChlKT0+dG91Y2hTdGFydEhhbmRsZXIoZSkse3Bhc3NpdmU6dHJ1ZX0pXHJcbiAgICAgICAgYXV0b0dhcFNsaWRlck1haW5Db250YWluZXIuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsKGUpPT50b3VjaEVuZEhhbmRsZXIoZSkse3Bhc3NpdmU6dHJ1ZX0gKVxyXG4gICAgICAgIC8vIGNoaWxkU2xpZGVyQ2FyZFJlZi5jdXJyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsKGUpPT5kcmFnSGFuZGxlcihlKSApXHJcbiAgICAgICAgLy8gYXV0b0dhcFNsaWRlck1haW5Db250YWluZXIuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLChlKT0+dG91Y2hTdGFydEhhbmRsZXIoZSkgKVxyXG4gICAgICAgIHJldHVybiAoKT0+IHtcclxuICAgICAgICAgICAgYXV0b0dhcFNsaWRlck1haW5Db250YWluZXIuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywoZSk9PnRvdWNoU3RhcnRIYW5kbGVyKGUpIClcclxuICAgICAgICAgICAgYXV0b0dhcFNsaWRlck1haW5Db250YWluZXIuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsKGUpPT50b3VjaEVuZEhhbmRsZXIoZSkse3Bhc3NpdmU6dHJ1ZX0pXHJcbiAgICAgICAgICAgIGltYWdlcy5mb3JFYWNoKChpbWFnZSk9PntcclxuICAgICAgICAgICAgICAgIGltYWdlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsKGUpPT5kcmFnSGFuZGxlcihlKSApXHJcbiAgICAgICAgICAgICAgICBpbWFnZS5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywoZSk9Pm9uSW1hZ2VMb2FkKGUpKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAvLyBhdXRvR2FwU2xpZGVyTWFpbkNvbnRhaW5lci5jdXJyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsKGUpPT50b3VjaFN0YXJ0SGFuZGxlcihlKSlcclxuICAgICAgICAgICAgLy8gdGhyb3R0bGUodG91Y2hTdGFydEhhbmRsZXIsMjAwMCxlKSBcclxuICAgICAgICB9XHJcbiAgICB9LFtdKVxyXG4gICAgY29uc3QgW2xlZnRBcnJvd0Rpc3BsYXksc2hvd0xlZnRBcnJvd109IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW3JpZ2h0QXJyb3dEaXNwbGF5LHNob3dSaWdodEFycm93XT0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBsZWZ0U3R5bGUgPSB7ZGlzcGxheTpsZWZ0QXJyb3dEaXNwbGF5P1wiaW5saW5lLWJsb2NrXCI6XCJub25lXCJ9XHJcbiAgICBjb25zdCByaWdodFN0eWxlID0ge2Rpc3BsYXk6cmlnaHRBcnJvd0Rpc3BsYXk/XCJpbmxpbmUtYmxvY2tcIjpcIm5vbmVcIn1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8ZGl2IGlkPVwidmlzaWJsZURpdlwiIHJlZj17YXV0b0dhcFNsaWRlck1haW5Db250YWluZXJ9ICBjbGFzc05hbWU9e3N0eWxlcy5DYXV0b0dhcCArICcgYXV0b0dhcE1haW5Db250YWluZXJEaXYgJ30+XHJcbiAgICAgICAgICAgIDxpIHJlZj17cHJldkJ1dHRvbn0gc3R5bGU9e2xlZnRTdHlsZX0gIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbisnIHByZXYgJ30+UHJldjwvaT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgcmVmPXtkaXZDYXJkc0NvbnRhaW5lcn0gY2xhc3NOYW1lPXtzdHlsZXMuYXV0b0dhcCsgJyBpbWdDb21wICd9PlxyXG4gICAgICAgICAgICA8SW1nIHJlZj17Y2hpbGRTbGlkZXJDYXJkUmVmfSBpbWdBcnI9e2ltZ0Fycn0gc3R5bGVJbWc9e3N0eWxlSW1nfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8aSByZWY9e25leHRCdXR0b259ICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b24rJyBuZXh0ICd9Pk5leHQ8L2k+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHAgc3R5bGU9e3JpZ2h0U3R5bGV9IGlkPXtzdHlsZXNbJ2lkZWEnXX0gPmhleTwvcD5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRvR2FwU2xpZGVyO1xyXG4gICAvLyBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAvLyAgICAgaWQ9aWQrMjtcclxuICAgIC8vICAgICBpbWdBcnJVcGR0KFsuLi5pbWdTdGF0ZSwgICB7XHJcbiAgICAvLyAgICAgICAgICdzcmMnOidzdGF0aWMvcGVyMS5qcGcnLFxyXG4gICAgLy8gICAgICAgICBpZDppZCxcclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgICAgJ3NyYyc6J3N0YXRpYy9wZXIyLmpwZycsXHJcbiAgICAvLyAgICAgICAgIGlkOmlkKzEsXHJcbiAgICAvLyAgICAgfV0pXHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coaWQpXHJcbiAgICAgICAgXHJcbiAgICAvLyB9LDEwMDAwKVxyXG4vLyBlbHNlIGlmKGxlZnQ+IC1zbGlkZXNUb1Njcm9sbFdpZHRoKXtcclxuLy8gICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLSR7MH1weClgO1xyXG4vLyAgICAgbmV4dFB4VmFsdWVUb1NjcmwgPSAtc2xpZGVzVG9TY3JvbGxXaWR0aDsgXHJcbi8vICAgICBwcmV2UHhWYWx1ZVRvU2NybCA9IHNsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbi8vIH1cclxuLy8gY29uc3QgY2xpY2tIYW5kbGVyID0gKGRpcmVjdGlvbik9PnsgXHJcbi8vICAgICBjb25zdCBsZWZ0ID0gZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0XHJcbi8vICAgICBjb25zb2xlLmxvZyhuZXh0UHhWYWx1ZVRvU2NybCwtZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aCtzbGlkZXJWaXNpYmxlV2lkdGgpXHJcbi8vICAgICBpZiAoZGlyZWN0aW9uID09PSAnbmV4dCcpe1xyXG4gICAgICAgIFxyXG4vLyAgICAgICAgIGlmKG5leHRQeFZhbHVlVG9TY3JsLC1kaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoK3NsaWRlclZpc2libGVXaWR0aCl7XHJcbi8vICAgICAgICAgICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLSR7MH1weClgO1xyXG4vLyAgICAgICAgICAgICBuZXh0UHhWYWx1ZVRvU2NybCA9IC1zbGlkZXNUb1Njcm9sbFdpZHRoOyBcclxuLy8gICAgICAgICAgICAgcHJldlB4VmFsdWVUb1NjcmwgPSBzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4vLyAgICAgICAgIH1lbHNlIGlmIChkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoLXNsaWRlclZpc2libGVXaWR0aDwgLW5leHRQeFZhbHVlVG9TY3JsKSB7XHJcbi8vICAgICAgICAgICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHstZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aCtzbGlkZXJWaXNpYmxlV2lkdGh9cHgpYFxyXG4vLyAgICAgICAgICAgICBuZXh0UHhWYWx1ZVRvU2NybCA9IC1kaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoK3NsaWRlclZpc2libGVXaWR0aFxyXG4vLyAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBcclxuLy8gICAgICAgICAgICAgZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zdHlsZS5jc3NUZXh0ID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgke25leHRQeFZhbHVlVG9TY3JsfXB4KWBcclxuLy8gICAgICAgICAgICAgZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zY3JvbGxMZWZ0ID0gc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuLy8gICAgICAgICAgICAgcHJldlB4VmFsdWVUb1NjcmwgPSBwcmV2UHhWYWx1ZVRvU2NybC1zbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4vLyAgICAgICAgICAgICBuZXh0UHhWYWx1ZVRvU2NybCA9IG5leHRQeFZhbHVlVG9TY3JsLXNsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbi8vICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4vLyAgICAgfWVsc2UgaWYoZGlyZWN0aW9uID09PSAncHJldicpe1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKHByZXZQeFZhbHVlVG9TY3JsKVxyXG4vLyAgICAgICAgIGNvbnN0IGxlZnQgPSBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcbi8vICAgICAgICAgaWYocHJldlB4VmFsdWVUb1Njcmw+MCl7XHJcbi8vICAgICAgICAgICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLSR7MH1weClgO1xyXG4vLyAgICAgICAgICAgICBuZXh0UHhWYWx1ZVRvU2NybCA9IC1zbGlkZXNUb1Njcm9sbFdpZHRoOyBcclxuLy8gICAgICAgICAgICAgcHJldlB4VmFsdWVUb1NjcmwgPSBzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4vLyAgICAgICAgIH1lbHNle1xyXG4vLyAgICAgICAgICAgICBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR7cHJldlB4VmFsdWVUb1Njcmx9cHgpYDtcclxuLy8gICAgICAgICAgICAgbmV4dFB4VmFsdWVUb1NjcmwgPW5leHRQeFZhbHVlVG9TY3JsICtzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4vLyAgICAgICAgICAgICBwcmV2UHhWYWx1ZVRvU2NybCA9IHByZXZQeFZhbHVlVG9TY3JsK3NsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbi8vICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4vLyAgICAgfVxyXG4vLyAvLyB9XHJcbi8vIGNvbnN0IGxlZnQgPSBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcbi8vIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc2Nyb2xsTGVmdCA9IHNsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcblxyXG4vLyBsZXQgaXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzTmFtZSk7XHJcbi8vIGZvciAodmFyIGk9MDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcbi8vICAgaWYgKGkrMT09PShpdGVtcy5sZW5ndGgpKWl0ZW1zW2ldLnN0eWxlLm1hcmdpblJpZ2h0ID0gJ2F1dG8nXHJcbi8vIH1cclxuXHJcbi8vIGluaXRWYWx1ZXMoKVxyXG4vLyBhc3luYyBmdW5jdGlvbiAgc2V0U3R5bGUoY2xhc3NOYW1lLCBzdHlsZVZhbHVlKSB7XHJcbi8vICAgICBhd2FpdCB1cGRhdGVTbGlkZU1hcmdpbihzdHlsZVZhbHVlKTtcclxuXHJcbi8vICAgICBpbml0VmFsdWVzKClcclxuLy8gfSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBdXRvR2FwU2xpZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvYXV0b0dhcFNsaWRlcidcclxuXHJcbmNvbnN0IFNsaWRlciA9ICgpID0+IHtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xpZGVyJz5cclxuICAgICAgICAgICAgPEF1dG9HYXBTbGlkZXIvPlxyXG4gICAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD5cclxuICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjowcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYmx1ciBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSkgYmx1cigyLjZweCk7ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmJsdXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnNsaWRlcntcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmxvYWRpbmd7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoJy9pY29ucy9sb2FkaW5nLnN2ZycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsaWRlcjsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJhdXRvR2FwXCI6IFwiYXV0b0dhcFNsaWRlcl9hdXRvR2FwX18xUHVMSVwiLFxuXHRcIkNhdXRvR2FwXCI6IFwiYXV0b0dhcFNsaWRlcl9DYXV0b0dhcF9fMTUzb0VcIixcblx0XCJidXR0b25cIjogXCJhdXRvR2FwU2xpZGVyX2J1dHRvbl9fMWxaZEJcIixcblx0XCJJbWdcIjogXCJhdXRvR2FwU2xpZGVyX0ltZ19fTFZJZG1cIixcblx0XCJpZGVhXCI6IFwiYXV0b0dhcFNsaWRlcl9pZGVhX18zemN0aFwiLFxuXHRcImdvTGVmdFwiOiBcImF1dG9HYXBTbGlkZXJfZ29MZWZ0X19jRmZQVlwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9