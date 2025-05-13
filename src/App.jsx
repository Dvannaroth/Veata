import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Event from './pages/Event';
import NotFoundPage from './components/NotFoundPage';
import ErrorBoundary from './components/ErrorBoundary';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import NotFoundPage from './components/NotFoundPage';
// import ErrorBoundary from './components/ErrorBoundary';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },

  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/service',
    element: <Service />,
  },

    {
    path: '/event',
    element: <Event />,
  },

  {
    path: '*',
    element: <NotFoundPage />
  },



  {
    path: '/errorBoundary',
    element: <ErrorBoundary />
  },


]);



function App() {
  return (
    <div className="App">      
      <RouterProvider router={router} />
    </div>
  );
}

export default App;