import React, { useContext } from 'react';
import './CartItem.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';
const CartItem = () => {
    const {getTotalCartAmount,all_product,cartItems,removeToCart}=useContext(ShopContext);

  return (
    <div className='cartitem'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr/>
      {all_product.map((e)=>{
        if(cartItems[e.id]>0)
        {
            return <div>
            <div className="cartitems-format  cartitems-format-main">
                <img src={e.image} alt="" className='carticon-product-icon'/>
                <p>{e.name}</p>  {/*product name */}
                <p>${e.new_price}</p> {/*product new price*/}
                <button className='cartitem-quantity'>{cartItems[e.id]}</button> {/*display product quantity*/}
                <p>${e.new_price*cartItems[e.id]}</p> {/*total value of individual item*/}
                <img className='cartitem-remove-icon'src= {remove_icon} onClick={()=>{removeToCart(e.id)}}alt="" />  
            </div>
            <hr />
          </div>
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>cart totals</h1>
            <div>
                <div className="cartitems-total-item">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr/>
                <div className="cartitems-total-item">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr/>
                <div className="cartitems-total-item">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitem-promocode">
            <p>If you have a promo code then enter it here</p>
            <div className="cartitem-promobox">
                <input  type="text" placeholder='promo code'/>
                <button>Submit</button>
            </div>
        </div>
      </div>
    </div>
    
  )
}

export default CartItem
