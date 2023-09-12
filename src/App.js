import React from "react";
import Garden from "./components/Garden";
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import NewPlantCreator from "./components/NewPlantCreator";
import {GardenProvider} from "./context/GardenContext";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <GardenProvider>
    <Routes>
      <Route path="/" element={<Layout/>}>
          <Route path="garden" element={<Garden/>}/>
          <Route path="garden/newplant" element={<NewPlantCreator/>}/>
          <Route path="registration" element={<Register/>}/>
          <Route path="login" element={<Login/>}/>
      </Route>
    </Routes>
    </GardenProvider>
  );
}

export default App;
