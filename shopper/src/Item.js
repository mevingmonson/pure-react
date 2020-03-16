import React, { Component } from 'react'
import PropTypes from 'prop-types'


const Item = ({ item, children }) => (
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
        <div className="Item-right">
            <div className="Item-price">${item.price}</div>
            {children}
        </div>
    </div>
);

Item.propTypes = {
    item: PropTypes.object.isRequired,
    children: PropTypes.node
};

export default Item
