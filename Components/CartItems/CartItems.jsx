import React, { useContext } from 'react'
import './CartItems.css';
import { ShopContext } from '../Context/ShopContext';
import removeicon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
    const {PRODUCTS,getTotalCartAmount, cartItems,removeFromCart}=useContext(ShopContext);
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        
        {PRODUCTS.map((product)=>{
                if(cartItems[product.id]>0){
                    return <div>
                        <div className='cartitems-format cartitems-format-main'>
                            <img src={product.Image} alt='' className='carticon-product-icon'/>
                            <p>{product.Name}</p>
                            <p>${product.price}</p>
                           
                            <button className='cartitems-quantity'>{cartItems[product.id]}</button>
                            <p>{product.price*cartItems[product.id]}</p>
                            <img src={removeicon} className='cartitems-remove-icon' alt='' onClick={()=>removeFromCart(product.id)} />
                        </div>
                    </div>
                }
            return null;  
            })}  
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div className='cartitems-total-item'>
                        <p>SubTotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>    
                </div>
                
                <div className="cartitems-promocode">
                <p>If You Have a Promo Code, Enter It Here</p>
                <div className="cartitems-promobox">
                 <input type="text" placeholder='  Enter Promo Code...' />
                 <button>Submit</button>
               </div>
                </div>    
                    </div>      
            
            
        
        
            
        
        
            </div>
    
    
    
  )
}

export default CartItems;