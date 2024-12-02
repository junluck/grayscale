
import './App.css';
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Items from './Pages/Items/Items';
import Product from './Pages/Product/Product';
import { useState } from 'react';


function App() {
const [isClickedFive,setIsClickedFive] = useState([false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false])

const appRouter =  createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Navbar isClickedFive={isClickedFive} setIsClickedFive={setIsClickedFive} />}>
    <Route path='' element={<Home isClickedFive={isClickedFive} setIsClickedFive={setIsClickedFive} />}/>
    <Route path='items' element={<Items />}/>
    <Route path='Product' element={<Product />}/>
  </Route>  
))


 

  return (
   <RouterProvider router={appRouter}/>
  );
}

export default App;
