
import React, {useState} from 'react'

const DisplayPtag = (props) => {
 return (
<div>
    
    <p>Input is : {props.inputText}</p>
    {  
        props.inputTextHistory.map((elem,key)=>{
          return (<p key={key} >{elem}</p>)
       })
    }
</div>
 )
}

const InputElement = () => {
    const[inputText,setInputText] = useState("");
    const[inputTextHistory,setInputTextHistory] = useState([]);
    return (
    <div>
        <input 
        onChange={(e)=>{
            setInputText(e.target.value)
            setInputTextHistory([...inputTextHistory, e.target.value])
        }}
         placeholder='Enter some text' />
         <DisplayPtag inputTextHistory={inputTextHistory} inputText={inputText}/>
    </div>
    );
}
export default InputElement