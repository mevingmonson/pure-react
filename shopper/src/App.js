import React, { Component } from 'react'
import Nav from './components/Nav'
import ItemPage from './components/ItemPage'
import { items } from './StaticData'
import CartPage from './components/CartPage'

export default class App extends Component {

  state = {
    activeTab: 0,
    cart: []
  }

  handleTabChange = (index) => {
    this.setState({
      activeTab: index
    });
  }

  handleAddToCart = (item) => {
    // let cartCopy = [...this.state.cart];
    // let cartCopy = this.state.cart.slice();

    // cartCopy.push(item.id)
    this.setState({
      cart: [...this.state.cart, item.id]
    });
    // console.log('cart copy', cartCopy);

  }

  handleRemoveOne = (item) => {
    let index = this.state.cart.indexOf(item.id);
    this.setState({
      cart: [
        ...this.state.cart.slice(0, index),
        ...this.state.cart.slice(index + 1)
      ]
    })
  }

  renderCart() {
    // Count how many of each item is in the cart
    let itemCounts = this.state.cart.reduce((itemCounts, itemId) => {
      itemCounts[itemId] = itemCounts[itemId] || 0;
      itemCounts[itemId]++;
      return itemCounts;
    }, {});

    // Create an array of items
    let cartItems = Object.keys(itemCounts).map(itemId => {
      // Find the item by its id
      var item = items.find(item =>
        item.id === parseInt(itemId, 10)
      );
      console.log(item)

      // Create a new "item" that also has a 'count' property
      return {
        ...item,
        count: itemCounts[itemId]
      }

    });
    console.log(cartItems)

    return (
      <CartPage items={cartItems} onAddOne={this.handleAddToCart} onRemoveOne={this.handleRemoveOne} />
    );
  }



  renderContent() {
    switch (this.state.activeTab) {
      default:
      case 0: return <ItemPage items={items} onAddToCart={this.handleAddToCart} />
      case 1: return this.renderCart();
    }
  }

  render() {
    let { activeTab } = this.state;
    return (
      <div className="app">
        <Nav activeTab={activeTab} onTabChange={this.handleTabChange} />
        <main className="app-content">
          {this.renderContent()}
        </main>
        {console.log('cart', this.state.cart)}
      </div>
    );
  }
}
