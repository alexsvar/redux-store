import React from 'react'

import './book-list-item.css'


const BookListItem = ({book}) => {
  const {coverImage, title, author, price} = book

  return (
    <div className="book-list-item">
      <div className="book-cover">
        <img src={coverImage} alt="cover" />
      </div>
      <div className="book-details">
        <a href="http://localhost:3000" className="book-title">{title}</a>
        <div className="book-author">{author}</div>
        <div className="book-price">${price}</div>
        <button className="btn btn-info add-to-cart">Add to cart</button>
      </div>
    </div>
  )
}

export default BookListItem
