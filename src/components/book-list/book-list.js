import React, {Component} from 'react'
import {connect} from 'react-redux'

import {compose} from '../../utils'
import {withBookstoreService} from '../hoc'
import BookListItem from '../book-list-item'
import {booksLoaded} from '../../actions'
import Spinner from '../spinner'
import './book-list.css'


class BookList extends Component {

  componentDidMount() {
    // receive data and dispatch action to store
    const {bookstoreService, booksLoaded} = this.props
    bookstoreService.getBooks()
      .then(data => booksLoaded(data))
  }

  render() {
    const {books, loading} = this.props

    if (loading) {
      return <Spinner/>
    }

    return (
      <ul className="book-list">
        {
          books.map(book => {
            return (
              <li key={book.id}>
                <BookListItem book={book}/>
              </li>
            )
          })
        }
      </ul>
    )
  }
}

const mapStateToProps = ({books, loading}) => {
  return {books, loading}
}

const mapDispatchToProps = {
  booksLoaded
}

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList)
