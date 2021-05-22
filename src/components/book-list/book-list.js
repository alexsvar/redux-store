import React, {Component} from 'react'
import {connect} from 'react-redux'

import {compose} from '../../utils'
import {withBookstoreService} from '../hoc'
import BookListItem from '../book-list-item'
import {booksRequested, booksLoaded, booksError} from '../../actions'
import Spinner from '../spinner'
import './book-list.css'
import ErrorIndicator from '../error-indicator'


class BookList extends Component {

  componentDidMount() {
    this.props.fetchBooks()
  }

  render() {
    const {books, loading, error} = this.props

    if (loading) {
      return <Spinner/>
    }

    if (error) {
      return <ErrorIndicator/>
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

const mapStateToProps = ({books, loading, error}) => {
  return {books, loading, error}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const {bookstoreService} = ownProps

  return {
    fetchBooks: () => {
      dispatch(booksRequested())
      bookstoreService.getBooks()
        .then(data => dispatch(booksLoaded(data)))
        .catch(error => dispatch(booksError(error)))
    }
  }
}

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList)

