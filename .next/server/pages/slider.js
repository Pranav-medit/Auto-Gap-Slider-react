(function() {
var exports = {};
exports.id = "pages/slider";
exports.ids = ["pages/slider"];
exports.modules = {

/***/ "./components/slickSlider.js":
/*!***********************************!*\
  !*** ./components/slickSlider.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slickSlider.module.scss */ "./components/slickSlider.module.scss");
/* harmony import */ var _slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\prana\\Documents\\VSCode\\React\\react hooks\\hook1\\components\\slickSlider.js";




const Img = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({
  styleImg,
  imgArr
}, childSliderCardRef) => {
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    let id = 11;
  }, []); // let imageSlide = useRef(null);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: imgArr.map((src, index) => {
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
        }, undefined)
      }, src.id, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 21
      }, undefined);
    })
  }, void 0, false);
});

const SlickSlider = () => {
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
  }];
  const {
    0: imgArr,
    1: imgArrUpdt
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(imgArrData);
  let imageUpdateArr = imgArr;
  let id = 12;
  let timerId;
  const {
    0: cardMargin,
    1: updateCardMargin
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const styleImg = {
    width: '200px',
    height: '300px',
    margin: `0 ${cardMargin / 2}px 0 ${cardMargin / 2}px`
  };
  let {
    0: dummy,
    1: du
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(); // Each slider card

  const childSliderCardRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(); // Parent of slider cards , div holding all slide cards

  const divCardsContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(); // Slider containing cards container and prev, next buttons.

  const slickSliderMainContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(); // Initialize default values

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
  }, 500);

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
    debugger; // If next button is clicked

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

    debugger;
  };

  const initValues = () => {
    endOfSlide = false; // Slider width is an outer div which shows entire slider if we set slider to be 200px wide- 
    // -width is set on this div , we need it to calculate slider visible width in which slider is visible
    // by default slider takes full viewport width.ex : 1600px

    sliderVisibleWidth = slickSliderMainContainer.current.offsetWidth; // If slider has margin (space between slider cards if sliders are touch to each other then it has no margin)- 
    // -it is required to calculate how much does slider scrolls

    let eachSlide = document.getElementsByClassName('div__sliderCard--slideCalulate')[0];
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
    let items = document.getElementsByClassName(className);
    updateCardMargin(styleValue);

    for (var i = 0; i < items.length; i++) {
      if (i + 1 === items.length) items[i].style.marginRight = 'auto';
    }
  }

  function calculateMargin() {
    const minGapBetweenSlides = 10;
    const sliderVisibleWidth = slickSliderMainContainer.current.offsetWidth;
    const eachSlideWidth = childSliderCardRef.current.offsetWidth + minGapBetweenSlides;
    const slidesPerVisibleWidth = sliderVisibleWidth / eachSlideWidth;
    const marginToSetInPercentage = slidesPerVisibleWidth - Math.floor(slidesPerVisibleWidth);
    const marginToSetInPx = marginToSetInPercentage * eachSlideWidth;
    const marginPerSlide = marginToSetInPx / (Math.ceil(slidesPerVisibleWidth) - 1) + minGapBetweenSlides;
    setStyle('div__sliderCard--slideCalulate', Math.ceil(marginPerSlide));
    console.log(marginPerSlide);
  } // Useeffect for slider next and prev button


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    console.log('Use ', childSliderCardRef); // Execute when mounting
    // Initialize required values in particular function

    calculateMargin();
    initValues();
    autoSliderMove(2000, true); // Capture next button by class name

    const nextBtn = document.getElementsByClassName('next')[0]; // Capture previous button by class name

    const prevBtn = document.getElementsByClassName('prev')[0]; // Handle click event for both buttons

    nextBtn.addEventListener('click', () => throttle(clickHandler, 'next'));
    prevBtn.addEventListener('click', () => throttle(clickHandler, 'prev'));
    slickSliderMainContainer.current.addEventListener('mouseenter', () => clearAutoSliderMove(timerId));
    slickSliderMainContainer.current.addEventListener('mouseleave', () => autoSliderMove(1000, true));
    window.addEventListener('resize', () => {
      debounce(() => {
        calculateMargin();
        initValues();
        resetSliderPosition();
      });
    });
    return () => {
      // Execute when unmounting (cleanup)
      nextBtn.removeEventListener('click', () => throttle(clickHandler, 'next'));
      prevBtn.removeEventListener('click', () => throttle(clickHandler, 'prev'));
      slickSliderMainContainer.current.removeEventListener('mouseenter', () => clearAutoSliderMove(timerId));
      slickSliderMainContainer.current.removeEventListener('mouseleave', () => autoSliderMove(1000, true));
      window.addEventListener('resize', () => {
        debounce(() => {
          calculateMargin();
          initValues();
          resetSliderPosition();
        });
      });
    };
  }, []);
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
    slickSliderMainContainer.current.addEventListener('touchstart', e => touchStartHandler(e), {
      passive: true
    });
    slickSliderMainContainer.current.addEventListener('touchend', e => touchEndHandler(e), {
      passive: true
    }); // childSliderCardRef.current.removeEventListener('dragstart',(e)=>dragHandler(e) )
    // slickSliderMainContainer.current.addEventListener('touchmove',(e)=>touchStartHandler(e) )

    return () => {
      slickSliderMainContainer.current.removeEventListener('touchstart', e => touchStartHandler(e));
      slickSliderMainContainer.current.removeEventListener('touchend', e => touchEndHandler(e), {
        passive: true
      });
      images.forEach(image => {
        image.removeEventListener('dragstart', e => dragHandler(e));
        image.removeEventListener('load', e => onImageLoad(e));
      }); // slickSliderMainContainer.current.removeEventListener('touchmove',(e)=>touchStartHandler(e))
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
      ref: slickSliderMainContainer,
      className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Cslick) + ' slickMainContainerDiv ',
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        style: leftStyle,
        className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().button) + ' prev ',
        children: "Prev"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 373,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        ref: divCardsContainer,
        className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().slick) + ' imgComp ',
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Img, {
          ref: childSliderCardRef,
          imgArr: imgArr,
          styleImg: styleImg
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 376,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 375,
        columnNumber: 13
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().button) + ' next ',
        children: "Next"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 378,
        columnNumber: 12
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      style: rightStyle,
      id: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().idea),
      children: "hey"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 9
    }, undefined)]
  }, void 0, true);
};

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
/* harmony import */ var _components_slickSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/slickSlider */ "./components/slickSlider.js");

var _jsxFileName = "C:\\Users\\prana\\Documents\\VSCode\\React\\react hooks\\hook1\\pages\\slider.js";




const Slider = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "jsx-3554264431" + " " + 'slider',
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_slickSlider__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "3554264431",
      children: "body{margin:0px;}.blur img{-webkit-filter:grayscale(100%) blur(2.6px);filter:grayscale(100%) blur(2.6px);}.blur{overflow:hidden;}.slider{margin-right:0px;}.loading{background-image:url('/icons/loading.svg');background-repeat:no-repeat;background-size:cover;background-position:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccHJhbmFcXERvY3VtZW50c1xcVlNDb2RlXFxSZWFjdFxccmVhY3QgaG9va3NcXGhvb2sxXFxwYWdlc1xcc2xpZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNhLEFBRytCLEFBR3lCLEFBSXBCLEFBR0MsQUFHMEIsV0FaOUMsS0FPQSxDQUdBLDBCQUdnQyw0QkFDTixPQVgxQixlQVk4QiwyQkFDOUIiLCJmaWxlIjoiQzpcXFVzZXJzXFxwcmFuYVxcRG9jdW1lbnRzXFxWU0NvZGVcXFJlYWN0XFxyZWFjdCBob29rc1xcaG9vazFcXHBhZ2VzXFxzbGlkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2xpY2tTbGlkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9zbGlja1NsaWRlcidcclxuXHJcbmNvbnN0IFNsaWRlciA9ICgpID0+IHtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xpZGVyJz5cclxuICAgICAgICAgICAgPFNsaWNrU2xpZGVyLz5cclxuICAgICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+XHJcbiAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmJsdXIgaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpIGJsdXIoMi42cHgpOyAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5ibHVye1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5zbGlkZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5sb2FkaW5ne1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKCcvaWNvbnMvbG9hZGluZy5zdmcnKTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\prana\\\\Documents\\\\VSCode\\\\React\\\\react hooks\\\\hook1\\\\pages\\\\slider.js */"
    }, void 0, false, void 0, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Slider);

