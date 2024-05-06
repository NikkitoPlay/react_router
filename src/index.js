import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import {
  createBrowserRouter,
  Navigate,
  RouterProvider
} from 'react-router-dom';


import Home from "./pages/Home";
import About from "./pages/About";
import Product from './pages/Product';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import Search from './pages/Search';


/*const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:'/about',
    element:<About/>
  }
]);*/

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children: [
      {
        path:"/",
        element:<Home/>
      },
      {
        path:'/about',
        element:<About/>
      },
      //rota dinamica
      {
        //faz refencia para o useParams
        path:'/products/:id',
        element: <Product/>
      },
      //nested
      {
        path:'/products/:id/info',
        element: <Info/>
      },
      {
        //redirect
        path: '/company',
        element: <Navigate to='/about'/>
      },
      {
        path:'/search',
        element: <Search/>
      },
      //no-match route
      {
        path:'*',
        element: <NotFound/>
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
