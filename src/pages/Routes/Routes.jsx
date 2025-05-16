import React from 'react'
import Home from "../Home";
import About from "../About";
import Service from "../Service";
import Event from "../Event";
import NotFoundPage from "../NotFoundPage";
import ErrorBoundary from '../ErrorBoundary';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
{
    path:"/veata",
    element:<Home />
},
{
    path:"/veata/About",
    element:<About />
},
{
    path:"/veata/Service",
    element: <Service />
},


{
    path:"/veata/Event",
    element: <Event />
},


{
    path:"/veata/ErrorBoundary",
    element:<ErrorBoundary />
},
{
    path:"/veata/NotFoundPage",
    element: <NotFoundPage />
}

        
])

export default router
