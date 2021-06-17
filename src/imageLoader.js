import React,{useState} from 'react';

const ImageLoader = ({imageSrc:{currentImg,hoverImg}}) => {
    
    const styleForDiv = {
        width:'200px',
        height:'200px'
    }
    let imageRef=React.createRef();
    return (
        <div style={styleForDiv}>
            <FApp/>
            <img style={styleForDiv}  onMouseOver={()=>{
                console.log("Mouse is onhover")
                imageRef.current.src = hoverImg
            }}onMouseOut={()=>{
                console.log("Mouse is out")
                imageRef.current.src = currentImg
            }} src={currentImg} ref={imageRef} alt="No image" />
        </div>
    );
};
const FApp =()=> {
    const divRef = React.useRef()
    const valueRef = React.useRef(90)
    const [,setDummyState] = useState()
    return (
        <div>
            Value: {valueRef.current}
            <div id="divR" ref={divRef}>App, here</div>
            <button onClick={()=> (valueRef.current = 88, setDummyState({}))}>Incr</button>
        </div>
    )
}

export default ImageLoader;
export {FApp}