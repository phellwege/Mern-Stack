import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/update';

function App() {
  const removeFromDom = productId => {
    
}
  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <Detail path="/products/:id" removeFromDom={removeFromDom}/>
        <Update path="products/:id/edit"/>
      </Router>
    </div>
  );
  
}

export default App;
