import React,{useRef,forwardRef, useEffect,useState} from 'react';
import styles from './autoGapSlider.module.scss'
import _ from "lodash"

const SliderCard = forwardRef(({styleImg,imgArr},childSliderCardRef) =>{
    // let imageSlide = useRef(null);
    return (
        <>
            {imgArr.map((src,index)=>{
                return (
                    <div key={src.id}  ref={childSliderCardRef} style={styleImg}  className={styles.sliderCard+' div div__sliderCard div__sliderCard--slideCalulate '}>
                        <img key={src.id} loading='lazy' style={{}} src={src.src}   className={styles.sliderCardImg + ' imageHolder '}  alt="" />
                    </div>
                )
            })}
        </>
    )
})
export default SliderCard