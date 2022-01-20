
import logo from './logo.svg';
import './App.scss';
import Mycomponent from './example/Mycomponent';
import ListToDoApp from './todos/ListToDoApp';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Nav from './router_nav/Nav.js';
import Home from './example/Home';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav/>
          <img src={logo} className="App-logo" alt="logo" />
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"></a>

          <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/todo">
            <ListToDoApp/>
          </Route>
          <Route path="/about">
            <Mycomponent/>
          </Route>
        </Switch>
        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
