function Phone({ phone, disabled, updateCart }) {
    return (
        <div 
            className={`phone${disabled?" disabled":""}`}
        >
            <button
                disabled={disabled} 
                className="no-style-btn"
                onClick={()=> {
                    updateCart(phone)
                }}
            >
                <div className="box">
                    <p className="brand">
                        {phone.brand}
                    </p>
                </div>
            </button>
            <div className="price">
                Add <span>${phone.price}</span>
            </div>
        </div>
    )
}

export default Phone