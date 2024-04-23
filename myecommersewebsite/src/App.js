/*This file indicate-main or root component of your application. 
It's where you define the overall structure and layout of your application*/
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import { BrowserRouter,Routes,Route} from 'react-router-dom'// used for handling routing in React applications
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import Footer from './Component/Footer/Footer';
import men_banner from './Component/Assets/banner_mens.png';
import women_banner from './Component/Assets/banner_women.png';
import kid_banner from './Component/Assets/banner_kids.png';
function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Define routes for different pages */}
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path='/women' element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path='/kids' element={<ShopCategory  banner={kid_banner} category="kid" />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<LoginSignup />} />
        </Routes>
        {/* Footer is always visible */}
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
