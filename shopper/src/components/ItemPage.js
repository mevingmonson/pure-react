import React from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'

function ItemPage({ items, onAddToCart }) {
    return (
        <ul className="item-page-items">
            {items.map(item => <li key={item.id} className="item-page-item">
                <Item item={item}>
                    <button
                        className="item-addtocart"
                        onClick={() => onAddToCart(item)}>
                        Add to Cart
                    </button>
                </Item>
            </li>
            )}
        </ul>
    );
}

ItemPage.propTypes = {
    items: PropTypes.array.isRequired,
    onAddToCart: PropTypes.func.isRequired
};

export default ItemPage;

