import React from 'react'
import { FaBars, FaCartPlus } from "react-icons/fa"
import styled from "styled-components"
import { ProductConsumer } from "../context"
import logo from "../images/logo.svg"

export default function Navbar() {
  return (
    <ProductConsumer>
      {value => {
        const { cartItems, handleSidebar, handleCart } = value
        return (
          <NavWrapper>
            <div className="nav-inner">
              <FaBars className="nav-icon toggle-icon" onClick={handleSidebar} />
              <img src={logo} alt="tech store logo" />
              <div className="cart-icon-box">
                <FaCartPlus className="nav-icon cart-icon" onClick={handleCart} />
                <div className="cart-badge">{cartItems}</div>
              </div>
            </div>
          </NavWrapper>
        )
      }}
    </ProductConsumer>
  )
}

const NavWrapper = styled.nav`
position: -webkit-sticky;
position: sticky;
top: 0;
width: 100%;
padding: 1rem 1.5rem;
background: var(--mainGrey);
border-bottom: 3px solid var(--primaryColor);
.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1170px;
  margin: 0 auto;
  .cart-icon-box {
    display: flex;
    position: relative;
  }
  .cart-badge {
    position: absolute;
    right: -8px;
    top: -8px;
    background: var(--primaryColor);
    color: var(--mainWhite);
    font-size: .675rem;
    font-weight: bold;
    border-radius: 100%;
    padding: 10px;
    width: 1rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    
  }
  .nav-icon {
    font-size: 1.5rem;
    cursor: pointer;
  }
}
`