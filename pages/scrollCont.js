import React from 'react';
import ScrollElm from '../src/scrollElm'



const ScrollCont = () => {
    let imgArr = [
        'static/s1.jpg',
        'static/s2.jpg',
        'static/s3.jpg',
        'static/s4.jpg',
        'static/s4.jpg',
        'static/s5.jpg',
    ]
    let style = {
        width:'400px'
    }
    return (
        <div  className='imageContainer'>
            {imgArr.map((src,index)=>{
                return (<div className='imageCont' style={style}  key={index}>
                    <ScrollElm index={index}  src={src} />
               </div>)
            })}
            <style global jsx>
            {`
                body {
                    margin:10px;
                }
                .blur img{
                    filter: grayscale(100%) blur(2.6px);
                    
                }
                .blur{
                    
                    overflow:hidden;
                }
            `}
            </style>

        </div>
    );
};

export default ScrollCont;