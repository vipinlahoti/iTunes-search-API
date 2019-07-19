import React from 'react';
import SearchSuggestionsItem from './SearchSuggestionsItem';

const SearchSuggestionsList = props => {
  return (
    <div>
      <div className="row">
        <div className="suggestions__inner_kind">{props.itemKey}</div>
      </div>

      {props.itemValue.map((item, index) => {
        return (
          <SearchSuggestionsItem
            key={index}
            items={item}
            favToggle={props.favToggle}
          />
        )
      })}

    </div>
  );
}

export default SearchSuggestionsList;
