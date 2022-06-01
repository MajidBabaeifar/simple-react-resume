import { useState } from 'react';

const Cart = ({ item }) => {
    const [isSelected, setIsSelected] = useState(false)

    return (<div className="--card">
        <img src={item.image} />
        <span style={{ fontWeight: 700 }}>{item.name}</span>
        <span
            style={{ fontWeight: 200, fontSize: "smaller" }}
            className="description--text"
        >
            {item.desription}
        </span>
        <span>{item.price}</span>
        <span>{item.isAvailable ? "available" : "not available"}</span>
        <button onClick={() => setIsSelected(isSelected => !isSelected)}>
            {isSelected ? "Remove from cart" : "Add to cart"}
        </button>
    </div>)
}

export default Cart;