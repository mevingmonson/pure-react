import React, { Component } from 'react'
import PropTypes from 'prop-types'


const Item = ({ item, onAddToCart }) => (
    <div className="item">
        <div className="item-left">
            <div className="item-image" />
            <div className="item-title" >
                {item.name}
            </div>
            <div className="item-description">
                {item.description}
            </div>
        </div>
        <div className="item-right">
            <div className="item-price">
                ${item.price}
            </div>
            <button className="item-addtocart"
                onClick={onAddToCart}>
                Add To Cart
            </button>
        </div>
    </div>
);

Item.propTypes = {
    item: PropTypes.object.isRequired,
    onAddToCart: PropTypes.func.isRequired
};

export default Item