/***/ }),

/***/ "./components/slickSlider.module.scss":
/*!********************************************!*\
  !*** ./components/slickSlider.module.scss ***!
  \********************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"slick": "slickSlider_slick__23xUE",
	"Cslick": "slickSlider_Cslick__P0-Fs",
	"button": "slickSlider_button__21A5N",
	"Img": "slickSlider_Img__23dQe",
	"idea": "slickSlider_idea__RoOHe",
	"goLeft": "slickSlider_goLeft__2pUBU"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob29rMS8uL2NvbXBvbmVudHMvc2xpY2tTbGlkZXIuanMiLCJ3ZWJwYWNrOi8vaG9vazEvLi9wYWdlcy9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vaG9vazEvLi9jb21wb25lbnRzL3NsaWNrU2xpZGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2hvb2sxL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vaG9vazEvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2hvb2sxL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vaG9vazEvZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiXSwibmFtZXMiOlsiSW1nIiwiZm9yd2FyZFJlZiIsInN0eWxlSW1nIiwiaW1nQXJyIiwiY2hpbGRTbGlkZXJDYXJkUmVmIiwidXNlRWZmZWN0IiwiaWQiLCJtYXAiLCJzcmMiLCJpbmRleCIsInN0eWxlcyIsIlNsaWNrU2xpZGVyIiwiaW1nQXJyRGF0YSIsImltZ0FyclVwZHQiLCJ1c2VTdGF0ZSIsImltYWdlVXBkYXRlQXJyIiwidGltZXJJZCIsImNhcmRNYXJnaW4iLCJ1cGRhdGVDYXJkTWFyZ2luIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJkdW1teSIsImR1IiwidXNlUmVmIiwiZGl2Q2FyZHNDb250YWluZXIiLCJzbGlja1NsaWRlck1haW5Db250YWluZXIiLCJzbGlkZXJWaXNpYmxlV2lkdGgiLCJlYWNoU2xpZGVXaWR0aCIsInNsaWRlc1RvU2Nyb2xsIiwic2xpZGVzVG9TY3JvbGxXaWR0aCIsIm5leHRQeFZhbHVlVG9TY3JsIiwicHJldlB4VmFsdWVUb1NjcmwiLCJkaXZDYXJkc0NvbnRhaW5lclRvdGFsV2lkdGgiLCJlbmRPZlNsaWRlIiwidGhyb3R0bGUiLCJfIiwiZnVuYyIsImFyZ3MiLCJkZWJvdW5jZSIsInJlc2V0U2xpZGVyUG9zaXRpb24iLCJjdXJyZW50Iiwic3R5bGUiLCJjc3NUZXh0IiwiZGlzcGxheUFycm93Iiwib2Zmc2V0V2lkdGgiLCJkaXJlY3Rpb24iLCJ0b0Rpc3BsYXkiLCJzaG93TGVmdEFycm93Iiwic2hvd1JpZ2h0QXJyb3ciLCJ1cGRhdGVTbGlkZXJQb3NpdGlvblJlZiIsInVwZGF0ZXJlZiIsInVwZGF0ZVNsaWRlckFycmF5IiwibmV3RWxlbWVudCIsImNvbmNhdCIsImNsaWNrSGFuZGxlciIsImluaXRWYWx1ZXMiLCJlYWNoU2xpZGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJlYWNoU2xpZGVNYXJnaW4iLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwibWFyZ2luUmlnaHQiLCJzbGljZSIsIk51bWJlciIsImF1dG9TbGlkZXJNb3ZlIiwidGltZW91dCIsImF1dG9wbGF5Iiwic2V0SW50ZXJ2YWwiLCJjbGVhckF1dG9TbGlkZXJNb3ZlIiwiY2xlYXJUaW1lb3V0Iiwic2V0U3R5bGUiLCJjbGFzc05hbWUiLCJzdHlsZVZhbHVlIiwiaXRlbXMiLCJpIiwibGVuZ3RoIiwiY2FsY3VsYXRlTWFyZ2luIiwibWluR2FwQmV0d2VlblNsaWRlcyIsInNsaWRlc1BlclZpc2libGVXaWR0aCIsIm1hcmdpblRvU2V0SW5QZXJjZW50YWdlIiwiTWF0aCIsImZsb29yIiwibWFyZ2luVG9TZXRJblB4IiwibWFyZ2luUGVyU2xpZGUiLCJjZWlsIiwiY29uc29sZSIsImxvZyIsIm5leHRCdG4iLCJwcmV2QnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0b3VjaFN0YXJ0UG9zIiwidG91Y2hTdGFydEhhbmRsZXIiLCJlIiwiY2hhbmdlZFRvdWNoZXMiLCJjbGllbnRYIiwidG91Y2hFbmRIYW5kbGVyIiwidG91Y2hFbmRQb3MiLCJkcmFnSGFuZGxlciIsInByZXZlbnREZWZhdWx0Iiwib25JbWFnZUxvYWQiLCJpbWFnZSIsImlzSW1nUmVhZHkiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJpbWFnZXMiLCJBcnJheSIsImZyb20iLCJmb3JFYWNoIiwicGFzc2l2ZSIsImxlZnRBcnJvd0Rpc3BsYXkiLCJyaWdodEFycm93RGlzcGxheSIsImxlZnRTdHlsZSIsImRpc3BsYXkiLCJyaWdodFN0eWxlIiwiU2xpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxHQUFHLGdCQUFHQyxpREFBVSxDQUFDLENBQUM7QUFBQ0MsVUFBRDtBQUFVQztBQUFWLENBQUQsRUFBbUJDLGtCQUFuQixLQUF5QztBQUc1REMsa0RBQVMsQ0FBQyxNQUFJO0FBQ2QsUUFBSUMsRUFBRSxHQUFHLEVBQVQ7QUFHQyxHQUpRLEVBSVAsRUFKTyxDQUFULENBSDRELENBUzVEOztBQUNBLHNCQUNJO0FBQUEsY0FDS0gsTUFBTSxDQUFDSSxHQUFQLENBQVcsQ0FBQ0MsR0FBRCxFQUFLQyxLQUFMLEtBQWE7QUFDckIsMEJBQ0k7QUFBbUIsV0FBRyxFQUFFTCxrQkFBeEI7QUFBNEMsYUFBSyxFQUFFRixRQUFuRDtBQUE4RCxpQkFBUyxFQUFFUSxxRUFBQSxHQUFXLHNEQUFwRjtBQUFBLCtCQUNJO0FBQWtCLGlCQUFPLEVBQUMsTUFBMUI7QUFBaUMsZUFBSyxFQUFFLEVBQXhDO0FBQTRDLGFBQUcsRUFBRUYsR0FBRyxDQUFDQSxHQUFyRDtBQUE0RCxtQkFBUyxFQUFFRSwyRUFBQSxHQUFtQixlQUExRjtBQUE0RyxhQUFHLEVBQUM7QUFBaEgsV0FBVUYsR0FBRyxDQUFDRixFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixTQUFVRSxHQUFHLENBQUNGLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESjtBQUtILEtBTkE7QUFETCxtQkFESjtBQVdILENBckJxQixDQUF0Qjs7QUFzQkEsTUFBTUssV0FBVyxHQUFHLE1BQU07QUFDdEIsUUFBTUMsVUFBVSxHQUFHLENBQ2Y7QUFDSSxXQUFNLGVBRFY7QUFFSU4sTUFBRSxFQUFDO0FBRlAsR0FEZSxFQUtmO0FBQ0ks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QkFEQSxlQVNBO0FBQUcsV0FBSyxFQUFFMkcsVUFBVjtBQUFzQixRQUFFLEVBQUUzRyxzRUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEE7QUFBQSxrQkFESjtBQWFILENBbldEOztBQXFXQSwrREFBZUMsV0FBZixFLENBQ0c7QUFDQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZiQTtBQUNBOztBQUVBLE1BQU0yRyxNQUFNLEdBQUcsTUFBTTtBQUVqQixzQkFDSTtBQUFBLHdDQUFlLFFBQWY7QUFBQSw0QkFDSSw4REFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBNEJILENBOUJEOztBQWdDQSwrREFBZUEsTUFBZixFOzs7Ozs7Ozs7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUkEsb0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvc2xpZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VSZWYsZm9yd2FyZFJlZiwgdXNlRWZmZWN0LHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zbGlja1NsaWRlci5tb2R1bGUuc2NzcydcclxuaW1wb3J0ICcuL3NsaWNrU2xpZGVyLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIlxyXG5cclxuY29uc3QgSW1nID0gZm9yd2FyZFJlZigoe3N0eWxlSW1nLGltZ0Fycn0sY2hpbGRTbGlkZXJDYXJkUmVmKSA9PntcclxuICAgIFxyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgIGxldCBpZCA9IDExO1xyXG4gXHJcblxyXG4gICAgfSxbXSlcclxuICAgIFxyXG4gICAgLy8gbGV0IGltYWdlU2xpZGUgPSB1c2VSZWYobnVsbCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtpbWdBcnIubWFwKChzcmMsaW5kZXgpPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtzcmMuaWR9ICByZWY9e2NoaWxkU2xpZGVyQ2FyZFJlZn0gc3R5bGU9e3N0eWxlSW1nfSAgY2xhc3NOYW1lPXtzdHlsZXMuSW1nKycgZGl2IGRpdl9fc2xpZGVyQ2FyZCBkaXZfX3NsaWRlckNhcmQtLXNsaWRlQ2FsdWxhdGUgJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcga2V5PXtzcmMuaWR9IGxvYWRpbmc9J2xhenknIHN0eWxlPXt7fX0gc3JjPXtzcmMuc3JjfSAgIGNsYXNzTmFtZT17c3R5bGVzLnNsaWRlckltZyArICcgaW1hZ2VIb2xkZXIgJ30gIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59KVxyXG5jb25zdCBTbGlja1NsaWRlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGltZ0FyckRhdGEgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3MxLmpwZycsXHJcbiAgICAgICAgICAgIGlkOjEsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczIuanBnJyxcclxuICAgICAgICAgICAgaWQ6MixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zMy5qcGcnLFxyXG4gICAgICAgICAgICBpZDozLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3M0LmpwZycsXHJcbiAgICAgICAgICAgIGlkOjQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczUuanBnJyxcclxuICAgICAgICAgICAgaWQ6NSxcclxuICAgICAgICB9LHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zNi5qcGcnLFxyXG4gICAgICAgICAgICBpZDo2LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3M3LmpwZycsXHJcbiAgICAgICAgICAgIGlkOjcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczguanBnJyxcclxuICAgICAgICAgICAgaWQ6OCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zOS5qcGcnLFxyXG4gICAgICAgICAgICBpZDo5LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3MxMC5qcGcnLFxyXG4gICAgICAgICAgICBpZDoxMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J2h0dHBzOi8vcGljc3VtLnBob3Rvcy8yMDAvMzAwJyxcclxuICAgICAgICAgICAgaWQ6MTEsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidodHRwczovL3BpY3N1bS5waG90b3MvMTIwMC8yMzAwJyxcclxuICAgICAgICAgICAgaWQ6MTIsXHJcbiAgICAgICAgfSxcclxuICAgIFxyXG4gICAgXVxyXG4gICAgY29uc3QgW2ltZ0FycixpbWdBcnJVcGR0XSA9IHVzZVN0YXRlKGltZ0FyckRhdGEpXHJcbiAgICBsZXQgaW1hZ2VVcGRhdGVBcnI9aW1nQXJyO1xyXG4gICAgbGV0IGlkID0gMTI7XHJcbiAgICBsZXQgdGltZXJJZDtcclxuICAgIGNvbnN0IFtjYXJkTWFyZ2luLHVwZGF0ZUNhcmRNYXJnaW5dID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBzdHlsZUltZyA9IHtcclxuICAgICAgICB3aWR0aDonMjAwcHgnLFxyXG4gICAgICAgIGhlaWdodDonMzAwcHgnLFxyXG4gICAgICAgIG1hcmdpbjpgMCAke2NhcmRNYXJnaW4vMn1weCAwICR7Y2FyZE1hcmdpbi8yfXB4YFxyXG4gICAgfTtcclxuICAgIGxldCBbZHVtbXksZHVdID0gdXNlU3RhdGUoKTtcclxuICAgIC8vIEVhY2ggc2xpZGVyIGNhcmRcclxuICAgIGNvbnN0IGNoaWxkU2xpZGVyQ2FyZFJlZiA9IHVzZVJlZigpO1xyXG4gICAgLy8gUGFyZW50IG9mIHNsaWRlciBjYXJkcyAsIGRpdiBob2xkaW5nIGFsbCBzbGlkZSBjYXJkc1xyXG4gICAgY29uc3QgZGl2Q2FyZHNDb250YWluZXIgPSB1c2VSZWYoKTtcclxuICAgIC8vIFNsaWRlciBjb250YWluaW5nIGNhcmRzIGNvbnRhaW5lciBhbmQgcHJldiwgbmV4dCBidXR0b25zLlxyXG4gICAgY29uc3Qgc2xpY2tTbGlkZXJNYWluQ29udGFpbmVyID0gdXNlUmVmKCk7XHJcbiAgICAvLyBJbml0aWFsaXplIGRlZmF1bHQgdmFsdWVzXHJcbiAgICBsZXQgc2xpZGVyVmlzaWJsZVdpZHRoPTA7XHJcbiAgICBsZXQgZWFjaFNsaWRlV2lkdGggPSAwO1xyXG4gICAgbGV0IHNsaWRlc1RvU2Nyb2xsID0gMDtcclxuICAgIGxldCBzbGlkZXNUb1Njcm9sbFdpZHRoPTA7XHJcbiAgICBsZXQgbmV4dFB4VmFsdWVUb1NjcmwgPSAwOyBcclxuICAgIGxldCBwcmV2UHhWYWx1ZVRvU2NybCA9IDA7XHJcbiAgICBsZXQgZGl2Q2FyZHNDb250YWluZXJUb3RhbFdpZHRoPTA7XHJcblxyXG4gICAgLy8gRGV0ZWN0IGlmIHdlIHJlYWNoZWQgZW5kIG9mIHRoZSBzbGlkZXNcclxuICAgIGxldCBlbmRPZlNsaWRlID0gZmFsc2VcclxuICAgIC8vIExvYWRhc2ggdGhyb3R0bGVyIHRvIHRocm90dGxlIHJlc2l6ZSBhbmQgaWYgdXNlciBjbGlja3MgYnV0dG9uIG1hbnkgdGltZXMgXHJcbiAgICBsZXQgdGhyb3R0bGUgPSBfLnRocm90dGxlKChmdW5jLC4uLmFyZ3MpPT4ge1xyXG4gICAgICAgIGZ1bmMoLi4uYXJncylcclxuICAgIH0sIDUwMCk7XHJcbiAgICBsZXQgZGVib3VuY2UgPSBfLmRlYm91bmNlKChmdW5jLC4uLmFyZ3MpPT4ge1xyXG4gICAgICAgIGZ1bmMoLi4uYXJncylcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnZGVpYm91bmMnKVxyXG4gICAgfSwgODAwKTtcclxuICAgIGNvbnN0IHJlc2V0U2xpZGVyUG9zaXRpb24gPSAoKSA9PntcclxuICAgICAgICAvLyBkZWZhdWx0IHNsaWRlc1RvU2Nyb2xsV2lkdGg6MjQwcHhcclxuICAgICAgICBuZXh0UHhWYWx1ZVRvU2NybCA9IC1zbGlkZXNUb1Njcm9sbFdpZHRoOyBcclxuICAgICAgICBwcmV2UHhWYWx1ZVRvU2NybCA9IHNsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbiAgICAgICAgZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zdHlsZS5jc3NUZXh0ID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtJHswfXB4KWA7XHJcbiAgICAgICAgZGlzcGxheUFycm93KCdwcmV2JyxmYWxzZSlcclxuICAgICAgICBkaXZDYXJkc0NvbnRhaW5lclRvdGFsV2lkdGggPSBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoXHJcbiAgICB9XHJcbiAgICBjb25zdCBkaXNwbGF5QXJyb3c9KGRpcmVjdGlvbj0ncHJldicsdG9EaXNwbGF5PXRydWUpPT57XHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbj09PSdwcmV2Jyl7XHJcbiAgICAgICAgICAgIGlmICAoIXRvRGlzcGxheSlzaG93TGVmdEFycm93KGZhbHNlKVxyXG4gICAgICAgICAgICBlbHNlIHNob3dMZWZ0QXJyb3codHJ1ZSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgaWYgICghdG9EaXNwbGF5KXNob3dSaWdodEFycm93KGZhbHNlKVxyXG4gICAgICAgICAgICBlbHNlIHNob3dSaWdodEFycm93KHRydWUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgdXBkYXRlU2xpZGVyUG9zaXRpb25SZWYgPSAodXBkYXRlcmVmKSA9PntcclxuICAgICAgICAvLyB0cmFuc2xhdGVYKDApIC0+IGluaXRpYWwgcG9zaXRpb24sIHN0YXJ0aW5nIHBvc2l0aW9uXHJcbiAgICAgICAgLy8gdHJhbnNsYXRlWCgtMjQwcHgpIC0+IG1vdmVzIHNsaWRlIGluIC0+IGRpcmVjdGlvbiBieSAyNDBweChlYWNoIHNsaWRlIHdpZHRoIGJ5IGRlZmF1bHQpXHJcbiAgICAgICAgaWYgKHVwZGF0ZXJlZiA9PT0gJ25leHQnKXtcclxuICAgICAgICAgICAgLy8gbWludXMgcG9zaXRpb24gZ29lcyAtPiBkaXJlY3Rpb24gb24gdHJhbnNsYXRlXHJcbiAgICAgICAgICAgIC8vIGV4OiBwcmV2UHhWYWx1ZVRvU2NybD0yNDAsbmV4dFB4VmFsdWVUb1Njcmw9LTI0MCAgYW5kIHNsaWRlc1RvU2Nyb2xsV2lkdGg9MjQwXHJcbiAgICAgICAgICAgIHByZXZQeFZhbHVlVG9TY3JsID0gcHJldlB4VmFsdWVUb1Njcmwtc2xpZGVzVG9TY3JvbGxXaWR0aDsgXHJcbiAgICAgICAgICAgIC8vIGZpcnN0LXRpbWU6cHJldlB4VmFsdWVUb1Njcmw6MFxyXG4gICAgICAgICAgICAvLyBzZWNvbmQtdGltZTpwcmV2UHhWYWx1ZVRvU2NybDotMjQwXHJcbiAgICAgICAgICAgIG5leHRQeFZhbHVlVG9TY3JsID0gbmV4dFB4VmFsdWVUb1Njcmwtc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuICAgICAgICAgICAgLy8gZmlyc3QtdGltZTpuZXh0UHhWYWx1ZVRvU2NybDotNDgwXHJcbiAgICAgICAgICAgIC8vIHNlY29uZC10aW1lOm5leHRQeFZhbHVlVG9TY3JsOi03MjBcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgLy8gZXg6IHByZXZQeFZhbHVlVG9TY3JsPS0yNDAsbmV4dFB4VmFsdWVUb1Njcmw9LTcyMCAgYW5kIHNsaWRlc1RvU2Nyb2xsV2lkdGg9MjQwXHJcbiAgICAgICAgICAgIG5leHRQeFZhbHVlVG9TY3JsID1uZXh0UHhWYWx1ZVRvU2NybCArc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuICAgICAgICAgICAgLy8gZmlyc3QtdGltZTpwcmV2UHhWYWx1ZVRvU2NybDo0ODBcclxuICAgICAgICAgICAgLy8gc2Vjb25kLXRpbWU6cHJldlB4VmFsdWVUb1Njcmw6NjIwXHJcbiAgICAgICAgICAgIHByZXZQeFZhbHVlVG9TY3JsID0gcHJldlB4VmFsdWVUb1Njcmwrc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuICAgICAgICAgICAgLy8gZmlyc3QtdGltZTpuZXh0UHhWYWx1ZVRvU2NybDowXHJcbiAgICAgICAgICAgIC8vIHNlY29uZC10aW1lOm5leHRQeFZhbHVlVG9TY3JsOjI0MFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHVwZGF0ZVNsaWRlckFycmF5ID0gKCkgPT57XHJcbiAgICAgICAgY29uc3QgbmV3RWxlbWVudCA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9wZXIxLmpwZycsXHJcbiAgICAgICAgICAgICAgICBpZDppZCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9wZXIyLmpwZycsXHJcbiAgICAgICAgICAgICAgICBpZDppZCsxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgICAgLy8gaW1nQXJyLnB1c2goLi4ubmV3RWxlbWVudClcclxuICAgICAgICBpbWFnZVVwZGF0ZUFyciA9ICBpbWFnZVVwZGF0ZUFyci5jb25jYXQobmV3RWxlbWVudClcclxuICAgICAgICBpbWdBcnJVcGR0KGltYWdlVXBkYXRlQXJyICk7XHJcbiAgICAgICAgZGl2Q2FyZHNDb250YWluZXJUb3RhbFdpZHRoID0gZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aFxyXG4gICAgICAgIGlkID0gaWQrMjtcclxuICAgICAgICAvLyAvLyBjb25zb2xlLmxvZyhpbWdBcnJEYXRhKVxyXG4gICAgICAgIC8vIGNsaWNrSGFuZGxlcignbmV4dCcpXHJcbiAgICB9XHJcbiAgICBjb25zdCBjbGlja0hhbmRsZXIgPSAoZGlyZWN0aW9uKT0+eyBcclxuICAgICAgICBkZWJ1Z2dlclxyXG4gICAgICAgIC8vIElmIG5leHQgYnV0dG9uIGlzIGNsaWNrZWRcclxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAnbmV4dCcpe1xyXG4gICAgICAgICAgICBkaXNwbGF5QXJyb3coJ3ByZXYnLHRydWUpXHJcbiAgICAgICAgICAgIC8vIElmIHJlYWNoZWQgZW5kIG9mIHNsaWRlIHJldHVybiB0byBmaXJzdCBzbGlkZVxyXG4gICAgICAgICAgICBpZihlbmRPZlNsaWRlKXsgIFxyXG4gICAgICAgICAgICAgICAgLy8gUmV0dXJuIHRvIGZpcnN0IHNsaWRlIGFuZCByZXNldCBwb3NpdGlvbnMgb2Ygc2Nyb2xsIHJlZmVyZW5jZVxyXG4gICAgICAgICAgICAgICAgcmVzZXRTbGlkZXJQb3NpdGlvbigpXHJcbiAgICAgICAgICAgICAgICBlbmRPZlNsaWRlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIC8vIGV4OiBzYXkgZGl2Q2FyZHNDb250YWluZXJUb3RhbFdpZHRoID0gMjM2MDsgYW5kIHNsaWRlclZpc2libGVXaWR0aCA9IDEzMzYgYW5kIG5leHRQeFZhbHVlVG9TY3JsID0gLTE0NDAgdGhlblxyXG4gICAgICAgICAgICAgICAgLy8gc2xpZGVyVmlzaWJsZVdpZHRoIGlzIHNsaWRlciB3aWR0aCB3aGljaCBpcyB2aXNpYmxlIHRvIHVzZXJcclxuICAgICAgICAgICAgICAgIC8vIGRpdkNhcmRzQ29udGFpbmVyVG90YWxXaWR0aCBpcyB0b3RhbCB3aWR0aCBvZiBjb250YWluZXIgaG9sZGluZyBjYXJkcyA9ICB2aXNpYmxlIGFyZWEraGlkZGVuIGFyZWFcclxuICAgICAgICAgICAgfWVsc2UgaWYgKChkaXZDYXJkc0NvbnRhaW5lclRvdGFsV2lkdGgtc2xpZGVyVmlzaWJsZVdpZHRoKTwgLW5leHRQeFZhbHVlVG9TY3JsKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBJZiBzbGlkZSBpcyBhYm91dCB0byByZWFjaCBsYXN0IHNsaWRlICwgbGFzdCBidXQgb25lIGNsaWNrIG9mIGVuZG9mc2xpZGVcclxuICAgICAgICAgICAgICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHstZGl2Q2FyZHNDb250YWluZXJUb3RhbFdpZHRoK3NsaWRlclZpc2libGVXaWR0aH1weClgXHJcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgc2xpZGVyIHBvc2l0aW9uIHJlZmVyZW5jZSwgcGFzcyAnbmV4dCcgdG8gdXBkYXRlIHJlZnJlbmNlIHdpdGggcmVzcGVjdCB0byBuZXh0IGJ1dHRvbiBjbGlja1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlU2xpZGVyUG9zaXRpb25SZWYoJ25leHQnKVxyXG4gICAgICAgICAgICAgICAgZW5kT2ZTbGlkZSA9IHRydWVcclxuICAgICAgICAgICAgICAgIC8vIHVwZGF0ZVNsaWRlckFycmF5KClcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAvLyBJZiBldmVyeXRoaW5nIGlzIHJpZ2h0IHRyYW5zbGF0ZSB0byBuZXh0IHB4IHZhbHVlXHJcbiAgICAgICAgICAgICAgICBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR7bmV4dFB4VmFsdWVUb1Njcmx9cHgpYFxyXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIHNsaWRlciBwb3NpdGlvbiByZWZlcmVuY2UsIHBhc3MgJ25leHQnIHRvIHVwZGF0ZSByZWZyZW5jZSB3aXRoIHJlc3BlY3QgdG8gbmV4dCBidXR0b24gY2xpY2tcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVNsaWRlclBvc2l0aW9uUmVmKCduZXh0JylcclxuICAgICAgICAgICAgICAgIGVuZE9mU2xpZGUgPSBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2UgaWYoZGlyZWN0aW9uID09PSAncHJldicpe1xyXG4gICAgICAgICAgICAvLyBFbmQgb2Ygc2xpZGUgY2Fubm90IGJlIHJlYWNoZWQgYnkgY2xpY2tpbmcgcHJldmlvdXMgYnV0dG9uXHJcbiAgICAgICAgICAgIGVuZE9mU2xpZGUgPSBmYWxzZVxyXG4gICAgICAgICAgICBpZihwcmV2UHhWYWx1ZVRvU2NybD4wKXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlBcnJvdygncHJldicsZmFsc2UpXHJcbiAgICAgICAgICAgICAgICAvLyBJZiBzbGlkZXIgaXMgb3ZlciBsZWZ0IHJldHVybiB0byBmaXJzdCBzbGlkZSBhbmQgcmVzZXQgcG9zaXRpb25zIG9mIHNjcm9sbCByZWZlcmVuY2VcclxuICAgICAgICAgICAgICAgIC8vIGV4OiBzYXkgYnkgZGVmYXVsdCByZWZlcmVuY2UgcHJldlB4VmFsdWVUb1NjcmwgaXMgc2V0IHRvIDI0MHB4IGhlbmNlIHRoaXMgaXMgZXhlY3V0ZWRcclxuICAgICAgICAgICAgICAgIHJlc2V0U2xpZGVyUG9zaXRpb24oKVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlBcnJvdygncHJldicsdHJ1ZSlcclxuICAgICAgICAgICAgICAgIC8vIElmIGV2ZXJ5dGhpbmcgaXMgcmlnaHQgdHJhbnNsYXRlIHRvIHByZXYgcHggdmFsdWVcclxuICAgICAgICAgICAgICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHtwcmV2UHhWYWx1ZVRvU2NybH1weClgO1xyXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIHNsaWRlciBwb3NpdGlvbiByZWZlcmVuY2UsIHBhc3MgJ3ByZXYnIHRvIHVwZGF0ZSByZWZyZW5jZSB3aXRoIHJlc3BlY3QgdG8gbmV4dCBidXR0b24gY2xpY2tcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVNsaWRlclBvc2l0aW9uUmVmKCdwcmV2JylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlYnVnZ2VyXHJcbiAgICB9XHJcbiAgICBjb25zdCBpbml0VmFsdWVzID0oKSA9PntcclxuICAgICAgICBlbmRPZlNsaWRlID0gZmFsc2VcclxuICAgICAgICAvLyBTbGlkZXIgd2lkdGggaXMgYW4gb3V0ZXIgZGl2IHdoaWNoIHNob3dzIGVudGlyZSBzbGlkZXIgaWYgd2Ugc2V0IHNsaWRlciB0byBiZSAyMDBweCB3aWRlLSBcclxuICAgICAgICAvLyAtd2lkdGggaXMgc2V0IG9uIHRoaXMgZGl2ICwgd2UgbmVlZCBpdCB0byBjYWxjdWxhdGUgc2xpZGVyIHZpc2libGUgd2lkdGggaW4gd2hpY2ggc2xpZGVyIGlzIHZpc2libGVcclxuICAgICAgICAvLyBieSBkZWZhdWx0IHNsaWRlciB0YWtlcyBmdWxsIHZpZXdwb3J0IHdpZHRoLmV4IDogMTYwMHB4XHJcbiAgICAgICAgc2xpZGVyVmlzaWJsZVdpZHRoID0gc2xpY2tTbGlkZXJNYWluQ29udGFpbmVyLmN1cnJlbnQub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgLy8gSWYgc2xpZGVyIGhhcyBtYXJnaW4gKHNwYWNlIGJldHdlZW4gc2xpZGVyIGNhcmRzIGlmIHNsaWRlcnMgYXJlIHRvdWNoIHRvIGVhY2ggb3RoZXIgdGhlbiBpdCBoYXMgbm8gbWFyZ2luKS0gXHJcbiAgICAgICAgLy8gLWl0IGlzIHJlcXVpcmVkIHRvIGNhbGN1bGF0ZSBob3cgbXVjaCBkb2VzIHNsaWRlciBzY3JvbGxzXHJcbiAgICAgICAgbGV0IGVhY2hTbGlkZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Rpdl9fc2xpZGVyQ2FyZC0tc2xpZGVDYWx1bGF0ZScpWzBdXHJcbiAgICAgICAgbGV0IGVhY2hTbGlkZU1hcmdpbiA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVhY2hTbGlkZSkubWFyZ2luUmlnaHQuc2xpY2UoMCwgLTIpO1xyXG4gICAgICAgIC8vIENvbnZlcnQgZnJvbSBzdHJpbmcgdG8gbnVtYmVyIGFuZCBtdWx0aXBseSBpdCBieSB0d28gYmVjYXVzZSBtYXJnaW4gaXMgYXBwbGllZCBvbiBib3RoIHNpZGVzXHJcbiAgICAgICAgZWFjaFNsaWRlTWFyZ2luPU51bWJlcihlYWNoU2xpZGVNYXJnaW4pKjJcclxuICAgICAgICAvLyBFYWNoIHNsaWRlciBjYXJkIHdpZHRoIGlzIGNhbGN1bGF0ZWQgYnkgYWRkaW5nIGl0cyBvd24gd2lkdGggd2l0aCBpdHMgb3duIG1hcmdpblxyXG4gICAgICAgIGVhY2hTbGlkZVdpZHRoID0gZWFjaFNsaWRlLm9mZnNldFdpZHRoK2VhY2hTbGlkZU1hcmdpbjtcclxuICAgICAgICAvLyBlYWNoU2xpZGVXaWR0aCA9TnVtYmVyKGVhY2hTbGlkZVdpZHRoKVxyXG4gICAgICAgIC8vIE51bWJlciBvZiBzbGlkZXMgdG8gc2Nyb2xsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGwgPSAxXHJcbiAgICAgICAgLy8gTnVtYmVyIG9mIHNsaWRlcyB0byBzY3JvbGwgaW4gcGl4ZWxzIGV4OiBpZiAyNDBweFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsV2lkdGg9ZWFjaFNsaWRlV2lkdGgqc2xpZGVzVG9TY3JvbGw7XHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGxXaWR0aCA9IHNsaWRlclZpc2libGVXaWR0aDtcclxuICAgICAgICAvLyB0byBjYWxjdWxhdGUgYW5kIHRyYWNrIHByb2dyZXNzIG9mIGxlZnQgYW5kIHJpZ2h0IHNjcm9sbCBwb3NpdGlvbnNcclxuICAgICAgICBwcmV2UHhWYWx1ZVRvU2NybCA9IHNsaWRlc1RvU2Nyb2xsV2lkdGg7IC8vIGV4OjI0MHB4XHJcbiAgICAgICAgbmV4dFB4VmFsdWVUb1NjcmwgPSAtc2xpZGVzVG9TY3JvbGxXaWR0aDsgLy8gZXg6LTI0MHB4XHJcbiAgICAgICAgLy8gQ2FyZHMgY29udGFpbmVyIHdpZHRoIGdlbmVyYWxseSBlcXVhbCB0byBlYWNoc2xpZGVyd2lkdGgqdG90YWxudW1iZXJvZnNsaWRlcyBpbmNsdWRpbmcgbWFyZ2luIGV4OiBzYXkgMjA5MHB4XHJcbiAgICAgICAgZGl2Q2FyZHNDb250YWluZXJUb3RhbFdpZHRoID0gZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aFxyXG4gICAgICAgIGRpc3BsYXlBcnJvdygncHJldicsZmFsc2UpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGF1dG9TbGlkZXJNb3ZlPSh0aW1lb3V0LGF1dG9wbGF5KT0+e1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibW91c2VsZWF2ZVwiKVxyXG4gICAgICAgIGlmKGF1dG9wbGF5KXtcclxuICAgICAgICAgICAgdGltZXJJZD1zZXRJbnRlcnZhbCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhyb3R0bGUoY2xpY2tIYW5kbGVyLCduZXh0JylcclxuICAgICAgICAgICAgfSwxMDAwMDAwMDAwMDAwMDApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgY2xlYXJBdXRvU2xpZGVyTW92ZT0odGltZXJJZCk9PntcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm1vdXNlZW50ZXJcIilcclxuICAgICAgICBpZih0aW1lcklkKXtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySWQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gdXNlRWZmZWN0IGZvciBudW1iZXIgb2Ygc2xpZGVzIHRvIHNob3cgcGVyIGRpdlxyXG4gICAgZnVuY3Rpb24gc2V0U3R5bGUoY2xhc3NOYW1lLCBzdHlsZVZhbHVlKSB7XHJcbiAgICAgICAgbGV0IGl0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjbGFzc05hbWUpO1xyXG4gICAgICAgIHVwZGF0ZUNhcmRNYXJnaW4oc3R5bGVWYWx1ZSk7XHJcbiAgICAgICAgZm9yICh2YXIgaT0wOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgXHJcbiAgICAgICAgICBpZiAoaSsxPT09KGl0ZW1zLmxlbmd0aCkpaXRlbXNbaV0uc3R5bGUubWFyZ2luUmlnaHQgPSAnYXV0bydcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVNYXJnaW4oKXtcclxuICAgICAgICBjb25zdCBtaW5HYXBCZXR3ZWVuU2xpZGVzID0gMTBcclxuICAgICAgICBjb25zdCBzbGlkZXJWaXNpYmxlV2lkdGggPSBzbGlja1NsaWRlck1haW5Db250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aDtcclxuICAgICAgICBjb25zdCBlYWNoU2xpZGVXaWR0aCA9IGNoaWxkU2xpZGVyQ2FyZFJlZi5jdXJyZW50Lm9mZnNldFdpZHRoK21pbkdhcEJldHdlZW5TbGlkZXNcclxuICAgICAgICBjb25zdCBzbGlkZXNQZXJWaXNpYmxlV2lkdGggPSBzbGlkZXJWaXNpYmxlV2lkdGgvKGVhY2hTbGlkZVdpZHRoKTtcclxuICAgICAgICBjb25zdCBtYXJnaW5Ub1NldEluUGVyY2VudGFnZSA9IHNsaWRlc1BlclZpc2libGVXaWR0aCAtIE1hdGguZmxvb3Ioc2xpZGVzUGVyVmlzaWJsZVdpZHRoKVxyXG4gICAgICAgIGNvbnN0IG1hcmdpblRvU2V0SW5QeCA9ICgobWFyZ2luVG9TZXRJblBlcmNlbnRhZ2UpKmVhY2hTbGlkZVdpZHRoKVxyXG4gICAgICAgIGNvbnN0IG1hcmdpblBlclNsaWRlID0gKG1hcmdpblRvU2V0SW5QeC8oTWF0aC5jZWlsKHNsaWRlc1BlclZpc2libGVXaWR0aCktMSkpK21pbkdhcEJldHdlZW5TbGlkZXNcclxuICAgICAgICBzZXRTdHlsZSgnZGl2X19zbGlkZXJDYXJkLS1zbGlkZUNhbHVsYXRlJyxNYXRoLmNlaWwobWFyZ2luUGVyU2xpZGUpKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKChtYXJnaW5QZXJTbGlkZSkpXHJcbiAgICB9XHJcbiAgICAvLyBVc2VlZmZlY3QgZm9yIHNsaWRlciBuZXh0IGFuZCBwcmV2IGJ1dHRvblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1VzZSAnLGNoaWxkU2xpZGVyQ2FyZFJlZilcclxuICAgICAgICAvLyBFeGVjdXRlIHdoZW4gbW91bnRpbmdcclxuICAgICAgICAvLyBJbml0aWFsaXplIHJlcXVpcmVkIHZhbHVlcyBpbiBwYXJ0aWN1bGFyIGZ1bmN0aW9uXHJcbiAgICAgICAgY2FsY3VsYXRlTWFyZ2luKClcclxuICAgICAgICBpbml0VmFsdWVzKClcclxuICAgICAgICBhdXRvU2xpZGVyTW92ZSgyMDAwLHRydWUpXHJcbiAgICAgICAgLy8gQ2FwdHVyZSBuZXh0IGJ1dHRvbiBieSBjbGFzcyBuYW1lXHJcbiAgICAgICAgY29uc3QgbmV4dEJ0biAgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduZXh0JylbMF1cclxuICAgICAgICAvLyBDYXB0dXJlIHByZXZpb3VzIGJ1dHRvbiBieSBjbGFzcyBuYW1lXHJcbiAgICAgICAgY29uc3QgcHJldkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3ByZXYnKVswXVxyXG4gICAgICAgIC8vIEhhbmRsZSBjbGljayBldmVudCBmb3IgYm90aCBidXR0b25zXHJcbiAgICAgICAgbmV4dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PnRocm90dGxlKGNsaWNrSGFuZGxlciwnbmV4dCcpKVxyXG4gICAgICAgIHByZXZCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT50aHJvdHRsZShjbGlja0hhbmRsZXIsJ3ByZXYnKSlcclxuICAgICAgICBzbGlja1NsaWRlck1haW5Db250YWluZXIuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywoKT0+Y2xlYXJBdXRvU2xpZGVyTW92ZSh0aW1lcklkKSlcclxuICAgICAgICBzbGlja1NsaWRlck1haW5Db250YWluZXIuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywoKT0+YXV0b1NsaWRlck1vdmUoMTAwMCx0cnVlKSApXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsKCk9PntcclxuICAgICAgICAgICAgZGVib3VuY2UoKCk9PntcclxuICAgICAgICAgICAgICAgIGNhbGN1bGF0ZU1hcmdpbigpO1xyXG4gICAgICAgICAgICAgICAgaW5pdFZhbHVlcygpO1xyXG4gICAgICAgICAgICAgICAgcmVzZXRTbGlkZXJQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gKCk9PntcclxuICAgICAgICAgICAgLy8gRXhlY3V0ZSB3aGVuIHVubW91bnRpbmcgKGNsZWFudXApXHJcbiAgICAgICAgICAgIG5leHRCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT50aHJvdHRsZShjbGlja0hhbmRsZXIsJ25leHQnKSlcclxuICAgICAgICAgICAgcHJldkJ0bi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PnRocm90dGxlKGNsaWNrSGFuZGxlciwncHJldicpKSAgICAgICBcclxuICAgICAgICAgICAgc2xpY2tTbGlkZXJNYWluQ29udGFpbmVyLmN1cnJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsKCk9PmNsZWFyQXV0b1NsaWRlck1vdmUodGltZXJJZCkpXHJcbiAgICAgICAgICAgIHNsaWNrU2xpZGVyTWFpbkNvbnRhaW5lci5jdXJyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCgpPT5hdXRvU2xpZGVyTW92ZSgxMDAwLHRydWUpIClcclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsKCk9PntcclxuICAgICAgICAgICAgICAgIGRlYm91bmNlKCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsY3VsYXRlTWFyZ2luKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdFZhbHVlcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc2V0U2xpZGVyUG9zaXRpb24oKTtcclxuICAgICAgICAgICAgICAgIH0pOyAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9LFtdKVxyXG4gICAgbGV0IHRvdWNoU3RhcnRQb3MgPTA7XHJcbiAgICBjb25zdCB0b3VjaFN0YXJ0SGFuZGxlciA9IChlKT0+e1xyXG4gICAgICAgIHRvdWNoU3RhcnRQb3M9ZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCkgICBcclxuICAgIH1cclxuICAgIGNvbnN0IHRvdWNoRW5kSGFuZGxlcj0oZSk9PntcclxuICAgICAgICBsZXQgdG91Y2hFbmRQb3MgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFg7XHJcbiAgICAgICAgaWYgKHRvdWNoRW5kUG9zPT09dG91Y2hTdGFydFBvcykgcmV0dXJuXHJcbiAgICAgICAgaWYgKHRvdWNoRW5kUG9zLXRvdWNoU3RhcnRQb3M+MCkgY2xpY2tIYW5kbGVyKCdwcmV2JylcclxuICAgICAgICBlbHNlIGNsaWNrSGFuZGxlcignbmV4dCcpXHJcbiAgICB9XHJcbiAgICBjb25zdCBkcmFnSGFuZGxlciA9IChlKSA9PntcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIH1cclxuICAgIGNvbnN0IG9uSW1hZ2VMb2FkID0gKGltYWdlLGlzSW1nUmVhZHkpID0+e1xyXG4gICAgICAgIGlmIChpc0ltZ1JlYWR5KXtcclxuICAgICAgICAgICAgaW1hZ2UuY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGluZycpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoJ2xvYWRpbmcnKVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIC8vIHVzZUVmZmVjdCBmb3IgdG91Y2ggY2FwYWJpbGl0eVxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgbGV0IGltYWdlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW1hZ2VIb2xkZXInKSlcclxuICAgICAgICBpbWFnZXMuZm9yRWFjaCgoaW1hZ2UpPT57XHJcbiAgICAgICAgICAgIG9uSW1hZ2VMb2FkKGltYWdlLGZhbHNlKVxyXG4gICAgICAgICAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLChlKT0+ZHJhZ0hhbmRsZXIoZSkgKVxyXG4gICAgICAgICAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywoZSk9Pm9uSW1hZ2VMb2FkKGltYWdlLHRydWUpKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgc2xpY2tTbGlkZXJNYWluQ29udGFpbmVyLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsKGUpPT50b3VjaFN0YXJ0SGFuZGxlcihlKSx7cGFzc2l2ZTp0cnVlfSlcclxuICAgICAgICBzbGlja1NsaWRlck1haW5Db250YWluZXIuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsKGUpPT50b3VjaEVuZEhhbmRsZXIoZSkse3Bhc3NpdmU6dHJ1ZX0gKVxyXG4gICAgICAgIC8vIGNoaWxkU2xpZGVyQ2FyZFJlZi5jdXJyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsKGUpPT5kcmFnSGFuZGxlcihlKSApXHJcbiAgICAgICAgLy8gc2xpY2tTbGlkZXJNYWluQ29udGFpbmVyLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywoZSk9PnRvdWNoU3RhcnRIYW5kbGVyKGUpIClcclxuICAgICAgICByZXR1cm4gKCk9PiB7XHJcbiAgICAgICAgICAgIHNsaWNrU2xpZGVyTWFpbkNvbnRhaW5lci5jdXJyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLChlKT0+dG91Y2hTdGFydEhhbmRsZXIoZSkgKVxyXG4gICAgICAgICAgICBzbGlja1NsaWRlck1haW5Db250YWluZXIuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsKGUpPT50b3VjaEVuZEhhbmRsZXIoZSkse3Bhc3NpdmU6dHJ1ZX0pXHJcbiAgICAgICAgICAgIGltYWdlcy5mb3JFYWNoKChpbWFnZSk9PntcclxuICAgICAgICAgICAgICAgIGltYWdlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsKGUpPT5kcmFnSGFuZGxlcihlKSApXHJcbiAgICAgICAgICAgICAgICBpbWFnZS5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywoZSk9Pm9uSW1hZ2VMb2FkKGUpKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAvLyBzbGlja1NsaWRlck1haW5Db250YWluZXIuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLChlKT0+dG91Y2hTdGFydEhhbmRsZXIoZSkpXHJcbiAgICAgICAgICAgIC8vIHRocm90dGxlKHRvdWNoU3RhcnRIYW5kbGVyLDIwMDAsZSkgXHJcbiAgICAgICAgfVxyXG4gICAgfSxbXSlcclxuICAgIGNvbnN0IFtsZWZ0QXJyb3dEaXNwbGF5LHNob3dMZWZ0QXJyb3ddPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFtyaWdodEFycm93RGlzcGxheSxzaG93UmlnaHRBcnJvd109IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgbGVmdFN0eWxlID0ge2Rpc3BsYXk6bGVmdEFycm93RGlzcGxheT9cImlubGluZS1ibG9ja1wiOlwibm9uZVwifVxyXG4gICAgY29uc3QgcmlnaHRTdHlsZSA9IHtkaXNwbGF5OnJpZ2h0QXJyb3dEaXNwbGF5P1wiaW5saW5lLWJsb2NrXCI6XCJub25lXCJ9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPGRpdiBpZD1cInZpc2libGVEaXZcIiByZWY9e3NsaWNrU2xpZGVyTWFpbkNvbnRhaW5lcn0gIGNsYXNzTmFtZT17c3R5bGVzLkNzbGljayArICcgc2xpY2tNYWluQ29udGFpbmVyRGl2ICd9PlxyXG4gICAgICAgICAgICA8aSBzdHlsZT17bGVmdFN0eWxlfSAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uKycgcHJldiAnfT5QcmV2PC9pPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiByZWY9e2RpdkNhcmRzQ29udGFpbmVyfSBjbGFzc05hbWU9e3N0eWxlcy5zbGljaysgJyBpbWdDb21wICd9PlxyXG4gICAgICAgICAgICA8SW1nIHJlZj17Y2hpbGRTbGlkZXJDYXJkUmVmfSBpbWdBcnI9e2ltZ0Fycn0gc3R5bGVJbWc9e3N0eWxlSW1nfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8aSAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uKycgbmV4dCAnfT5OZXh0PC9pPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxwIHN0eWxlPXtyaWdodFN0eWxlfSBpZD17c3R5bGVzWydpZGVhJ119ID5oZXk8L3A+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2xpY2tTbGlkZXI7XHJcbiAgIC8vIHNldFRpbWVvdXQoKCk9PntcclxuICAgIC8vICAgICBpZD1pZCsyO1xyXG4gICAgLy8gICAgIGltZ0FyclVwZHQoWy4uLmltZ1N0YXRlLCAgIHtcclxuICAgIC8vICAgICAgICAgJ3NyYyc6J3N0YXRpYy9wZXIxLmpwZycsXHJcbiAgICAvLyAgICAgICAgIGlkOmlkLFxyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgICAge1xyXG4gICAgLy8gICAgICAgICAnc3JjJzonc3RhdGljL3BlcjIuanBnJyxcclxuICAgIC8vICAgICAgICAgaWQ6aWQrMSxcclxuICAgIC8vICAgICB9XSlcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhpZClcclxuICAgICAgICBcclxuICAgIC8vIH0sMTAwMDApXHJcbi8vIGVsc2UgaWYobGVmdD4gLXNsaWRlc1RvU2Nyb2xsV2lkdGgpe1xyXG4vLyAgICAgZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zdHlsZS5jc3NUZXh0ID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtJHswfXB4KWA7XHJcbi8vICAgICBuZXh0UHhWYWx1ZVRvU2NybCA9IC1zbGlkZXNUb1Njcm9sbFdpZHRoOyBcclxuLy8gICAgIHByZXZQeFZhbHVlVG9TY3JsID0gc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuLy8gfVxyXG4vLyBjb25zdCBjbGlja0hhbmRsZXIgPSAoZGlyZWN0aW9uKT0+eyBcclxuLy8gICAgIGNvbnN0IGxlZnQgPSBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnRcclxuLy8gICAgIGNvbnNvbGUubG9nKG5leHRQeFZhbHVlVG9TY3JsLC1kaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoK3NsaWRlclZpc2libGVXaWR0aClcclxuLy8gICAgIGlmIChkaXJlY3Rpb24gPT09ICduZXh0Jyl7XHJcbiAgICAgICAgXHJcbi8vICAgICAgICAgaWYobmV4dFB4VmFsdWVUb1NjcmwsLWRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQub2Zmc2V0V2lkdGgrc2xpZGVyVmlzaWJsZVdpZHRoKXtcclxuLy8gICAgICAgICAgICAgZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zdHlsZS5jc3NUZXh0ID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtJHswfXB4KWA7XHJcbi8vICAgICAgICAgICAgIG5leHRQeFZhbHVlVG9TY3JsID0gLXNsaWRlc1RvU2Nyb2xsV2lkdGg7IFxyXG4vLyAgICAgICAgICAgICBwcmV2UHhWYWx1ZVRvU2NybCA9IHNsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbi8vICAgICAgICAgfWVsc2UgaWYgKGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQub2Zmc2V0V2lkdGgtc2xpZGVyVmlzaWJsZVdpZHRoPCAtbmV4dFB4VmFsdWVUb1NjcmwpIHtcclxuLy8gICAgICAgICAgICAgZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zdHlsZS5jc3NUZXh0ID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgkey1kaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoK3NsaWRlclZpc2libGVXaWR0aH1weClgXHJcbi8vICAgICAgICAgICAgIG5leHRQeFZhbHVlVG9TY3JsID0gLWRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQub2Zmc2V0V2lkdGgrc2xpZGVyVmlzaWJsZVdpZHRoXHJcbi8vICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIFxyXG4vLyAgICAgICAgICAgICBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR7bmV4dFB4VmFsdWVUb1Njcmx9cHgpYFxyXG4vLyAgICAgICAgICAgICBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnNjcm9sbExlZnQgPSBzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4vLyAgICAgICAgICAgICBwcmV2UHhWYWx1ZVRvU2NybCA9IHByZXZQeFZhbHVlVG9TY3JsLXNsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbi8vICAgICAgICAgICAgIG5leHRQeFZhbHVlVG9TY3JsID0gbmV4dFB4VmFsdWVUb1Njcmwtc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuLy8gICAgICAgICB9XHJcbiAgICAgICAgXHJcbi8vICAgICB9ZWxzZSBpZihkaXJlY3Rpb24gPT09ICdwcmV2Jyl7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2cocHJldlB4VmFsdWVUb1NjcmwpXHJcbi8vICAgICAgICAgY29uc3QgbGVmdCA9IGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcclxuLy8gICAgICAgICBpZihwcmV2UHhWYWx1ZVRvU2NybD4wKXtcclxuLy8gICAgICAgICAgICAgZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zdHlsZS5jc3NUZXh0ID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtJHswfXB4KWA7XHJcbi8vICAgICAgICAgICAgIG5leHRQeFZhbHVlVG9TY3JsID0gLXNsaWRlc1RvU2Nyb2xsV2lkdGg7IFxyXG4vLyAgICAgICAgICAgICBwcmV2UHhWYWx1ZVRvU2NybCA9IHNsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbi8vICAgICAgICAgfWVsc2V7XHJcbi8vICAgICAgICAgICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHtwcmV2UHhWYWx1ZVRvU2NybH1weClgO1xyXG4vLyAgICAgICAgICAgICBuZXh0UHhWYWx1ZVRvU2NybCA9bmV4dFB4VmFsdWVUb1NjcmwgK3NsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbi8vICAgICAgICAgICAgIHByZXZQeFZhbHVlVG9TY3JsID0gcHJldlB4VmFsdWVUb1Njcmwrc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuLy8gICAgICAgICB9XHJcbiAgICAgICAgXHJcbi8vICAgICB9XHJcbi8vIC8vIH1cclxuLy8gY29uc3QgbGVmdCA9IGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcclxuLy8gZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zY3JvbGxMZWZ0ID0gc2xpZGVzVG9TY3JvbGxXaWR0aDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2xpY2tTbGlkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9zbGlja1NsaWRlcidcclxuXHJcbmNvbnN0IFNsaWRlciA9ICgpID0+IHtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xpZGVyJz5cclxuICAgICAgICAgICAgPFNsaWNrU2xpZGVyLz5cclxuICAgICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+XHJcbiAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmJsdXIgaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpIGJsdXIoMi42cHgpOyAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5ibHVye1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5zbGlkZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5sb2FkaW5ne1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKCcvaWNvbnMvbG9hZGluZy5zdmcnKTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyOyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInNsaWNrXCI6IFwic2xpY2tTbGlkZXJfc2xpY2tfXzIzeFVFXCIsXG5cdFwiQ3NsaWNrXCI6IFwic2xpY2tTbGlkZXJfQ3NsaWNrX19QMC1Gc1wiLFxuXHRcImJ1dHRvblwiOiBcInNsaWNrU2xpZGVyX2J1dHRvbl9fMjFBNU5cIixcblx0XCJJbWdcIjogXCJzbGlja1NsaWRlcl9JbWdfXzIzZFFlXCIsXG5cdFwiaWRlYVwiOiBcInNsaWNrU2xpZGVyX2lkZWFfX1JvT0hlXCIsXG5cdFwiZ29MZWZ0XCI6IFwic2xpY2tTbGlkZXJfZ29MZWZ0X18ycFVCVVwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9