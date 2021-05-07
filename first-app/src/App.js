import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <>
        <h1>Hello Dojo!</h1>
        <h3>Things I need to do</h3>
        <ul>
          <li>learn React</li>
          <li>Climb Mount Everest</li>
          <li>Run a Marathon</li>
          <li>Feed the Dogs</li>
        </ul>
        </>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
