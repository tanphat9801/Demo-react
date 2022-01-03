import logo from './logo.svg';
import './App.scss';
import Mycomponent from './example/Mycomponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Xin chao React 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>chao mung den voi react co ban</p>
        </a>
        <Mycomponent/>
      </header>
    </div>
  );
}

export default App;
