
import './App.css';
import  Example  from './Componet/Example';
import Form from './Componet/Form';
import User from './Componet/User';
import React, { useState } from 'react';



function App() {
  const [mod, setMod] = useState('light') // for drak mod

  const toggleMode = () => {
    if (mod === 'light') {
      setMod('dark')
      document.body.style.backgroundColor = '#002269'
    }
    else {
      setMod('light')
      document.body.style.backgroundColor = 'white  '
    }

  }


  return (
     <>
      <Example name="LOGIN" detailed="PASSWORD" mod={mod} toggleMode={toggleMode}/>
      <Form/>
      <User/>
     </>
  );
}

export default App;
