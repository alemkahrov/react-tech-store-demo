import React, { Component } from 'react'
import { linkData } from "../context/linkData"

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    sidebarOpen: false,
    cartOpen: false,
    cartItems: 14,
    links: linkData,
    cart: []
  }
  //handle sidebar
  handleSidebar = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen })
  }

  // handle cart
  handleCart = () => {
    this.setState({ cartOpen: !this.state.cartOpen })
  }

  // close cart
  closeCart = () => {
    this.setState({ cartOpen: false })
  }
  // open
  openCart = () => {
    this.setState({ cartOpen: true })
  }

  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleSidebar: this.handleSidebar,
        handleCart: this.handleCart,
        closeCart: this.closeCart,
        openCart: this.openCart
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };