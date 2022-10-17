import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewPlantCreator from './NewPlantCreator';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/*" element={<App/>}/>
        <Route path="/garden/newplant" element={<NewPlantCreator/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

