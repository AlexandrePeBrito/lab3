import React,{ FC, } from "react";
import '../App.css';

export type eventChangeText = React.ChangeEvent<HTMLInputElement>;
 const Botao:FC = (text) => {
    return(
        <div><input id='botao' type="button" value={'Botão'} /></div>
        
    )
}

export default Botao;
