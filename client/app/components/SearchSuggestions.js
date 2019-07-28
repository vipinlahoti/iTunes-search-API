import React, { Component } from 'react';
import SearchSuggestionsList from './SearchSuggestionsList';

class SearchSuggestions extends Component {

  render() {
    const genre = this.props.items;

    return (
      <div className="suggestions__inner">
        {Object.keys(genre).map((item, index) => (
          <SearchSuggestionsList
            key={index}
            itemKey={item}
            itemValue={genre[item]}
          />
        ))}
      </div>
    );
  }
}

export default SearchSuggestions;
