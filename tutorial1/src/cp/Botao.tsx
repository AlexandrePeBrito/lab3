import { render } from "@testing-library/react";
import React,{ FC, } from "react";
import '../App.css';

export type eventChangeText = React.ChangeEvent<HTMLInputElement>;
interface bot{
    texto: string;
}
 const Botao:FC<bot> = ({texto}) => {
    function mudanca(){
        if (texto.toLowerCase() == texto){
            texto.toUpperCase();
            return texto;
        }else{
            texto.toLowerCase();
            return texto;
        }
    }
    
    return(
        <div><button onClick={mudanca}>Botao</button></div>
        
    )
}

export default Botao;
//<input id='botao' type="button" value={'Botão'} />