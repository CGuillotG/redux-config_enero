import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'

class App extends Component {
  render() {
    let { books } = this.props
    return (
      <div>
        <h1>El único libro</h1>
        {books.map(b => <p key={b.id}>{b.name}</p>)}
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    books: store.books
  }
}

function mapDispatchToProps() {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
