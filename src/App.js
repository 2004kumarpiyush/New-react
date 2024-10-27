import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route ,Routes} from 'react-router-dom';
import { Component } from 'react';
import Home from './components/Home';
import Support from './components/Support';
import Labs from './components/Labs';
import About from './components/About';
import Notfound from './components/Notfound';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div className="App">
   <nav>
    <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
        <NavLink to="/support">Support</NavLink>
        </li>
        <li>
        <NavLink to="/about">About</NavLink>
          </li>
        <li>
        <NavLink to="/labs">Labs</NavLink>
          </li>
    </ul>
   </nav>
    <Routes>
         <Route path="/" element={<MainHeader/>}>
         <Route index element={<Home/>}/>  
         <Route path="/support" element={<Support/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/labs" element={<Labs/>}/>
         <Route path="*" element={<Notfound/>}/> 
         </Route>
    </Routes>
         
    </div>
  );
}

export default App;
