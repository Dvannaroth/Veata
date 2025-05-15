import React from 'react';
import "./index.css";
import {RouterProvider} from "react-router-dom";
import router from './pages/Routes/Routes';



function App() {
  return (
    <div className="App">      
      <RouterProvider router={router} />     
    </div>
  );
}

export default App;