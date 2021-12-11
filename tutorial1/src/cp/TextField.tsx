import React,{ FC,InputHTMLAttributes,useState } from "react";
import '../App.css'

export type eventChangeText = React.ChangeEvent<HTMLInputElement>;

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{

    name: string;
    label: string;
    textChange?:(e:eventChangeText)=>void;

}

const TextField:FC<InputProps> = ({name, label, textChange, ...rest})=>{
    
    const [text, setText] = useState('');

    const handleChange = (e:eventChangeText) =>{

        setText(e.target.value);
       
        if(textChange) textChange(e);
    }
    return(

        <div className="textField">
            <label htmlFor = {name}> {label} </label>

            <div>

                <input
                    id = {name}
                    value={text}
                    onChange = {handleChange} {...rest}/>

            </div>
        </div>

    )
}
export default TextField;