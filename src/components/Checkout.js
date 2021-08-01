import { Link } from  "react-router-dom"
import { Fragment, } from "react";
import CheckoutItem from "./CheckoutItem"
import downArrow from "../assets/img/down-arrow.png"

import "../css/checkout.css"

function Checkout({ pay, cart, total, removePhone, setCartOffSet, cartOffSet, }) {
    return (
        <div className="checkout">
            {
                cart?.length > 0 ?
                <Fragment>
                    <div className="heading">
                        <span>Item</span>
                        <span>Price</span>
                    </div>
                    {
                        cart.slice(cartOffSet, cartOffSet+3).map(
                            (item, idx) => (
                                <CheckoutItem
                                    key={idx}
                                    updateCart={removePhone}
                                    phone={item}
                                />
                            )
                        )
                    }
                    {cart?.length > 3 &&
                        <button 
                            className="no-style-btn"
                            onClick={()=> setCartOffSet(cartOffSet + 3)}
                            disabled={cart.slice(cartOffSet + 3).length === 0}
                        >
                            <img 
                                src={downArrow} 
                                alt="down-arrow"
                                className="arrow"
                            />
                        </button>
                    }
                    
                    <button 
                        onClick={() => {
                            pay()
                        }} 
                        className="pay"
                    >
                        Pay ${total}
                    </button>
                </Fragment> :

                <p className="no-items">
                    There are no items in your cart. <Link to="/shopping">Please add items</Link>.
                </p>
            }
        </div>
    )
}

export default Checkout