import "../../../src/css/header.css"
import cart from "./../../assets/img/shopping-cart.png";

const Header = ({ title, checkout, numOfItems, pathname, continueShopping }) => {
    return (
        <div className="header">
            <h2 className="title">{title}</h2>
            <button 
                className="cart no-style-btn"
                onClick={()=> {
                    if (pathname !== "/checkout") {
                        checkout()
                    }
                    else {
                        continueShopping()
                    }
                }}
            >
                {numOfItems > 0 &&
                    <div className="number-of-items-badge">{numOfItems}</div>
                }
                <img
                    src={cart}
                    alt="shopping-cart"
                />
            </button>
        </div>
    )
}

export default Header