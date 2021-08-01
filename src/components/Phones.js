import Phone from "./Phone"
import "../css/phones.css"

import leftArrow from "../assets/img/left-arrow.png";
import rightArrow from "../assets/img/right-arrow.png";

function Phones({ phones, cart, offset, setOffSet, addPhone }) {
    const cartBrands = cart.map(el=> el.brand)
    return (
        <div className="phones">
            <button
                disabled={offset === 0} 
                className="no-style-btn"
                id="left-arrow-btn"
                onClick={()=>{setOffSet(offset - 10)}}
            >
                <img 
                    src={leftArrow} 
                    alt="left-arrow"
                    className="arrow"
                    id="left-arrow"
                />
            </button>
            <div className="phone-list">
                {
                    phones.map(
                        (phone, idx) =>
                            (
                                <Phone
                                    key={idx}
                                    phone={phone} 
                                    disabled={cartBrands.includes(phone.brand)}
                                    updateCart={addPhone}
                                />
                            )
                    )
                }
            </div>
            <button 
                className="no-style-btn"
                onClick={()=>{setOffSet(offset + 10)}}
            >
                <img 
                    src={rightArrow} 
                    alt="right-arrow"
                    className="arrow"
                    id="right-arrow"
                />
            </button>
        </div>
    )
}

export default Phones