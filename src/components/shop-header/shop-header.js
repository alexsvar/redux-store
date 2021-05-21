import React from 'react'

import './shop-header.css'


const ShopHeader = ({numItems, total}) => {
  return (
    <header className="shop-header row">
      <a href="http://localhost:3000" className="logo text-dark">Redux Store</a>
      <a href="http://localhost:3000" className="shopping-cart">
        <i className="cart-icon fa fa-shopping-cart"/>
        {numItems} items (${total})
      </a>
    </header>
  )
}

export default ShopHeader
