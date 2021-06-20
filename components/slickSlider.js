import React,{useRef,forwardRef, useEffect,useState} from 'react';
import styles from './slickSlider.module.scss'
import _ from "lodash"

const Img = forwardRef(({styleImg,imgArr},childSliderCardRef) =>{
    
    
    useEffect(()=>{
    let id = 11;
 

    },[])
    
    // let imageSlide = useRef(null);
    return (
        <>
            {imgArr.map((src,index)=>{
                return (
                    <div key={src.id}  ref={childSliderCardRef} style={styleImg}  className={styles.Img+' div div__sliderCard div__sliderCard--slideCalulate '}>
                        <img key={src.id} loading='lazy' style={{width:'inherit',objectFit:'cover',height:'100%'}} src={src.src}   className={styles.sliderImg + ' imageHolder '}  alt="" />
                    </div>
                )
            })}
        </>
    )
})
const SlickSlider = () => {
    const imgArrData = [
        {
            'src':'static/s1.jpg',
            id:1,
        },
        {
            'src':'static/s2.jpg',
            id:2,
        },
        {
            'src':'static/s3.jpg',
            id:3,
        },
        {
            'src':'static/s4.jpg',
            id:4,
        },
        {
            'src':'static/s5.jpg',
            id:5,
        },{
            'src':'static/s6.jpg',
            id:6,
        },
        {
            'src':'static/s7.jpg',
            id:7,
        },
        {
            'src':'static/s8.jpg',
            id:8,
        },
        {
            'src':'static/s9.jpg',
            id:9,
        },
        {
            'src':'static/s10.jpg',
            id:10,
        },
        {
            'src':'https://picsum.photos/200/300',
            id:11,
        },
        {
            'src':'https://picsum.photos/1200/2300',
            id:12,
        },
    
    ]
    const [imgArr,imgArrUpdt] = useState(imgArrData)
    let imageUpdateArr=imgArr;
    let id = 12;
    let timerId;
    const styleImg = {
        width:'200px',
        height:'300px'
    };
    let [dummy,du] = useState();
    // Each slider card
    const childSliderCardRef = useRef();
    // Parent of slider cards , div holding all slide cards
    const divCardsContainer = useRef();
    // Slider containing cards container and prev, next buttons.
    const slickSliderMainContainer = useRef();
    // Initialize default values
    let sliderVisibleWidth=0;
    let eachSlideWidth = 0;
    let slidesToScroll = 0;
    let slidesToScrollWidth=0;
    let nextPxValueToScrl = 0; 
    let prevPxValueToScrl = 0;
    let divCardsContainerTotalWidth=0;

    // Detect if we reached end of the slides
    let endOfSlide = false
    // Loadash throttler to throttle resize and if user clicks button many times 
    let throttle = _.throttle((func,...args)=> {
        func(...args)
    }, 500);
    let debounce = _.debounce((func,...args)=> {
        func(...args)
        // console.log('deibounc')
    }, 800);
    const resetSliderPosition = () =>{
        // default slidesToScrollWidth:240px
        nextPxValueToScrl = -slidesToScrollWidth; 
        prevPxValueToScrl = slidesToScrollWidth;
        divCardsContainer.current.style.cssText = `transform: translateX(-${0}px)`;
        displayArrow('prev',false)
        divCardsContainerTotalWidth = divCardsContainer.current.offsetWidth
    }
    const displayArrow=(direction='prev',toDisplay=true)=>{
        if  (!toDisplay)document.getElementsByClassName(direction)[0].style.display="none"
        else document.getElementsByClassName(direction)[0].style.display="inline-block"
    }
    const updateSliderPositionRef = (updateref) =>{
        // translateX(0) -> initial position, starting position
        // translateX(-240px) -> moves slide in -> direction by 240px(each slide width by default)
        if (updateref === 'next'){
            // minus position goes -> direction on translate
            // ex: prevPxValueToScrl=240,nextPxValueToScrl=-240  and slidesToScrollWidth=240
            prevPxValueToScrl = prevPxValueToScrl-slidesToScrollWidth; 
            // first-time:prevPxValueToScrl:0
            // second-time:prevPxValueToScrl:-240
            nextPxValueToScrl = nextPxValueToScrl-slidesToScrollWidth;
            // first-time:nextPxValueToScrl:-480
            // second-time:nextPxValueToScrl:-720
        }else{
            // ex: prevPxValueToScrl=-240,nextPxValueToScrl=-720  and slidesToScrollWidth=240
            nextPxValueToScrl =nextPxValueToScrl +slidesToScrollWidth;
            // first-time:prevPxValueToScrl:480
            // second-time:prevPxValueToScrl:620
            prevPxValueToScrl = prevPxValueToScrl+slidesToScrollWidth;
            // first-time:nextPxValueToScrl:0
            // second-time:nextPxValueToScrl:240
        }
    }
    const updateSliderArray = () =>{
        const newElement = [
            {
                'src':'static/per1.jpg',
                id:id,
            },
            {
                'src':'static/per2.jpg',
                id:id+1
            }
        ]
        // imgArr.push(...newElement)
        imageUpdateArr =  imageUpdateArr.concat(newElement)
        imgArrUpdt(imageUpdateArr );
        divCardsContainerTotalWidth = divCardsContainer.current.offsetWidth
        id = id+2;
        // // console.log(imgArrData)
        // clickHandler('next')
    }
    const clickHandler = (direction)=>{ 
        
        // If next button is clicked
        if (direction === 'next'){
            displayArrow('prev',true)
            // If reached end of slide return to first slide
            if(endOfSlide){  
                // Return to first slide and reset positions of scroll reference
                resetSliderPosition()
                endOfSlide = false
                // ex: say divCardsContainerTotalWidth = 2360; and sliderVisibleWidth = 1336 and nextPxValueToScrl = -1440 then
                // sliderVisibleWidth is slider width which is visible to user
                // divCardsContainerTotalWidth is total width of container holding cards =  visible area+hidden area
            }else if ((divCardsContainerTotalWidth-sliderVisibleWidth)< -nextPxValueToScrl) {
                // If slide is about to reach last slide , last but one click of endofslide
                divCardsContainer.current.style.cssText = `transform: translateX(${-divCardsContainerTotalWidth+sliderVisibleWidth}px)`
                // Update slider position reference, pass 'next' to update refrence with respect to next button click
                updateSliderPositionRef('next')
                endOfSlide = true
                // updateSliderArray()
            }else{
                // If everything is right translate to next px value
                divCardsContainer.current.style.cssText = `transform: translateX(${nextPxValueToScrl}px)`
                // Update slider position reference, pass 'next' to update refrence with respect to next button click
                updateSliderPositionRef('next')
                endOfSlide = false
            }
        }else if(direction === 'prev'){
            // End of slide cannot be reached by clicking previous button
            endOfSlide = false
            if(prevPxValueToScrl>0){
                // displayArrow('prev',false)
                // If slider is over left return to first slide and reset positions of scroll reference
                // ex: say by default reference prevPxValueToScrl is set to 240px hence this is executed
                resetSliderPosition()
            }else{
                displayArrow('prev',true)
                // If everything is right translate to prev px value
                divCardsContainer.current.style.cssText = `transform: translateX(${prevPxValueToScrl}px)`;
                // Update slider position reference, pass 'prev' to update refrence with respect to next button click
                updateSliderPositionRef('prev')
            }
            
            
        }
    }
    const initValues =() =>{
        endOfSlide = false
        // Slider width is an outer div which shows entire slider if we set slider to be 200px wide- 
        // -width is set on this div , we need it to calculate slider visible width in which slider is visible
        // by default slider takes full viewport width.ex : 1600px
        sliderVisibleWidth = slickSliderMainContainer.current.offsetWidth;
        // If slider has margin (space between slider cards if sliders are touch to each other then it has no margin)- 
        // -it is required to calculate how much does slider scrolls
        let eachSlide = document.getElementsByClassName('div__sliderCard--slideCalulate')[0]
        let eachSlideMargin = window.getComputedStyle(eachSlide).marginRight.slice(0, -2);
        // Convert from string to number and multiply it by two because margin is applied on both sides
        eachSlideMargin=Number(eachSlideMargin)*2
        // Each slider card width is calculated by adding its own width with its own margin
        eachSlideWidth = eachSlide.offsetWidth+eachSlideMargin;
        // eachSlideWidth =Number(eachSlideWidth)
        // Number of slides to scroll
        slidesToScroll = 1
        // Number of slides to scroll in pixels ex: if 240px
        slidesToScrollWidth=eachSlideWidth*slidesToScroll;
        slidesToScrollWidth = sliderVisibleWidth;
        // to calculate and track progress of left and right scroll positions
        prevPxValueToScrl = slidesToScrollWidth; // ex:240px
        nextPxValueToScrl = -slidesToScrollWidth; // ex:-240px
        // Cards container width generally equal to eachsliderwidth*totalnumberofslides including margin ex: say 2090px
        divCardsContainerTotalWidth = divCardsContainer.current.offsetWidth
        // displayArrow('prev',false)
    }
    
    const autoSliderMove=(timeout,autoplay)=>{
        // console.log("mouseleave")
        if(autoplay){
            timerId=setInterval(()=>{
                throttle(clickHandler,'next')
            },100000000000000)
        }
    }
    const clearAutoSliderMove=(timerId)=>{
        // console.log("mouseenter")
        if(timerId){
            clearTimeout(timerId)
        }
    }
    // useEffect for number of slides to show per div
    function setStyle(className, styleValue) {
        let items = document.getElementsByClassName(className);
        for (var i=0; i < items.length; i++) {
          items[i].style.margin = `0 ${styleValue/2}px 0 ${styleValue/2}px`
          if (i+1===(items.length))items[i].style.marginRight = 'auto'
        }
    }
    function calculateMargin(){
        const minGapBetweenSlides = 10
        const sliderVisibleWidth = slickSliderMainContainer.current.offsetWidth;
        const eachSlideWidth = childSliderCardRef.current.offsetWidth+minGapBetweenSlides
        const slidesPerVisibleWidth = sliderVisibleWidth/(eachSlideWidth);
        const marginToSetInPercentage = slidesPerVisibleWidth - Math.floor(slidesPerVisibleWidth)
        const marginToSetInPx = ((marginToSetInPercentage)*eachSlideWidth)
        const marginPerSlide = (marginToSetInPx/(Math.ceil(slidesPerVisibleWidth)-1))+minGapBetweenSlides
        setStyle('div__sliderCard--slideCalulate',Math.ceil(marginPerSlide))
        console.log((marginPerSlide))
    }
    // Useeffect for slider next and prev button
    useEffect(()=>{
        console.log('Use ',childSliderCardRef)
        // Execute when mounting
        // Initialize required values in particular function
        calculateMargin()
        initValues()
        autoSliderMove(2000,true)
        // Capture next button by class name
        const nextBtn  = document.getElementsByClassName('next')[0]
        // Capture previous button by class name
        const prevBtn = document.getElementsByClassName('prev')[0]
        // Handle click event for both buttons
        nextBtn.addEventListener('click',()=>throttle(clickHandler,'next'))
        prevBtn.addEventListener('click',()=>throttle(clickHandler,'prev'))
        slickSliderMainContainer.current.addEventListener('mouseenter',()=>clearAutoSliderMove(timerId))
        slickSliderMainContainer.current.addEventListener('mouseleave',()=>autoSliderMove(1000,true) )
        window.addEventListener('resize',()=>{
            debounce(()=>{
                calculateMargin();
                initValues();
                resetSliderPosition();
            });
        })
        return ()=>{
            // Execute when unmounting (cleanup)
            nextBtn.removeEventListener('click',()=>throttle(clickHandler,'next'))
            prevBtn.removeEventListener('click',()=>throttle(clickHandler,'prev'))       
            slickSliderMainContainer.current.removeEventListener('mouseenter',()=>clearAutoSliderMove(timerId))
            slickSliderMainContainer.current.removeEventListener('mouseleave',()=>autoSliderMove(1000,true) )
            window.addEventListener('resize',()=>{
                debounce(()=>{
                    calculateMargin();
                    initValues();
                    resetSliderPosition();
                });       
            })
        }
    },[])
    let touchStartPos =0;
    const touchStartHandler = (e)=>{
        touchStartPos=e.changedTouches[0].clientX;
        // console.log(e.changedTouches[0].clientX)   
    }
    const touchEndHandler=(e)=>{
        let touchEndPos = e.changedTouches[0].clientX;
        if (touchEndPos===touchStartPos) return
        if (touchEndPos-touchStartPos>0) clickHandler('prev')
        else clickHandler('next')
    }
    const dragHandler = (e) =>{
        e.preventDefault()
    }
    const onImageLoad = (image,isImgReady) =>{
        if (isImgReady){
            image.classList.remove('loading')
        }else{
            image.classList.add('loading')
        }
        
    }
    // useEffect for touch capability
    useEffect(()=>{
        let images = Array.from(document.getElementsByClassName('imageHolder'))
        images.forEach((image)=>{
            onImageLoad(image,false)
            image.addEventListener('dragstart',(e)=>dragHandler(e) )
            image.addEventListener('load',(e)=>onImageLoad(image,true))
        })
        slickSliderMainContainer.current.addEventListener('touchstart',(e)=>touchStartHandler(e),{passive:true})
        slickSliderMainContainer.current.addEventListener('touchend',(e)=>touchEndHandler(e),{passive:true} )
        // childSliderCardRef.current.removeEventListener('dragstart',(e)=>dragHandler(e) )
        // slickSliderMainContainer.current.addEventListener('touchmove',(e)=>touchStartHandler(e) )
        return ()=> {
            slickSliderMainContainer.current.removeEventListener('touchstart',(e)=>touchStartHandler(e) )
            slickSliderMainContainer.current.removeEventListener('touchend',(e)=>touchEndHandler(e),{passive:true})
            images.forEach((image)=>{
                image.removeEventListener('dragstart',(e)=>dragHandler(e) )
                image.removeEventListener('load',(e)=>onImageLoad(e))
            })
            // slickSliderMainContainer.current.removeEventListener('touchmove',(e)=>touchStartHandler(e))
            // throttle(touchStartHandler,2000,e) 
        }
    },[])
    return (
        <div id="visibleDiv" ref={slickSliderMainContainer}  className={styles.Cslick + ' slickMainContainerDiv '}>
            <i  className={styles.button+' prev '}>Prev</i>
            
            <div ref={divCardsContainer} className={styles.slick+ ' imgComp '}>
            <Img ref={childSliderCardRef} imgArr={imgArr} styleImg={styleImg} />
            </div>
           <i  className={styles.button+' next '}>Next</i>
        </div>
    );
};

export default SlickSlider;
   // setTimeout(()=>{
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