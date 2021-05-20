import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/update';
import AuthorForm from './components/AuthorForm'

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <AuthorForm path="/new"/>
        <Detail path="/authors/:id" />
        <Update path="authors/:id/edit"/>
      </Router>
    </div>
  );
  
}

export default App;
