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
  styleImg
}, childSliderCardRef) => {
  const imgArr = [{
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
  const {
    0: imgState,
    1: imgArrUpdt
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(imgArr);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    let id = 11;
  }, []); // let imageSlide = useRef(null);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: imgState.map((src, index) => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        ref: childSliderCardRef,
        style: styleImg,
        className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().Img) + ' imageCont ',
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          loading: "lazy",
          style: {
            width: 'inherit',
            objectFit: 'cover',
            height: '100%'
          },
          src: src.src,
          className: 'imageHolder',
          alt: ""
        }, src.id, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 25
        }, undefined)
      }, src.id, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 21
      }, undefined);
    })
  }, void 0, false);
});

const SlickSlider = () => {
  let timerId;
  const styleImg = {
    width: '200px',
    height: '300px'
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

  var throttle = lodash__WEBPACK_IMPORTED_MODULE_2___default().throttle((func, ...args) => {
    func(...args);
  }, 1000);

  const resetSliderPosition = () => {
    // default slidesToScrollWidth:240px
    nextPxValueToScrl = -slidesToScrollWidth;
    prevPxValueToScrl = slidesToScrollWidth;
    divCardsContainer.current.style.cssText = `transform: translateX(-${0}px)`;
  };

  const displayArrow = (direction = 'prev', toDisplay = true) => {
    if (!toDisplay) document.getElementsByClassName(direction)[0].style.display = "none";else document.getElementsByClassName(direction)[0].style.display = "inline-block";
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

  const clickHandler = direction => {
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
        divCardsContainer.current.style.cssText = `transform: translateX(${-divCardsContainerTotalWidth + sliderVisibleWidth}px)`; // Update slider position reference, pass 'next' to update refrence with respect to next button click

        updateSliderPositionRef('next');
        endOfSlide = true;
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
    // Slider width is an outer div which shows entire slider if we set slider to be 200px wide- 
    // -width is set on this div , we need it to calculate slider visible width in which slider is visible
    // by default slider takes full viewport width.ex : 1600px
    sliderVisibleWidth = slickSliderMainContainer.current.offsetWidth; // If slider has margin (space between slider cards if sliders are touch to each other then it has no margin)- 
    // -it is required to calculate how much does slider scrolls

    let eachSlideMargin = window.getComputedStyle(childSliderCardRef.current).marginLeft.slice(0, -2); // Convert from string to number and multiply it by two because margin is applied on both sides

    eachSlideMargin = Number(eachSlideMargin) * 2; // Each slider card width is calculated by adding its own width with its own margin

    eachSlideWidth = childSliderCardRef.current.offsetWidth + eachSlideMargin; // eachSlideWidth =Number(eachSlideWidth)
    // Number of slides to scroll

    slidesToScroll = 1; // Number of slides to scroll in pixels ex: if 240px

    slidesToScrollWidth = eachSlideWidth * slidesToScroll; // to calculate and track progress of left and right scroll positions

    prevPxValueToScrl = slidesToScrollWidth; // ex:240px

    nextPxValueToScrl = -slidesToScrollWidth; // ex:-240px
    // Cards container width generally equal to eachsliderwidth*totalnumberofslides

    divCardsContainerTotalWidth = divCardsContainer.current.offsetWidth;
    displayArrow('prev', false);
  };

  const autoSliderMove = (timeout, autoplay) => {
    console.log("mouseleave");

    if (autoplay) {
      timerId = setInterval(() => {
        throttle(clickHandler, 'next');
      }, 10000000000);
    }
  };

  const clearAutoSliderMove = timerId => {
    console.log("mouseenter");

    if (timerId) {
      clearTimeout(timerId);
    }
  }; // Useeffect for slider next and prev button


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    // Execute when mounting
    // Initialize required values in particular function
    initValues();
    autoSliderMove(2000, true); // Capture next button by class name

    const nextBtn = document.getElementsByClassName('next')[0]; // Capture previous button by class name

    const prevBtn = document.getElementsByClassName('prev')[0]; // Handle click event for both buttons

    nextBtn.addEventListener('click', () => throttle(clickHandler, 'next'));
    prevBtn.addEventListener('click', () => throttle(clickHandler, 'prev'));
    slickSliderMainContainer.current.addEventListener('mouseenter', () => clearAutoSliderMove(timerId));
    slickSliderMainContainer.current.addEventListener('mouseleave', () => autoSliderMove(1000, true));
    window.addEventListener('resize', () => {
      throttle(initValues);
      throttle(clickHandler, 'next');
      throttle(clickHandler, 'prev');
    });
    return () => {
      // Execute when unmounting (cleanup)
      nextBtn.removeEventListener('click', () => throttle(clickHandler, 'next'));
      prevBtn.removeEventListener('click', () => throttle(clickHandler, 'prev'));
      slickSliderMainContainer.current.removeEventListener('mouseenter', () => clearAutoSliderMove(timerId));
      slickSliderMainContainer.current.removeEventListener('mouseleave', () => autoSliderMove(1000, true));
      window.addEventListener('resize', () => {
        throttle(initValues);
        throttle(clickHandler, 'next');
        throttle(clickHandler, 'prev');
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
  }; // useEffect for touch capability


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    let images = Array.from(document.getElementsByClassName('imageHolder'));
    images.forEach(image => {
      image.addEventListener('dragstart', e => dragHandler(e));
    });
    slickSliderMainContainer.current.addEventListener('touchstart', e => touchStartHandler(e));
    slickSliderMainContainer.current.addEventListener('touchend', e => touchEndHandler(e));
    childSliderCardRef.current.removeEventListener('dragstart', e => dragHandler(e)); // slickSliderMainContainer.current.addEventListener('touchmove',(e)=>touchStartHandler(e) )

    return () => {
      slickSliderMainContainer.current.removeEventListener('touchstart', e => touchStartHandler(e));
      slickSliderMainContainer.current.removeEventListener('touchend', e => touchEndHandler(e)); // slickSliderMainContainer.current.removeEventListener('touchmove',(e)=>touchStartHandler(e))
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
      lineNumber: 277,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      ref: divCardsContainer,
      className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().slick) + ' imgComp ',
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Img, {
        ref: childSliderCardRef,
        styleImg: styleImg
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
      className: (_slickSlider_module_scss__WEBPACK_IMPORTED_MODULE_3___default().button) + ' next ',
      children: "Next"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 12
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 276,
    columnNumber: 9
  }, undefined);
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
    className: "jsx-1346433290" + " " + 'slider',
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_slickSlider__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "1346433290",
      children: "body{margin:0px;}.blur img{-webkit-filter:grayscale(100%) blur(2.6px);filter:grayscale(100%) blur(2.6px);}.blur{overflow:hidden;}.slider{margin-right:0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccHJhbmFcXERvY3VtZW50c1xcVlNDb2RlXFxSZWFjdFxccmVhY3QgaG9va3NcXGhvb2sxXFxwYWdlc1xcc2xpZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNhLEFBRytCLEFBR3lCLEFBSXBCLEFBR0MsV0FUcEIsS0FPQSxDQUdBLDZEQVBBIiwiZmlsZSI6IkM6XFxVc2Vyc1xccHJhbmFcXERvY3VtZW50c1xcVlNDb2RlXFxSZWFjdFxccmVhY3QgaG9va3NcXGhvb2sxXFxwYWdlc1xcc2xpZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNsaWNrU2xpZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvc2xpY2tTbGlkZXInXHJcblxyXG5jb25zdCBTbGlkZXIgPSAoKSA9PiB7XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsaWRlcic+XHJcbiAgICAgICAgICAgIDxTbGlja1NsaWRlci8+XHJcbiAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PlxyXG4gICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5ibHVyIGltZ3tcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKSBibHVyKDIuNnB4KTsgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYmx1cntcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuc2xpZGVye1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDowcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\prana\\\\Documents\\\\VSCode\\\\React\\\\react hooks\\\\hook1\\\\pages\\\\slider.js */"
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
	"goLeft": "slickSlider_goLeft__2pUBU",
	"Img": "slickSlider_Img__23dQe"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob29rMS8uL2NvbXBvbmVudHMvc2xpY2tTbGlkZXIuanMiLCJ3ZWJwYWNrOi8vaG9vazEvLi9wYWdlcy9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vaG9vazEvLi9jb21wb25lbnRzL3NsaWNrU2xpZGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2hvb2sxL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vaG9vazEvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2hvb2sxL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vaG9vazEvZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiXSwibmFtZXMiOlsiSW1nIiwiZm9yd2FyZFJlZiIsInN0eWxlSW1nIiwiY2hpbGRTbGlkZXJDYXJkUmVmIiwiaW1nQXJyIiwiaWQiLCJpbWdTdGF0ZSIsImltZ0FyclVwZHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIm1hcCIsInNyYyIsImluZGV4Iiwic3R5bGVzIiwid2lkdGgiLCJvYmplY3RGaXQiLCJoZWlnaHQiLCJTbGlja1NsaWRlciIsInRpbWVySWQiLCJkdW1teSIsImR1IiwidXNlUmVmIiwiZGl2Q2FyZHNDb250YWluZXIiLCJzbGlja1NsaWRlck1haW5Db250YWluZXIiLCJzbGlkZXJWaXNpYmxlV2lkdGgiLCJlYWNoU2xpZGVXaWR0aCIsInNsaWRlc1RvU2Nyb2xsIiwic2xpZGVzVG9TY3JvbGxXaWR0aCIsIm5leHRQeFZhbHVlVG9TY3JsIiwicHJldlB4VmFsdWVUb1NjcmwiLCJkaXZDYXJkc0NvbnRhaW5lclRvdGFsV2lkdGgiLCJlbmRPZlNsaWRlIiwidGhyb3R0bGUiLCJfIiwiZnVuYyIsImFyZ3MiLCJyZXNldFNsaWRlclBvc2l0aW9uIiwiY3VycmVudCIsInN0eWxlIiwiY3NzVGV4dCIsImRpc3BsYXlBcnJvdyIsImRpcmVjdGlvbiIsInRvRGlzcGxheSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImRpc3BsYXkiLCJ1cGRhdGVTbGlkZXJQb3NpdGlvblJlZiIsInVwZGF0ZXJlZiIsImNsaWNrSGFuZGxlciIsImluaXRWYWx1ZXMiLCJvZmZzZXRXaWR0aCIsImVhY2hTbGlkZU1hcmdpbiIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJtYXJnaW5MZWZ0Iiwic2xpY2UiLCJOdW1iZXIiLCJhdXRvU2xpZGVyTW92ZSIsInRpbWVvdXQiLCJhdXRvcGxheSIsImNvbnNvbGUiLCJsb2ciLCJzZXRJbnRlcnZhbCIsImNsZWFyQXV0b1NsaWRlck1vdmUiLCJjbGVhclRpbWVvdXQiLCJuZXh0QnRuIiwicHJldkJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidG91Y2hTdGFydFBvcyIsInRvdWNoU3RhcnRIYW5kbGVyIiwiZSIsImNoYW5nZWRUb3VjaGVzIiwiY2xpZW50WCIsInRvdWNoRW5kSGFuZGxlciIsInRvdWNoRW5kUG9zIiwiZHJhZ0hhbmRsZXIiLCJwcmV2ZW50RGVmYXVsdCIsImltYWdlcyIsIkFycmF5IiwiZnJvbSIsImZvckVhY2giLCJpbWFnZSIsIlNsaWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLEdBQUcsZ0JBQUdDLGlEQUFVLENBQUMsQ0FBQztBQUFDQztBQUFELENBQUQsRUFBWUMsa0JBQVosS0FBa0M7QUFDckQsUUFBTUMsTUFBTSxHQUFHLENBQ1g7QUFDSSxXQUFNLGVBRFY7QUFFSUMsTUFBRSxFQUFDO0FBRlAsR0FEVyxFQUtYO0FBQ0ksV0FBTSxlQURWO0FBRUlBLE1BQUUsRUFBQztBQUZQLEdBTFcsRUFTWDtBQUNJLFdBQU0sZUFEVjtBQUVJQSxNQUFFLEVBQUM7QUFGUCxHQVRXLEVBYVg7QUFDSSxXQUFNLGVBRFY7QUFFSUEsTUFBRSxFQUFDO0FBRlAsR0FiVyxFQWlCWDtBQUNJLFdBQU0sZUFEVjtBQUVJQSxNQUFF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QUFDQTs7Ozs7Ozs7Ozs7O0FDUEEsb0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvc2xpZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VSZWYsZm9yd2FyZFJlZiwgdXNlRWZmZWN0LHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zbGlja1NsaWRlci5tb2R1bGUuc2NzcydcclxuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiXHJcblxyXG5jb25zdCBJbWcgPSBmb3J3YXJkUmVmKCh7c3R5bGVJbWd9LGNoaWxkU2xpZGVyQ2FyZFJlZikgPT57XHJcbiAgICBjb25zdCBpbWdBcnIgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3MxLmpwZycsXHJcbiAgICAgICAgICAgIGlkOjEsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczIuanBnJyxcclxuICAgICAgICAgICAgaWQ6MixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zMy5qcGcnLFxyXG4gICAgICAgICAgICBpZDozLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3M0LmpwZycsXHJcbiAgICAgICAgICAgIGlkOjQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczUuanBnJyxcclxuICAgICAgICAgICAgaWQ6NSxcclxuICAgICAgICB9LHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zNi5qcGcnLFxyXG4gICAgICAgICAgICBpZDo2LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3M3LmpwZycsXHJcbiAgICAgICAgICAgIGlkOjcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICdzcmMnOidzdGF0aWMvczguanBnJyxcclxuICAgICAgICAgICAgaWQ6OCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJ3NyYyc6J3N0YXRpYy9zOS5qcGcnLFxyXG4gICAgICAgICAgICBpZDo5LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAnc3JjJzonc3RhdGljL3MxMC5qcGcnLFxyXG4gICAgICAgICAgICBpZDoxMCxcclxuICAgICAgICB9LFxyXG4gICAgXHJcbiAgICBdXHJcbiAgICBjb25zdCBbaW1nU3RhdGUsaW1nQXJyVXBkdF0gPSB1c2VTdGF0ZShpbWdBcnIpXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgIGxldCBpZCA9IDExO1xyXG4gXHJcblxyXG4gICAgfSxbXSlcclxuICAgIFxyXG4gICAgLy8gbGV0IGltYWdlU2xpZGUgPSB1c2VSZWYobnVsbCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtpbWdTdGF0ZS5tYXAoKHNyYyxpbmRleCk9PntcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3NyYy5pZH0gIHJlZj17Y2hpbGRTbGlkZXJDYXJkUmVmfSBzdHlsZT17c3R5bGVJbWd9ICBjbGFzc05hbWU9e3N0eWxlcy5JbWcrJyBpbWFnZUNvbnQgJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgbG9hZGluZz0nbGF6eScgc3R5bGU9e3t3aWR0aDonaW5oZXJpdCcsb2JqZWN0Rml0Oidjb3ZlcicsaGVpZ2h0OicxMDAlJ319IHNyYz17c3JjLnNyY30gIGtleT17c3JjLmlkfSBjbGFzc05hbWU9eydpbWFnZUhvbGRlcid9ICBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSlcclxuY29uc3QgU2xpY2tTbGlkZXIgPSAoKSA9PiB7XHJcbiAgICBsZXQgdGltZXJJZDtcclxuICAgIGNvbnN0IHN0eWxlSW1nID0ge1xyXG4gICAgICAgIHdpZHRoOicyMDBweCcsXHJcbiAgICAgICAgaGVpZ2h0OiczMDBweCdcclxuICAgIH07XHJcbiAgICBsZXQgW2R1bW15LGR1XSA9IHVzZVN0YXRlKCk7XHJcbiAgICAvLyBFYWNoIHNsaWRlciBjYXJkXHJcbiAgICBjb25zdCBjaGlsZFNsaWRlckNhcmRSZWYgPSB1c2VSZWYoKTtcclxuICAgIC8vIFBhcmVudCBvZiBzbGlkZXIgY2FyZHMgLCBkaXYgaG9sZGluZyBhbGwgc2xpZGUgY2FyZHNcclxuICAgIGNvbnN0IGRpdkNhcmRzQ29udGFpbmVyID0gdXNlUmVmKCk7XHJcbiAgICAvLyBTbGlkZXIgY29udGFpbmluZyBjYXJkcyBjb250YWluZXIgYW5kIHByZXYsIG5leHQgYnV0dG9ucy5cclxuICAgIGNvbnN0IHNsaWNrU2xpZGVyTWFpbkNvbnRhaW5lciA9IHVzZVJlZigpO1xyXG4gICAgLy8gSW5pdGlhbGl6ZSBkZWZhdWx0IHZhbHVlc1xyXG4gICAgbGV0IHNsaWRlclZpc2libGVXaWR0aD0wO1xyXG4gICAgbGV0IGVhY2hTbGlkZVdpZHRoID0gMDtcclxuICAgIGxldCBzbGlkZXNUb1Njcm9sbCA9IDA7XHJcbiAgICBsZXQgc2xpZGVzVG9TY3JvbGxXaWR0aD0wO1xyXG4gICAgbGV0IG5leHRQeFZhbHVlVG9TY3JsID0gMDsgXHJcbiAgICBsZXQgcHJldlB4VmFsdWVUb1NjcmwgPSAwO1xyXG4gICAgbGV0IGRpdkNhcmRzQ29udGFpbmVyVG90YWxXaWR0aD0wO1xyXG5cclxuICAgIC8vIERldGVjdCBpZiB3ZSByZWFjaGVkIGVuZCBvZiB0aGUgc2xpZGVzXHJcbiAgICBsZXQgZW5kT2ZTbGlkZSA9IGZhbHNlXHJcbiAgICAvLyBMb2FkYXNoIHRocm90dGxlciB0byB0aHJvdHRsZSByZXNpemUgYW5kIGlmIHVzZXIgY2xpY2tzIGJ1dHRvbiBtYW55IHRpbWVzIFxyXG4gICAgdmFyIHRocm90dGxlID0gXy50aHJvdHRsZSgoZnVuYywuLi5hcmdzKT0+IHtcclxuICAgICAgICBmdW5jKC4uLmFyZ3MpXHJcbiAgICB9LCAxMDAwKTtcclxuICAgIGNvbnN0IHJlc2V0U2xpZGVyUG9zaXRpb24gPSAoKSA9PntcclxuICAgICAgICAvLyBkZWZhdWx0IHNsaWRlc1RvU2Nyb2xsV2lkdGg6MjQwcHhcclxuICAgICAgICBuZXh0UHhWYWx1ZVRvU2NybCA9IC1zbGlkZXNUb1Njcm9sbFdpZHRoOyBcclxuICAgICAgICBwcmV2UHhWYWx1ZVRvU2NybCA9IHNsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbiAgICAgICAgZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zdHlsZS5jc3NUZXh0ID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtJHswfXB4KWA7XHJcbiAgICB9XHJcbiAgICBjb25zdCBkaXNwbGF5QXJyb3c9KGRpcmVjdGlvbj0ncHJldicsdG9EaXNwbGF5PXRydWUpPT57XHJcbiAgICAgICAgaWYgICghdG9EaXNwbGF5KWRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoZGlyZWN0aW9uKVswXS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiXHJcbiAgICAgICAgZWxzZSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGRpcmVjdGlvbilbMF0uc3R5bGUuZGlzcGxheT1cImlubGluZS1ibG9ja1wiXHJcbiAgICB9XHJcbiAgICBjb25zdCB1cGRhdGVTbGlkZXJQb3NpdGlvblJlZiA9ICh1cGRhdGVyZWYpID0+e1xyXG4gICAgICAgIC8vIHRyYW5zbGF0ZVgoMCkgLT4gaW5pdGlhbCBwb3NpdGlvbiwgc3RhcnRpbmcgcG9zaXRpb25cclxuICAgICAgICAvLyB0cmFuc2xhdGVYKC0yNDBweCkgLT4gbW92ZXMgc2xpZGUgaW4gLT4gZGlyZWN0aW9uIGJ5IDI0MHB4KGVhY2ggc2xpZGUgd2lkdGggYnkgZGVmYXVsdClcclxuICAgICAgICBpZiAodXBkYXRlcmVmID09PSAnbmV4dCcpe1xyXG4gICAgICAgICAgICAvLyBtaW51cyBwb3NpdGlvbiBnb2VzIC0+IGRpcmVjdGlvbiBvbiB0cmFuc2xhdGVcclxuICAgICAgICAgICAgLy8gZXg6IHByZXZQeFZhbHVlVG9TY3JsPTI0MCxuZXh0UHhWYWx1ZVRvU2NybD0tMjQwICBhbmQgc2xpZGVzVG9TY3JvbGxXaWR0aD0yNDBcclxuICAgICAgICAgICAgcHJldlB4VmFsdWVUb1NjcmwgPSBwcmV2UHhWYWx1ZVRvU2NybC1zbGlkZXNUb1Njcm9sbFdpZHRoOyBcclxuICAgICAgICAgICAgLy8gZmlyc3QtdGltZTpwcmV2UHhWYWx1ZVRvU2NybDowXHJcbiAgICAgICAgICAgIC8vIHNlY29uZC10aW1lOnByZXZQeFZhbHVlVG9TY3JsOi0yNDBcclxuICAgICAgICAgICAgbmV4dFB4VmFsdWVUb1NjcmwgPSBuZXh0UHhWYWx1ZVRvU2NybC1zbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4gICAgICAgICAgICAvLyBmaXJzdC10aW1lOm5leHRQeFZhbHVlVG9TY3JsOi00ODBcclxuICAgICAgICAgICAgLy8gc2Vjb25kLXRpbWU6bmV4dFB4VmFsdWVUb1Njcmw6LTcyMFxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAvLyBleDogcHJldlB4VmFsdWVUb1Njcmw9LTI0MCxuZXh0UHhWYWx1ZVRvU2NybD0tNzIwICBhbmQgc2xpZGVzVG9TY3JvbGxXaWR0aD0yNDBcclxuICAgICAgICAgICAgbmV4dFB4VmFsdWVUb1NjcmwgPW5leHRQeFZhbHVlVG9TY3JsICtzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4gICAgICAgICAgICAvLyBmaXJzdC10aW1lOnByZXZQeFZhbHVlVG9TY3JsOjQ4MFxyXG4gICAgICAgICAgICAvLyBzZWNvbmQtdGltZTpwcmV2UHhWYWx1ZVRvU2NybDo2MjBcclxuICAgICAgICAgICAgcHJldlB4VmFsdWVUb1NjcmwgPSBwcmV2UHhWYWx1ZVRvU2NybCtzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4gICAgICAgICAgICAvLyBmaXJzdC10aW1lOm5leHRQeFZhbHVlVG9TY3JsOjBcclxuICAgICAgICAgICAgLy8gc2Vjb25kLXRpbWU6bmV4dFB4VmFsdWVUb1Njcmw6MjQwXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgY2xpY2tIYW5kbGVyID0gKGRpcmVjdGlvbik9PnsgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gSWYgbmV4dCBidXR0b24gaXMgY2xpY2tlZFxyXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICduZXh0Jyl7XHJcbiAgICAgICAgICAgIGRpc3BsYXlBcnJvdygncHJldicsdHJ1ZSlcclxuICAgICAgICAgICAgLy8gSWYgcmVhY2hlZCBlbmQgb2Ygc2xpZGUgcmV0dXJuIHRvIGZpcnN0IHNsaWRlXHJcbiAgICAgICAgICAgIGlmKGVuZE9mU2xpZGUpeyAgXHJcbiAgICAgICAgICAgICAgICAvLyBSZXR1cm4gdG8gZmlyc3Qgc2xpZGUgYW5kIHJlc2V0IHBvc2l0aW9ucyBvZiBzY3JvbGwgcmVmZXJlbmNlXHJcbiAgICAgICAgICAgICAgICByZXNldFNsaWRlclBvc2l0aW9uKClcclxuICAgICAgICAgICAgICAgIGVuZE9mU2xpZGUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgLy8gZXg6IHNheSBkaXZDYXJkc0NvbnRhaW5lclRvdGFsV2lkdGggPSAyMzYwOyBhbmQgc2xpZGVyVmlzaWJsZVdpZHRoID0gMTMzNiBhbmQgbmV4dFB4VmFsdWVUb1NjcmwgPSAtMTQ0MCB0aGVuXHJcbiAgICAgICAgICAgICAgICAvLyBzbGlkZXJWaXNpYmxlV2lkdGggaXMgc2xpZGVyIHdpZHRoIHdoaWNoIGlzIHZpc2libGUgdG8gdXNlclxyXG4gICAgICAgICAgICAgICAgLy8gZGl2Q2FyZHNDb250YWluZXJUb3RhbFdpZHRoIGlzIHRvdGFsIHdpZHRoIG9mIGNvbnRhaW5lciBob2xkaW5nIGNhcmRzID0gIHZpc2libGUgYXJlYStoaWRkZW4gYXJlYVxyXG4gICAgICAgICAgICB9ZWxzZSBpZiAoKGRpdkNhcmRzQ29udGFpbmVyVG90YWxXaWR0aC1zbGlkZXJWaXNpYmxlV2lkdGgpPCAtbmV4dFB4VmFsdWVUb1NjcmwpIHtcclxuICAgICAgICAgICAgICAgIC8vIElmIHNsaWRlIGlzIGFib3V0IHRvIHJlYWNoIGxhc3Qgc2xpZGUgLCBsYXN0IGJ1dCBvbmUgY2xpY2sgb2YgZW5kb2ZzbGlkZVxyXG4gICAgICAgICAgICAgICAgZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zdHlsZS5jc3NUZXh0ID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgkey1kaXZDYXJkc0NvbnRhaW5lclRvdGFsV2lkdGgrc2xpZGVyVmlzaWJsZVdpZHRofXB4KWBcclxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBzbGlkZXIgcG9zaXRpb24gcmVmZXJlbmNlLCBwYXNzICduZXh0JyB0byB1cGRhdGUgcmVmcmVuY2Ugd2l0aCByZXNwZWN0IHRvIG5leHQgYnV0dG9uIGNsaWNrXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVTbGlkZXJQb3NpdGlvblJlZignbmV4dCcpXHJcbiAgICAgICAgICAgICAgICBlbmRPZlNsaWRlID0gdHJ1ZVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIC8vIElmIGV2ZXJ5dGhpbmcgaXMgcmlnaHQgdHJhbnNsYXRlIHRvIG5leHQgcHggdmFsdWVcclxuICAgICAgICAgICAgICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHtuZXh0UHhWYWx1ZVRvU2NybH1weClgXHJcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgc2xpZGVyIHBvc2l0aW9uIHJlZmVyZW5jZSwgcGFzcyAnbmV4dCcgdG8gdXBkYXRlIHJlZnJlbmNlIHdpdGggcmVzcGVjdCB0byBuZXh0IGJ1dHRvbiBjbGlja1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlU2xpZGVyUG9zaXRpb25SZWYoJ25leHQnKVxyXG4gICAgICAgICAgICAgICAgZW5kT2ZTbGlkZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZSBpZihkaXJlY3Rpb24gPT09ICdwcmV2Jyl7XHJcbiAgICAgICAgICAgIC8vIEVuZCBvZiBzbGlkZSBjYW5ub3QgYmUgcmVhY2hlZCBieSBjbGlja2luZyBwcmV2aW91cyBidXR0b25cclxuICAgICAgICAgICAgZW5kT2ZTbGlkZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIGlmKHByZXZQeFZhbHVlVG9TY3JsPjApe1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheUFycm93KCdwcmV2JyxmYWxzZSlcclxuICAgICAgICAgICAgICAgIC8vIElmIHNsaWRlciBpcyBvdmVyIGxlZnQgcmV0dXJuIHRvIGZpcnN0IHNsaWRlIGFuZCByZXNldCBwb3NpdGlvbnMgb2Ygc2Nyb2xsIHJlZmVyZW5jZVxyXG4gICAgICAgICAgICAgICAgLy8gZXg6IHNheSBieSBkZWZhdWx0IHJlZmVyZW5jZSBwcmV2UHhWYWx1ZVRvU2NybCBpcyBzZXQgdG8gMjQwcHggaGVuY2UgdGhpcyBpcyBleGVjdXRlZFxyXG4gICAgICAgICAgICAgICAgcmVzZXRTbGlkZXJQb3NpdGlvbigpXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheUFycm93KCdwcmV2Jyx0cnVlKVxyXG4gICAgICAgICAgICAgICAgLy8gSWYgZXZlcnl0aGluZyBpcyByaWdodCB0cmFuc2xhdGUgdG8gcHJldiBweCB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zdHlsZS5jc3NUZXh0ID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgke3ByZXZQeFZhbHVlVG9TY3JsfXB4KWA7XHJcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgc2xpZGVyIHBvc2l0aW9uIHJlZmVyZW5jZSwgcGFzcyAncHJldicgdG8gdXBkYXRlIHJlZnJlbmNlIHdpdGggcmVzcGVjdCB0byBuZXh0IGJ1dHRvbiBjbGlja1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlU2xpZGVyUG9zaXRpb25SZWYoJ3ByZXYnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBpbml0VmFsdWVzID0oKSA9PntcclxuICAgICAgICAvLyBTbGlkZXIgd2lkdGggaXMgYW4gb3V0ZXIgZGl2IHdoaWNoIHNob3dzIGVudGlyZSBzbGlkZXIgaWYgd2Ugc2V0IHNsaWRlciB0byBiZSAyMDBweCB3aWRlLSBcclxuICAgICAgICAvLyAtd2lkdGggaXMgc2V0IG9uIHRoaXMgZGl2ICwgd2UgbmVlZCBpdCB0byBjYWxjdWxhdGUgc2xpZGVyIHZpc2libGUgd2lkdGggaW4gd2hpY2ggc2xpZGVyIGlzIHZpc2libGVcclxuICAgICAgICAvLyBieSBkZWZhdWx0IHNsaWRlciB0YWtlcyBmdWxsIHZpZXdwb3J0IHdpZHRoLmV4IDogMTYwMHB4XHJcbiAgICAgICAgc2xpZGVyVmlzaWJsZVdpZHRoID0gc2xpY2tTbGlkZXJNYWluQ29udGFpbmVyLmN1cnJlbnQub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgLy8gSWYgc2xpZGVyIGhhcyBtYXJnaW4gKHNwYWNlIGJldHdlZW4gc2xpZGVyIGNhcmRzIGlmIHNsaWRlcnMgYXJlIHRvdWNoIHRvIGVhY2ggb3RoZXIgdGhlbiBpdCBoYXMgbm8gbWFyZ2luKS0gXHJcbiAgICAgICAgLy8gLWl0IGlzIHJlcXVpcmVkIHRvIGNhbGN1bGF0ZSBob3cgbXVjaCBkb2VzIHNsaWRlciBzY3JvbGxzXHJcbiAgICAgICAgbGV0IGVhY2hTbGlkZU1hcmdpbiA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGNoaWxkU2xpZGVyQ2FyZFJlZi5jdXJyZW50KS5tYXJnaW5MZWZ0LnNsaWNlKDAsIC0yKTtcclxuICAgICAgICAvLyBDb252ZXJ0IGZyb20gc3RyaW5nIHRvIG51bWJlciBhbmQgbXVsdGlwbHkgaXQgYnkgdHdvIGJlY2F1c2UgbWFyZ2luIGlzIGFwcGxpZWQgb24gYm90aCBzaWRlc1xyXG4gICAgICAgIGVhY2hTbGlkZU1hcmdpbj1OdW1iZXIoZWFjaFNsaWRlTWFyZ2luKSoyIFxyXG4gICAgICAgIC8vIEVhY2ggc2xpZGVyIGNhcmQgd2lkdGggaXMgY2FsY3VsYXRlZCBieSBhZGRpbmcgaXRzIG93biB3aWR0aCB3aXRoIGl0cyBvd24gbWFyZ2luXHJcbiAgICAgICAgZWFjaFNsaWRlV2lkdGggPSBjaGlsZFNsaWRlckNhcmRSZWYuY3VycmVudC5vZmZzZXRXaWR0aCtlYWNoU2xpZGVNYXJnaW47XHJcbiAgICAgICAgLy8gZWFjaFNsaWRlV2lkdGggPU51bWJlcihlYWNoU2xpZGVXaWR0aClcclxuICAgICAgICAvLyBOdW1iZXIgb2Ygc2xpZGVzIHRvIHNjcm9sbFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsID0gMVxyXG4gICAgICAgIC8vIE51bWJlciBvZiBzbGlkZXMgdG8gc2Nyb2xsIGluIHBpeGVscyBleDogaWYgMjQwcHhcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbFdpZHRoPWVhY2hTbGlkZVdpZHRoKnNsaWRlc1RvU2Nyb2xsO1xyXG4gICAgICAgIC8vIHRvIGNhbGN1bGF0ZSBhbmQgdHJhY2sgcHJvZ3Jlc3Mgb2YgbGVmdCBhbmQgcmlnaHQgc2Nyb2xsIHBvc2l0aW9uc1xyXG4gICAgICAgIHByZXZQeFZhbHVlVG9TY3JsID0gc2xpZGVzVG9TY3JvbGxXaWR0aDsgLy8gZXg6MjQwcHhcclxuICAgICAgICBuZXh0UHhWYWx1ZVRvU2NybCA9IC1zbGlkZXNUb1Njcm9sbFdpZHRoOyAvLyBleDotMjQwcHhcclxuICAgICAgICAvLyBDYXJkcyBjb250YWluZXIgd2lkdGggZ2VuZXJhbGx5IGVxdWFsIHRvIGVhY2hzbGlkZXJ3aWR0aCp0b3RhbG51bWJlcm9mc2xpZGVzXHJcbiAgICAgICAgZGl2Q2FyZHNDb250YWluZXJUb3RhbFdpZHRoID0gZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aFxyXG4gICAgICAgIGRpc3BsYXlBcnJvdygncHJldicsZmFsc2UpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGF1dG9TbGlkZXJNb3ZlPSh0aW1lb3V0LGF1dG9wbGF5KT0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibW91c2VsZWF2ZVwiKVxyXG4gICAgICAgIGlmKGF1dG9wbGF5KXtcclxuICAgICAgICAgICAgdGltZXJJZD1zZXRJbnRlcnZhbCgoKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhyb3R0bGUoY2xpY2tIYW5kbGVyLCduZXh0JylcclxuICAgICAgICAgICAgfSwxMDAwMDAwMDAwMClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBjbGVhckF1dG9TbGlkZXJNb3ZlPSh0aW1lcklkKT0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibW91c2VlbnRlclwiKVxyXG4gICAgICAgIGlmKHRpbWVySWQpe1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXJJZClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBVc2VlZmZlY3QgZm9yIHNsaWRlciBuZXh0IGFuZCBwcmV2IGJ1dHRvblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgLy8gRXhlY3V0ZSB3aGVuIG1vdW50aW5nXHJcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSByZXF1aXJlZCB2YWx1ZXMgaW4gcGFydGljdWxhciBmdW5jdGlvblxyXG4gICAgICAgIGluaXRWYWx1ZXMoKVxyXG4gICAgICAgIGF1dG9TbGlkZXJNb3ZlKDIwMDAsdHJ1ZSlcclxuICAgICAgICAvLyBDYXB0dXJlIG5leHQgYnV0dG9uIGJ5IGNsYXNzIG5hbWVcclxuICAgICAgICBjb25zdCBuZXh0QnRuICA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25leHQnKVswXVxyXG4gICAgICAgIC8vIENhcHR1cmUgcHJldmlvdXMgYnV0dG9uIGJ5IGNsYXNzIG5hbWVcclxuICAgICAgICBjb25zdCBwcmV2QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJldicpWzBdXHJcbiAgICAgICAgLy8gSGFuZGxlIGNsaWNrIGV2ZW50IGZvciBib3RoIGJ1dHRvbnNcclxuICAgICAgICBuZXh0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+dGhyb3R0bGUoY2xpY2tIYW5kbGVyLCduZXh0JykpXHJcbiAgICAgICAgcHJldkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PnRocm90dGxlKGNsaWNrSGFuZGxlciwncHJldicpKVxyXG4gICAgICAgIHNsaWNrU2xpZGVyTWFpbkNvbnRhaW5lci5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCgpPT5jbGVhckF1dG9TbGlkZXJNb3ZlKHRpbWVySWQpKVxyXG4gICAgICAgIHNsaWNrU2xpZGVyTWFpbkNvbnRhaW5lci5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCgpPT5hdXRvU2xpZGVyTW92ZSgxMDAwLHRydWUpIClcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywoKT0+e1xyXG4gICAgICAgICAgICB0aHJvdHRsZShpbml0VmFsdWVzKVxyXG4gICAgICAgICAgICB0aHJvdHRsZShjbGlja0hhbmRsZXIsJ25leHQnKVxyXG4gICAgICAgICAgICB0aHJvdHRsZShjbGlja0hhbmRsZXIsJ3ByZXYnKSAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuICgpPT57XHJcbiAgICAgICAgICAgIC8vIEV4ZWN1dGUgd2hlbiB1bm1vdW50aW5nIChjbGVhbnVwKVxyXG4gICAgICAgICAgICBuZXh0QnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+dGhyb3R0bGUoY2xpY2tIYW5kbGVyLCduZXh0JykpXHJcbiAgICAgICAgICAgIHByZXZCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT50aHJvdHRsZShjbGlja0hhbmRsZXIsJ3ByZXYnKSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNsaWNrU2xpZGVyTWFpbkNvbnRhaW5lci5jdXJyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCgpPT5jbGVhckF1dG9TbGlkZXJNb3ZlKHRpbWVySWQpKVxyXG4gICAgICAgICAgICBzbGlja1NsaWRlck1haW5Db250YWluZXIuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywoKT0+YXV0b1NsaWRlck1vdmUoMTAwMCx0cnVlKSApXHJcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCgpPT57XHJcbiAgICAgICAgICAgICAgICB0aHJvdHRsZShpbml0VmFsdWVzKVxyXG4gICAgICAgICAgICAgICAgdGhyb3R0bGUoY2xpY2tIYW5kbGVyLCduZXh0JylcclxuICAgICAgICAgICAgICAgIHRocm90dGxlKGNsaWNrSGFuZGxlciwncHJldicpICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSxbXSlcclxuICAgIGxldCB0b3VjaFN0YXJ0UG9zID0wO1xyXG4gICAgY29uc3QgdG91Y2hTdGFydEhhbmRsZXIgPSAoZSk9PntcclxuICAgICAgICB0b3VjaFN0YXJ0UG9zPWUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WDtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgpICAgXHJcbiAgICB9XHJcbiAgICBjb25zdCB0b3VjaEVuZEhhbmRsZXI9KGUpPT57XHJcbiAgICAgICAgbGV0IHRvdWNoRW5kUG9zID0gICAgZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYO1xyXG4gICAgICAgIGlmICh0b3VjaEVuZFBvcz09PXRvdWNoU3RhcnRQb3MpIHJldHVyblxyXG4gICAgICAgIGlmICh0b3VjaEVuZFBvcy10b3VjaFN0YXJ0UG9zPjApIGNsaWNrSGFuZGxlcigncHJldicpXHJcbiAgICAgICAgZWxzZSBjbGlja0hhbmRsZXIoJ25leHQnKVxyXG4gICAgfVxyXG4gICAgY29uc3QgZHJhZ0hhbmRsZXIgPSAoZSkgPT57XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICB9XHJcbiAgICAvLyB1c2VFZmZlY3QgZm9yIHRvdWNoIGNhcGFiaWxpdHlcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGxldCBpbWFnZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ltYWdlSG9sZGVyJykpXHJcbiAgICAgICAgaW1hZ2VzLmZvckVhY2goKGltYWdlKT0+e2ltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsKGUpPT5kcmFnSGFuZGxlcihlKSApfSlcclxuICAgICAgICBzbGlja1NsaWRlck1haW5Db250YWluZXIuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywoZSk9PnRvdWNoU3RhcnRIYW5kbGVyKGUpKVxyXG4gICAgICAgIHNsaWNrU2xpZGVyTWFpbkNvbnRhaW5lci5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywoZSk9PnRvdWNoRW5kSGFuZGxlcihlKSApXHJcbiAgICAgICAgY2hpbGRTbGlkZXJDYXJkUmVmLmN1cnJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywoZSk9PmRyYWdIYW5kbGVyKGUpIClcclxuICAgICAgICAvLyBzbGlja1NsaWRlck1haW5Db250YWluZXIuY3VycmVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLChlKT0+dG91Y2hTdGFydEhhbmRsZXIoZSkgKVxyXG4gICAgICAgIHJldHVybiAoKT0+IHtcclxuICAgICAgICAgICAgc2xpY2tTbGlkZXJNYWluQ29udGFpbmVyLmN1cnJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsKGUpPT50b3VjaFN0YXJ0SGFuZGxlcihlKSApXHJcbiAgICAgICAgICAgIHNsaWNrU2xpZGVyTWFpbkNvbnRhaW5lci5jdXJyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywoZSk9PnRvdWNoRW5kSGFuZGxlcihlKSlcclxuICAgICAgICAgICAgLy8gc2xpY2tTbGlkZXJNYWluQ29udGFpbmVyLmN1cnJlbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywoZSk9PnRvdWNoU3RhcnRIYW5kbGVyKGUpKVxyXG4gICAgICAgICAgICAvLyB0aHJvdHRsZSh0b3VjaFN0YXJ0SGFuZGxlciwyMDAwLGUpIFxyXG4gICAgICAgIH1cclxuICAgIH0sW10pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9XCJ2aXNpYmxlRGl2XCIgcmVmPXtzbGlja1NsaWRlck1haW5Db250YWluZXJ9ICBjbGFzc05hbWU9e3N0eWxlcy5Dc2xpY2sgKyAnIHNsaWNrTWFpbkNvbnRhaW5lckRpdiAnfT5cclxuICAgICAgICAgICAgPGkgIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbisnIHByZXYgJ30+UHJldjwvaT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgcmVmPXtkaXZDYXJkc0NvbnRhaW5lcn0gY2xhc3NOYW1lPXtzdHlsZXMuc2xpY2srICcgaW1nQ29tcCAnfT5cclxuICAgICAgICAgICAgPEltZyByZWY9e2NoaWxkU2xpZGVyQ2FyZFJlZn0gc3R5bGVJbWc9e3N0eWxlSW1nfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8aSAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uKycgbmV4dCAnfT5OZXh0PC9pPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsaWNrU2xpZGVyO1xyXG4gICAvLyBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAvLyAgICAgaWQ9aWQrMjtcclxuICAgIC8vICAgICBpbWdBcnJVcGR0KFsuLi5pbWdTdGF0ZSwgICB7XHJcbiAgICAvLyAgICAgICAgICdzcmMnOidzdGF0aWMvcGVyMS5qcGcnLFxyXG4gICAgLy8gICAgICAgICBpZDppZCxcclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgICAgJ3NyYyc6J3N0YXRpYy9wZXIyLmpwZycsXHJcbiAgICAvLyAgICAgICAgIGlkOmlkKzEsXHJcbiAgICAvLyAgICAgfV0pXHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coaWQpXHJcbiAgICAgICAgXHJcbiAgICAvLyB9LDEwMDAwKVxyXG4vLyBlbHNlIGlmKGxlZnQ+IC1zbGlkZXNUb1Njcm9sbFdpZHRoKXtcclxuLy8gICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLSR7MH1weClgO1xyXG4vLyAgICAgbmV4dFB4VmFsdWVUb1NjcmwgPSAtc2xpZGVzVG9TY3JvbGxXaWR0aDsgXHJcbi8vICAgICBwcmV2UHhWYWx1ZVRvU2NybCA9IHNsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbi8vIH1cclxuLy8gY29uc3QgY2xpY2tIYW5kbGVyID0gKGRpcmVjdGlvbik9PnsgXHJcbi8vICAgICBjb25zdCBsZWZ0ID0gZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0XHJcbi8vICAgICBjb25zb2xlLmxvZyhuZXh0UHhWYWx1ZVRvU2NybCwtZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aCtzbGlkZXJWaXNpYmxlV2lkdGgpXHJcbi8vICAgICBpZiAoZGlyZWN0aW9uID09PSAnbmV4dCcpe1xyXG4gICAgICAgIFxyXG4vLyAgICAgICAgIGlmKG5leHRQeFZhbHVlVG9TY3JsLC1kaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoK3NsaWRlclZpc2libGVXaWR0aCl7XHJcbi8vICAgICAgICAgICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLSR7MH1weClgO1xyXG4vLyAgICAgICAgICAgICBuZXh0UHhWYWx1ZVRvU2NybCA9IC1zbGlkZXNUb1Njcm9sbFdpZHRoOyBcclxuLy8gICAgICAgICAgICAgcHJldlB4VmFsdWVUb1NjcmwgPSBzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4vLyAgICAgICAgIH1lbHNlIGlmIChkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoLXNsaWRlclZpc2libGVXaWR0aDwgLW5leHRQeFZhbHVlVG9TY3JsKSB7XHJcbi8vICAgICAgICAgICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHstZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5vZmZzZXRXaWR0aCtzbGlkZXJWaXNpYmxlV2lkdGh9cHgpYFxyXG4vLyAgICAgICAgICAgICBuZXh0UHhWYWx1ZVRvU2NybCA9IC1kaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50Lm9mZnNldFdpZHRoK3NsaWRlclZpc2libGVXaWR0aFxyXG4vLyAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBcclxuLy8gICAgICAgICAgICAgZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zdHlsZS5jc3NUZXh0ID0gYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgke25leHRQeFZhbHVlVG9TY3JsfXB4KWBcclxuLy8gICAgICAgICAgICAgZGl2Q2FyZHNDb250YWluZXIuY3VycmVudC5zY3JvbGxMZWZ0ID0gc2xpZGVzVG9TY3JvbGxXaWR0aDtcclxuLy8gICAgICAgICAgICAgcHJldlB4VmFsdWVUb1NjcmwgPSBwcmV2UHhWYWx1ZVRvU2NybC1zbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4vLyAgICAgICAgICAgICBuZXh0UHhWYWx1ZVRvU2NybCA9IG5leHRQeFZhbHVlVG9TY3JsLXNsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbi8vICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4vLyAgICAgfWVsc2UgaWYoZGlyZWN0aW9uID09PSAncHJldicpe1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKHByZXZQeFZhbHVlVG9TY3JsKVxyXG4vLyAgICAgICAgIGNvbnN0IGxlZnQgPSBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcbi8vICAgICAgICAgaWYocHJldlB4VmFsdWVUb1Njcmw+MCl7XHJcbi8vICAgICAgICAgICAgIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc3R5bGUuY3NzVGV4dCA9IGB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLSR7MH1weClgO1xyXG4vLyAgICAgICAgICAgICBuZXh0UHhWYWx1ZVRvU2NybCA9IC1zbGlkZXNUb1Njcm9sbFdpZHRoOyBcclxuLy8gICAgICAgICAgICAgcHJldlB4VmFsdWVUb1NjcmwgPSBzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4vLyAgICAgICAgIH1lbHNle1xyXG4vLyAgICAgICAgICAgICBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LnN0eWxlLmNzc1RleHQgPSBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCR7cHJldlB4VmFsdWVUb1Njcmx9cHgpYDtcclxuLy8gICAgICAgICAgICAgbmV4dFB4VmFsdWVUb1NjcmwgPW5leHRQeFZhbHVlVG9TY3JsICtzbGlkZXNUb1Njcm9sbFdpZHRoO1xyXG4vLyAgICAgICAgICAgICBwcmV2UHhWYWx1ZVRvU2NybCA9IHByZXZQeFZhbHVlVG9TY3JsK3NsaWRlc1RvU2Nyb2xsV2lkdGg7XHJcbi8vICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4vLyAgICAgfVxyXG4vLyAvLyB9XHJcbi8vIGNvbnN0IGxlZnQgPSBkaXZDYXJkc0NvbnRhaW5lci5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcbi8vIGRpdkNhcmRzQ29udGFpbmVyLmN1cnJlbnQuc2Nyb2xsTGVmdCA9IHNsaWRlc1RvU2Nyb2xsV2lkdGg7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNsaWNrU2xpZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvc2xpY2tTbGlkZXInXHJcblxyXG5jb25zdCBTbGlkZXIgPSAoKSA9PiB7XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsaWRlcic+XHJcbiAgICAgICAgICAgIDxTbGlja1NsaWRlci8+XHJcbiAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PlxyXG4gICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5ibHVyIGltZ3tcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKSBibHVyKDIuNnB4KTsgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYmx1cntcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuc2xpZGVye1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDowcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyOyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInNsaWNrXCI6IFwic2xpY2tTbGlkZXJfc2xpY2tfXzIzeFVFXCIsXG5cdFwiQ3NsaWNrXCI6IFwic2xpY2tTbGlkZXJfQ3NsaWNrX19QMC1Gc1wiLFxuXHRcImJ1dHRvblwiOiBcInNsaWNrU2xpZGVyX2J1dHRvbl9fMjFBNU5cIixcblx0XCJnb0xlZnRcIjogXCJzbGlja1NsaWRlcl9nb0xlZnRfXzJwVUJVXCIsXG5cdFwiSW1nXCI6IFwic2xpY2tTbGlkZXJfSW1nX18yM2RRZVwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9