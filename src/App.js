import React from "react";
import Garden from "./Garden";
import {Route, Routes, useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import Layout from "./Layout";
import NewPlantCreator from "./NewPlantCreator";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
          <Route path="garden" element={<Garden/>}/>
          <Route path="garden/newplant" element={<NewPlantCreator/>}/>
      </Route>
    </Routes>
  );
}

export default App;
