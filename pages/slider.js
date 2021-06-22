import React from 'react';
import AutoGapSlider from '../components/autoGapSlider'

const Slider = () => {
    
    return (
        <div className='slider'>
            <AutoGapSlider/>
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
                .loading{
                    background-image:url('/icons/loading.svg');
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position:center;
                }
            `}
            </style>
        </div>
    );
};

export default Slider;