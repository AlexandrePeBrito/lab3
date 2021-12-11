import { render } from "@testing-library/react";
import React,{ FC, } from "react";
import '../App.css';

export type eventChangeText = React.ChangeEvent<HTMLInputElement>;
interface bot{
    texto: string;
}
 const Botao:FC<bot> = ({texto}) => {
    /*const mudanca = (txt: String)=>{
        if (txt.toLowerCase() == txt){
            txt.toUpperCase();
        }else{
            txt.toLowerCase();
        }
    }*/
    
    return(
        <div><button onClick={mudanca(texto)}>Botao</button></div>
        
    )
}

export default Botao;
//<input id='botao' type="button" value={'Botão'} />