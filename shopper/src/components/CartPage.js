import React from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'

function CartPage({ items, onAddOne, onRemoveOne }) {
    return (
        <ul className="cartpage-items">
            {
                items.map(item =>
                    <li key={item.id} className="cartpage-item">
                        <Item item={item}>
                            <div className="cart-item-controls">
                                <button
                                    className="cart-item-removeOne"
                                    onClick={() => onRemoveOne(item)}>&ndash;</button>
                                <span className="cart-item-count">{item.count}</span>
                                <button
                                    className="cart-item-addOne"
                                    onClick={() => onAddOne(item)}>+</button>
                            </div>
                        </Item>
                    </li>)
            }
        </ul>
    )
}

CartPage.propTypes = {
    items: PropTypes.array.isRequired,
    onAddOne: PropTypes.func.isRequired,
    onRemoveOne: PropTypes.func.isRequired
};

export default CartPage
