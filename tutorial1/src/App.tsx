import React, { useState } from 'react';
import './App.css';
import Botao from './cp/Botao';
import TextField, { eventChangeText } from './cp/TextField';
import './cp/TitleApp'
import TitleApp from './cp/TitleApp';

function App() {

  const[text,setText]= useState('');

  const handleChange = (e:eventChangeText)=>{
    setText(e.target.value);
  }
  return (
    <div className="App">
      <TitleApp></TitleApp>
      <TextField className='preencherSenha' name={'Senha'} label={'Senha:'} placeholder='Digite Aqui' textChange={(e)=>handleChange(e)}></TextField>
      <Botao texto={text} ></Botao>
      <div>
        {text}
        </div>
    </div>
  );
}

export default App;
