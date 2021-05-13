import logo from './logo.svg';
import './App.css';
import { Router } from '@reach/router';
import Welcome from './components/Welcome';
import Word from './components/Word';
import WordColors from './components/WordColors';


function App() {
  return (
    <div className="App">
      <Router>
        <Welcome path="/home"/>
        <Word path="/:word"/>
        <WordColors path="/hello/blue/red"/>
      </Router>
    </div>
  );
}

export default App;
