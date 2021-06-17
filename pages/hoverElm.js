import React,{useState} from 'react';
import ImageLoader from '../src/imageLoader'
const HoverELm = () => {
    const imageSrc = {
        currentImg:"/static/per1.jpg",
        hoverImg:"/static/per2.jpg"
    }
    return (
        <>
        <div>
            <ImageLoader imageSrc = {imageSrc} />
            
        </div>
        <FApp/>
        </>
    );
};
function FApp(){
    const valueRef = React.createRef()
    const [,setDummyState] = useState()
    return (
        <div>
            Value: {valueRef.current}
            <button onClick={()=> (console.log(valueRef),valueRef.current = 88, setDummyState({}))}>Incr</button>
        </div>
    )
}
export default HoverELm;