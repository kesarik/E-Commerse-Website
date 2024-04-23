/*rafc=react arrow function component */
import React, { useContext, useState} from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {

  const [menu,setmenu]=useState("shop"); //using useState we move from one page to another.
  const {getTotalCartItems}=useContext(ShopContext);
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt=""/>
            <p>SHOPNEST</p>    
        </div>
        {/*onClick is a event handler and using link tag we link routes*/}
        <ul className="nav-menu">
          <li onClick={() => {setmenu("shop") }}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>{menu === "shop" ? <hr/> : <></>}</li>
          <li onClick={()=>{setmenu("Mens")}}><Link style={{textDecoration:'None'}} to="/mens">Mens</Link>{menu==="Mens"?<hr/>:<></>}</li>
          <li onClick={()=>{setmenu("Women")}}><Link style={{textDecoration:'None'}} to="/women">Women</Link>{menu==="Women"?<hr/>:<></>}</li>
          <li onClick={()=>{setmenu("Kids")}}><Link style={{textDecoration:'None'}} to="/kids">Kids</Link>{menu==="Kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt=""/></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar


