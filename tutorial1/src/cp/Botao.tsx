import React,{ FC, } from "react";
import '../App.css';


export type eventChangeText = React.ChangeEvent<HTMLInputElement>;
interface bot{
    onClick: ()=> void
}
 const Botao:FC<bot> = ({onClick}) => {
    const handClick = ()=>{
        onClick();
    }
    return(
        <div><button onClick={handClick}>Botao</button></div>
        )
}

export default Botao;