import React from "react";
// import { Route } from "react-router-dom";
import Welcome from "./components/Welcome";
// import Product from "./components/Product";
// import MainHeader from "./components/MainHeader";
import Login from "./Login";
import Register from "./Register";
// import { useNavigate } from 'react-router';

import {    Route , Routes} from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
        </Routes>
      </div>
    );
  }
}

// ====================================

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
