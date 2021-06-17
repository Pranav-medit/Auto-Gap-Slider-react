import React from 'react';
import SlickSlider from '../components/slickSlider'

const Slider = () => {
    
    return (
        <div className='slider'>
            <SlickSlider/>
            <style global jsx>
            {`
                body {
                    margin:0px;
                }
                .blur img{
                    filter: grayscale(100%) blur(2.6px);             
                }
                .blur{
                    
                    overflow:hidden;
                }
                .slider{
                    margin-right:0px;
                }
            `}
            </style>
        </div>
    );
};

export default Slider;