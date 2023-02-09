import { createBrowserRouter,Route, RouterProvider, Outlet, createRoutesFromElements } from "react-router-dom";
import './App.scss'

//components
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

//layout
import RootLayout from "./layouts/RootLayout";

//pages
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import SignIn from "./pages/Signin/SignIn";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path ="/" element={<RootLayout/>}>
    <Route index element={<Home />}/>
      
      <Route path= "/sign-up" element={<SignIn/>}/>   
      <Route path= "/products/:id" element={<Products />}/>   
      <Route path= "/product/:id" element={<Product />}/>   
    </Route>
  )
)


function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;