import React, { useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//components
import Home from './components/Home/Home.js'
import Login from './components/Login/Login.js'
//style
import './App.css';


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>}/>
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
