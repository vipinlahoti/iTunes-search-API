import React, { Component } from 'react';
import SearchSuggestionsTitle from './SearchSuggestionsTitle';
import './SearchBox.css';

class SearchSuggestions extends Component {

  render() {
    const genre = this.props.items;

    return (
      <div className="suggestions__inner">
        {Object.keys(genre).map((item, index) => (
          <SearchSuggestionsTitle key={index} itemKey={item} itemValue={genre[item]} />
        ))}
      </div>
    );
  }
}

export default SearchSuggestions;
