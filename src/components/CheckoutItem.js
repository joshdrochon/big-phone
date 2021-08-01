function CheckoutItem({ phone, updateCart }) {
    return (
        <div
            className="checkout-item"
        >
            <div>
                <div className="box">
                    <p className="brand">
                        {phone.brand}
                    </p>
                </div>
                <div>
                    <p>
                        ${phone.price}
                    </p>
                </div>
            </div>
            <button
                className="no-style-btn"
                onClick={() => {
                    updateCart(phone)
                }}
            >
                Remove
            </button>
        </div>
    )
}

export default CheckoutItem