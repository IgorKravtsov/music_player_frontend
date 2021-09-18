import React from 'react';
import './App.css';
import AppRouter from "../AppRouter";
import Navbar from "../navbar/navbar";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <AppRouter/>
   </div>
  );
}

export default App;
