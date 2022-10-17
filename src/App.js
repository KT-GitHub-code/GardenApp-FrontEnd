import React from "react";
import Garden from "./Garden";
import {Route, Routes, useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";


function App() {
  return (
    <div className="App">
      <Garden/>
    </div>
  );
}

export default App;
