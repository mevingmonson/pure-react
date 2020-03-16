import React, { Component } from 'react'
import Nav from './components/Nav'
import ItemPage from './components/ItemPage'
import { items } from './StaticData'

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
    this.setState({
      cart: [...this.state.cart, item.id]
    });
    console.log(this.state.cart.length, ' items');
  }

  renderContent() {
    switch (this.state.activeTab) {
      default:
      case 0: return <ItemPage items={items} onAddToCart={this.handleAddToCart} />
      case 1: return <span>Cart</span>
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
      </div>
    );
  }
}
