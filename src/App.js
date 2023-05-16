import {NavLink, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Book from './pages/Book'
import { useState } from "react";

function App() {
  return (
    <div className="wrapper">
    <nav>
      <ul>
        <li><NavLink to="/" activeclassname="active">Home</NavLink></li>
        <li><NavLink to="/about" activeclassname="active">About</NavLink></li>
        <li><NavLink to="/book" activeclassname="active">Book</NavLink></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/book" element={<Book/>} />
      <Route path="/test" element={<h1>This just for testing</h1>} />
    </Routes>
    </div>
    // <div className="App">
    //   <h1>Hello world</h1>
    // </div>
  );
}

export default App;
