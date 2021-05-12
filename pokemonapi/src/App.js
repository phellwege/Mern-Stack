import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pokeman from './components/pokeman'





function App() {
  const [click,setclick] = useState(false);
  const onClick = () =>{
  click? setclick(false)
  :setclick(true)
  }
  return (
    <div>
      <button onClick={onClick}>Fetch Pokeman</button>
      {click?<Pokeman/>:''}
    </div>

  )
}
export default App;
