
import './App.css';
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Items from './Pages/Items/Items';
import Product from './Pages/Product/Product';

const appRouter =  createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Navbar />}>
    <Route path='' element={<Home />}/>
    <Route path='Man' element={<Items />}/>
    <Route path='Women' element={<Items />}/>
    <Route path='Product' element={<Product />}/>
  </Route>  
))

function App() {
 

  return (
   <RouterProvider router={appRouter}/>
  );
}

export default App;
