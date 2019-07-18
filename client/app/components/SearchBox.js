import React, { Component } from 'react';
import axios from 'axios';
import SearchSuggestions from './SearchSuggestions';
import './SearchBox.css';

class SearchBox extends Component {
  state = {
    query: '',
    results: [],
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        this.getInfo()
      }
      else {
        this.setState({
          results: []
        })
      }
    })
  }

  // handleClearForm = () => {
  //   this.setState({
  //     query: '',
  //     results: []
  //   })

  //   console.log('yes')
  // }

  getInfo = () => {
    axios.get('/searchapi', {
      params: {
        searchId: this.state.query
      }
    })
    .then(({ data }) => {
      console.log(data)
      this.setState({
        results: [data] // iTunes API returns a data                             
      })
    })
  }

  render() {
    const { results } = this.state;

    return (
      <div className="search__wrapper">
        <div className="search__wrapper_form">
          <input
            placeholder="Start searching.."
            className="search__wrapper_box"
            ref={input => this.search = input}
            onChange={this.handleInputChange}
          />
         {/* 
          Clear form button
          <button
            className="search__wrapper-clear"
            onClick={this.handleClearForm}>X</button>
        */}
        </div>

        {results.length ? (
          <div className="suggestions__wrapper">
            {results.map((items, index) => {
              return <SearchSuggestions key={index} items={items}/>
            })}
          </div>
        ) : null }
      </div>
    )
  }
}

export default SearchBox;
