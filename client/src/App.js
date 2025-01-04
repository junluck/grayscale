
import './App.css';
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Items from './Pages/Items/Items';
import Product from './Pages/Product/Product';
import { useState } from 'react';
import MaleAndFemale from './Pages/MaleAndFemale/MaleAndFemale';
import CartPage from './Pages/Cart/CartPage';
import CheckoutPage from './Pages/Checkout/CheckoutPage';
import Success from './Pages/Success/Success';
import Failed from './Pages/Failed/Failed';
import { cartAssign } from './features/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {
const dispatch = useDispatch()
const [isClickedFive,setIsClickedFive] = useState([false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false])
const cartSlice = useSelector(state => state.CartSlice)

 


const appRouter =  createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Navbar isClickedFive={isClickedFive} setIsClickedFive={setIsClickedFive} />}>
    <Route path='' element={<Home isClickedFive={isClickedFive} setIsClickedFive={setIsClickedFive} />}/>
    <Route path='items' element={<Items />}/>
    <Route path="manOrWomenChoice" element={<MaleAndFemale />}/>
    <Route path='Product' element={<Product />}/>
    <Route path="cart" element={<CartPage />}/>
    <Route path="checkout" element={<CheckoutPage />}/>
    <Route path="Success" element={<Success />}/>
    <Route path="Failed" element={<Failed />}/>
  </Route>  
))


 

  return (
   <RouterProvider router={appRouter}/>
  );
}

export default App;
