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
    path:"/About",
    element:<About />
},
{
    path:"/Service",
    element: <Service />
},


{
    path:"/Event",
    element: <Event />
},


{
    path:"/ErrorBoundary",
    element:<ErrorBoundary />
},
{
    path:"/NotFoundPage",
    element: <NotFoundPage />
}

        
])

export default router
