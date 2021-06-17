import React,{useState} from 'react';


const ScrollElm = ({src,index}) => { 
    let [isBlur,isBlurUpdater] = useState(false)
    if (process.browser){
        
    }
    const  scrollHandler = (e)=>{     
        const divImg= document.getElementsByClassName('imageCont')[index]
        const divImgHeight = divImg.getBoundingClientRect().height;
        const divTop = divImg.getBoundingClientRect().top;
        const divBottom = divImg.getBoundingClientRect().bottom;
        if( divTop+(divImgHeight*(20/100)) < 10  || divBottom-(divImgHeight*(20/100)) > window.innerHeight ){
            isBlurUpdater(true)
        }else{
            isBlurUpdater(false)
        }
    }
    React.useEffect(() => {     
        scrollHandler()
        document.addEventListener('scroll',scrollHandler)
        return ()=> document.removeEventListener('scroll',scrollHandler)   
      }, []);
    const imgStyle = {
        height:'100%',
        width:'100%',
        objectFit:'contain'
    }
    return (
        <div className={(isBlur ? 'blur' : 'noBlur')} >
            <img  style={imgStyle} src={src} alt="" />
        </div>
    );
};
export default ScrollElm;
// const maxHeight = div.offsetHeight;
//         const minHeight = div.getBoundingClientRect().top
//         const divImgHeight = divImg.offsetHeight; 
// const div= document.getElementsByClassName('imageContainer')[0]
 
        // if (index < 10) || (index) {
        //     console.log(height)
        // }
        // console.log()